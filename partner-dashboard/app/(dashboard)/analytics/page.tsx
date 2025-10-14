'use client'

import { useEffect, useState } from 'react'
import { StatCard } from '../../../components/ui/StatCard'
import { ChartCard } from '../../../components/ui/ChartCard'
import { supabase } from '../../../lib/supabase'
import {
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Calendar,
  Trophy,
  Target,
  Clock,
} from 'lucide-react'

export default function AnalyticsPage() {
  const [loading, setLoading] = useState(true)
  const [analyticsData, setAnalyticsData] = useState({
    monthlyRevenue: 0,
    totalBookings: 0,
    averageUtilization: 0,
    customerSatisfaction: 0,
    monthlyGrowth: 0,
    repeatCustomers: 0,
    peakHours: '6-8 PM',
    popularSport: 'Tennis',
  })

  useEffect(() => {
    fetchAnalytics()
  }, [])

  const fetchAnalytics = async () => {
    try {
      // Mock analytics data - in real app, this would come from actual database queries
      setAnalyticsData({
        monthlyRevenue: 12450,
        totalBookings: 156,
        averageUtilization: 78,
        customerSatisfaction: 4.6,
        monthlyGrowth: 15.3,
        repeatCustomers: 68,
        peakHours: '6-8 PM',
        popularSport: 'Tennis',
      })
    } catch (error) {
      console.error('Error fetching analytics:', error)
    } finally {
      setLoading(false)
    }
  }

  // Mock chart data
  const revenueData = [
    { name: 'Jan', value: 8500 },
    { name: 'Feb', value: 9200 },
    { name: 'Mar', value: 10100 },
    { name: 'Apr', value: 11300 },
    { name: 'May', value: 10800 },
    { name: 'Jun', value: 12450 },
  ]

  const utilizationData = [
    { name: 'Mon', value: 65 },
    { name: 'Tue', value: 72 },
    { name: 'Wed', value: 78 },
    { name: 'Thu', value: 85 },
    { name: 'Fri', value: 92 },
    { name: 'Sat', value: 88 },
    { name: 'Sun', value: 75 },
  ]

  const sportDistribution = [
    { name: 'Tennis', value: 45 },
    { name: 'Pickleball', value: 30 },
    { name: 'Squash', value: 15 },
    { name: 'Badminton', value: 10 },
  ]

  const hourlyBookings = [
    { name: '6 AM', value: 5 },
    { name: '8 AM', value: 12 },
    { name: '10 AM', value: 18 },
    { name: '12 PM', value: 25 },
    { name: '2 PM', value: 22 },
    { name: '4 PM', value: 28 },
    { name: '6 PM', value: 35 },
    { name: '8 PM', value: 32 },
    { name: '10 PM', value: 15 },
  ]

  if (loading) {
    return <div>Loading analytics...</div>
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">
          Insights and performance metrics for your venues
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Monthly Revenue"
          value={`$${analyticsData.monthlyRevenue.toLocaleString()}`}
          description="This month"
          icon={DollarSign}
          trend={{ value: analyticsData.monthlyGrowth, label: 'from last month', isPositive: true }}
        />
        <StatCard
          title="Total Bookings"
          value={analyticsData.totalBookings}
          description="This month"
          icon={Calendar}
          trend={{ value: 12, label: 'from last month', isPositive: true }}
        />
        <StatCard
          title="Court Utilization"
          value={`${analyticsData.averageUtilization}%`}
          description="Average this month"
          icon={Activity}
          trend={{ value: 5, label: 'from last month', isPositive: true }}
        />
        <StatCard
          title="Customer Rating"
          value={analyticsData.customerSatisfaction}
          description="Out of 5.0"
          icon={Target}
          trend={{ value: 0.2, label: 'from last month', isPositive: true }}
        />
      </div>

      {/* Secondary Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Repeat Customers"
          value={`${analyticsData.repeatCustomers}%`}
          description="Customer retention"
          icon={Users}
        />
        <StatCard
          title="Peak Hours"
          value={analyticsData.peakHours}
          description="Busiest time"
          icon={Clock}
        />
        <StatCard
          title="Popular Sport"
          value={analyticsData.popularSport}
          description="Most booked"
          icon={Trophy}
        />
        <StatCard
          title="Growth Rate"
          value={`${analyticsData.monthlyGrowth}%`}
          description="Monthly growth"
          icon={TrendingUp}
          trend={{ value: 2.1, label: 'from last month', isPositive: true }}
        />
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard
          title="Monthly Revenue Trend"
          description="Revenue over the last 6 months"
          type="line"
          data={revenueData}
          dataKey="value"
          xAxisKey="name"
        />
        
        <ChartCard
          title="Weekly Court Utilization"
          description="Average utilization by day of week"
          type="bar"
          data={utilizationData}
          dataKey="value"
          xAxisKey="name"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard
          title="Sport Popularity"
          description="Distribution of bookings by sport"
          type="pie"
          data={sportDistribution}
          dataKey="value"
        />
        
        <ChartCard
          title="Hourly Booking Pattern"
          description="Average bookings throughout the day"
          type="bar"
          data={hourlyBookings}
          dataKey="value"
          xAxisKey="name"
        />
      </div>
    </div>
  )
}