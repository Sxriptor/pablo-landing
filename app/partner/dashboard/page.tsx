'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Building2, 
  MapPin, 
  Trophy, 
  Calendar, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Activity,
  MoreHorizontal
} from 'lucide-react'

export default function PartnerDashboard() {
  // Mock data - same as partner-demo
  const mockStats = {
    totalVenues: 5,
    totalCourts: 40,
    totalMatches: 45,
    totalEvents: 8,
    activeMatches: 12,
    upcomingEvents: 5,
    monthlyRevenue: 69000,
    totalParticipants: 744
  }

  const mockMatches = [
    { 
      id: 1, 
      title: 'Singles Tournament', 
      sport: 'tennis', 
      scheduled_date: '2024-12-20', 
      current_players: 8, 
      max_players: 16, 
      status: 'scheduled'
    },
    { 
      id: 2, 
      title: 'Doubles League Match', 
      sport: 'tennis', 
      scheduled_date: '2024-12-22', 
      current_players: 12, 
      max_players: 16, 
      status: 'scheduled'
    },
    { 
      id: 3, 
      title: 'Pro Exhibition Match', 
      sport: 'tennis', 
      scheduled_date: '2024-12-18', 
      current_players: 4, 
      max_players: 4, 
      status: 'completed'
    },
  ]

  const StatCard = ({ title, value, description, icon: Icon, trend }: any) => (
    <motion.div
      className="rounded-3xl p-6 relative overflow-hidden"
      style={{
        background: 'rgba(69, 104, 130, 0.1)',
        border: '1px solid rgba(69, 104, 130, 0.2)',
        backdropFilter: 'blur(20px)'
      }}
      whileHover={{ 
        y: -4,
        scale: 1.02
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full" style={{
        background: 'radial-gradient(circle, rgba(69, 104, 130, 0.15) 0%, transparent 70%)',
        filter: 'blur(30px)'
      }} />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-400 mb-2">{title}</p>
            <p className="text-4xl font-bold text-white">{value}</p>
          </div>
          {Icon && (
            <div className="p-3 rounded-2xl" style={{
              background: 'rgba(69, 104, 130, 0.2)'
            }}>
              <Icon className="h-6 w-6" style={{ color: '#456882' }} />
            </div>
          )}
        </div>
        {description && <p className="text-xs text-gray-500 mb-3">{description}</p>}
        {trend && (
          <div className="flex items-center space-x-2">
            <div className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-bold ${
              trend.isPositive ? 'text-green-400' : 'text-red-400'
            }`} style={{
              background: trend.isPositive ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'
            }}>
              <svg className={`w-3 h-3 ${trend.isPositive ? 'rotate-0' : 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>{trend.isPositive ? '+' : ''}{trend.value}%</span>
            </div>
            <span className="text-xs text-gray-500">{trend.label}</span>
          </div>
        )}
      </div>
    </motion.div>
  )

  const TableRow = ({ data, columns, actions }: any) => (
    <tr className="hover:bg-white/5 transition-colors" style={{ borderBottom: '1px solid rgba(69, 104, 130, 0.1)' }}>
      {columns.map((col: any, idx: number) => (
        <td key={idx} className="px-8 py-5 whitespace-nowrap text-sm font-medium text-gray-300">
          {col.render ? col.render(data[col.key], data) : data[col.key]}
        </td>
      ))}
      {actions && (
        <td className="px-8 py-5 whitespace-nowrap text-right text-sm font-medium">
          <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </td>
      )}
    </tr>
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400">Welcome back! Here's what's happening with your venues.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Venues"
          value={mockStats.totalVenues}
          description="Active venues"
          icon={Building2}
          trend={{ value: 12, label: 'from last month', isPositive: true }}
        />
        <StatCard
          title="Total Courts"
          value={mockStats.totalCourts}
          description="Available courts"
          icon={MapPin}
          trend={{ value: 8, label: 'from last month', isPositive: true }}
        />
        <StatCard
          title="Active Matches"
          value={mockStats.activeMatches}
          description="Scheduled matches"
          icon={Trophy}
          trend={{ value: 15, label: 'from last week', isPositive: true }}
        />
        <StatCard
          title="Upcoming Events"
          value={mockStats.upcomingEvents}
          description="Events this month"
          icon={Calendar}
          trend={{ value: 5, label: 'from last month', isPositive: true }}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Participants"
          value={mockStats.totalParticipants}
          description="Across all matches"
          icon={Users}
        />
        <StatCard
          title="Monthly Revenue"
          value={`$${mockStats.monthlyRevenue.toLocaleString()}`}
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

      <div className="rounded-3xl overflow-hidden" style={{
        background: 'rgba(69, 104, 130, 0.1)',
        border: '1px solid rgba(69, 104, 130, 0.2)',
        backdropFilter: 'blur(20px)'
      }}>
        <div className="px-8 py-6" style={{ borderBottom: '1px solid rgba(69, 104, 130, 0.2)' }}>
          <h3 className="text-xl font-bold text-white">Recent Matches</h3>
          <p className="text-sm text-gray-400 mt-1">Latest matches at your venues</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(69, 104, 130, 0.2)' }}>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Match</th>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Sport</th>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Players</th>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockMatches.map((match) => (
                <TableRow
                  key={match.id}
                  data={{
                    title: match.title,
                    sport: match.sport,
                    date: new Date(match.scheduled_date).toLocaleDateString(),
                    players: `${match.current_players}/${match.max_players}`,
                    status: match.status
                  }}
                  columns={[
                    { key: 'title' },
                    { key: 'sport' },
                    { key: 'date' },
                    { key: 'players' },
                    { 
                      key: 'status', 
                      render: (value: string) => (
                        <span className={`px-4 py-2 rounded-xl text-xs font-bold uppercase ${
                          value === 'scheduled' ? 'text-blue-400' :
                          value === 'completed' ? 'text-green-400' :
                          'text-gray-400'
                        }`} style={{
                          background: value === 'scheduled' ? 'rgba(69, 104, 130, 0.2)' :
                                    value === 'completed' ? 'rgba(34, 197, 94, 0.2)' :
                                    'rgba(107, 114, 128, 0.2)'
                        }}>
                          {value}
                        </span>
                      )
                    }
                  ]}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
