'use client'

import { useEffect, useState } from 'react'
import { StatCard } from '../../../components/ui/StatCard'
import { ChartCard } from '../../../components/ui/ChartCard'
import { TableCard } from '../../../components/ui/TableCard'
import { supabase } from '../../../lib/supabase'
import {
  Building2,
  MapPin,
  Trophy,
  Calendar,
  Users,
  DollarSign,
  TrendingUp,
  Activity,
} from 'lucide-react'
import type { DashboardStats, ChartData } from '../../../lib/types'

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    totalVenues: 0,
    totalCourts: 0,
    totalMatches: 0,
    totalEvents: 0,
    activeMatches: 0,
    upcomingEvents: 0,
    monthlyRevenue: 0,
    totalParticipants: 0,
  })
  const [recentMatches, setRecentMatches] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const [chartData, setChartData] = useState<ChartData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (!session) return

        // Get partner ID
        const { data: partner } = await supabase
          .from('partners')
          .select('id')
          .eq('user_id', session.user.id)
          .single()

        if (!partner) return

        // Fetch stats
        const [venuesRes, courtsRes, matchesRes, eventsRes] = await Promise.all([
          supabase.from('venues').select('id').eq('partner_id', partner.id),
          supabase.from('courts').select('id').eq('venue_id', 'in', `(select id from venues where partner_id = '${partner.id}')`),
          supabase.from('matches').select('*').eq('partner_id', partner.id),
          supabase.from('events').select('*').eq('partner_id', partner.id),
        ])

        const venues = venuesRes.data || []
        const courts = courtsRes.data || []
        const matches = matchesRes.data || []
        const events = eventsRes.data || []

        // Calculate stats
        const activeMatches = matches.filter(m => m.status === 'scheduled').length
        const upcomingEventsCount = events.filter(e => 
          e.status === 'scheduled' && new Date(e.start_date) > new Date()
        ).length

        // Mock revenue calculation (would be based on actual bookings/payments)
        const monthlyRevenue = matches.reduce((sum, match) => sum + (match.entry_fee || 0), 0) +
                              events.reduce((sum, event) => sum + (event.price || 0) * (event.current_registrations || 0), 0)

        setStats({
          totalVenues: venues.length,
          totalCourts: courts.length,
          totalMatches: matches.length,
          totalEvents: events.length,
          activeMatches,
          upcomingEvents: upcomingEventsCount,
          monthlyRevenue,
          totalParticipants: matches.reduce((sum, match) => sum + (match.current_players || 0), 0),
        })

        // Recent matches for table
        const recentMatchesData = matches
          .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          .slice(0, 5)
          .map(match => ({
            title: match.title,
            sport: match.sport,
            date: new Date(match.scheduled_date).toLocaleDateString(),
            players: `${match.current_players}/${match.max_players}`,
            status: match.status,
          }))

        setRecentMatches(recentMatchesData)

        // Upcoming events for table
        const upcomingEventsData = events
          .filter(e => new Date(e.start_date) > new Date())
          .sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime())
          .slice(0, 5)
          .map(event => ({
            name: event.name,
            type: event.event_type,
            date: new Date(event.start_date).toLocaleDateString(),
            registrations: `${event.current_registrations}/${event.capacity}`,
            price: `$${event.price}`,
          }))

        setUpcomingEvents(upcomingEventsData)

        // Mock chart data for monthly activity
        const mockChartData = [
          { name: 'Jan', value: 12 },
          { name: 'Feb', value: 19 },
          { name: 'Mar', value: 15 },
          { name: 'Apr', value: 25 },
          { name: 'May', value: 22 },
          { name: 'Jun', value: 30 },
        ]
        setChartData(mockChartData)

      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  const matchColumns = [
    { key: 'title', label: 'Match' },
    { key: 'sport', label: 'Sport' },
    { key: 'date', label: 'Date' },
    { key: 'players', label: 'Players' },
    { key: 'status', label: 'Status' },
  ]

  const eventColumns = [
    { key: 'name', label: 'Event' },
    { key: 'type', label: 'Type' },
    { key: 'date', label: 'Date' },
    { key: 'registrations', label: 'Registrations' },
    { key: 'price', label: 'Price' },
  ]

  if (loading) {
    return <div>Loading dashboard...</div>
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your venues.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Venues"
          value={stats.totalVenues}
          description="Active venues"
          icon={Building2}
          trend={{ value: 12, label: 'from last month', isPositive: true }}
        />
        <StatCard
          title="Total Courts"
          value={stats.totalCourts}
          description="Available courts"
          icon={MapPin}
          trend={{ value: 8, label: 'from last month', isPositive: true }}
        />
        <StatCard
          title="Active Matches"
          value={stats.activeMatches}
          description="Scheduled matches"
          icon={Trophy}
          trend={{ value: 15, label: 'from last week', isPositive: true }}
        />
        <StatCard
          title="Upcoming Events"
          value={stats.upcomingEvents}
          description="Events this month"
          icon={Calendar}
          trend={{ value: 5, label: 'from last month', isPositive: true }}
        />
      </div>

      {/* Secondary Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Participants"
          value={stats.totalParticipants}
          description="Across all matches"
          icon={Users}
        />
        <StatCard
          title="Monthly Revenue"
          value={`$${stats.monthlyRevenue.toLocaleString()}`}
          description="This month"
          icon={DollarSign}
          trend={{ value: 23, label: 'from last month', isPositive: true }}
        />
        <StatCard
          title="Court Utilization"
          value="78%"
          description="Average this month"
          icon={Activity}
          trend={{ value: 3, label: 'from last month', isPositive: true }}
        />
        <StatCard
          title="Growth Rate"
          value="12.5%"
          description="Monthly growth"
          icon={TrendingUp}
          trend={{ value: 2, label: 'from last month', isPositive: true }}
        />
      </div>

      {/* Charts and Tables */}
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard
          title="Monthly Activity"
          description="Matches and events over time"
          type="line"
          data={chartData}
          dataKey="value"
          xAxisKey="name"
        />
        
        <ChartCard
          title="Sport Distribution"
          description="Popular sports at your venues"
          type="pie"
          data={[
            { name: 'Tennis', value: 45 },
            { name: 'Pickleball', value: 30 },
            { name: 'Squash', value: 15 },
            { name: 'Badminton', value: 10 },
          ]}
        />
      </div>

      {/* Recent Activity Tables */}
      <div className="grid gap-6 lg:grid-cols-2">
        <TableCard
          title="Recent Matches"
          description="Latest matches at your venues"
          columns={matchColumns}
          data={recentMatches}
          emptyMessage="No recent matches"
        />
        
        <TableCard
          title="Upcoming Events"
          description="Events scheduled for this month"
          columns={eventColumns}
          data={upcomingEvents}
          emptyMessage="No upcoming events"
        />
      </div>
    </div>
  )
}