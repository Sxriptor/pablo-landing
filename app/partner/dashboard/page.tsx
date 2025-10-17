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
import { useTheme } from '@/components/partner/layout/ThemeProvider'
import { getThemeColors, themeColors } from '@/lib/theme-colors'

export default function PartnerDashboard() {
  const { theme } = useTheme()
  const colors = getThemeColors(theme)

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
        background: theme === 'dark' ? 'rgba(69, 104, 130, 0.1)' : 'rgba(255, 255, 255, 0.9)',
        border: `1px solid ${colors.cardBorder}`,
        backdropFilter: 'blur(20px)'
      }}
      whileHover={{ 
        y: -4,
        scale: 1.02
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full" style={{
        background: theme === 'dark' ? 'radial-gradient(circle, rgba(69, 104, 130, 0.15) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(69, 104, 130, 0.08) 0%, transparent 70%)',
        filter: 'blur(30px)'
      }} />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="text-sm font-medium mb-2" style={{ color: colors.textSecondary }}>{title}</p>
            <p className="text-4xl font-bold" style={{ color: colors.text }}>{value}</p>
          </div>
          {Icon && (
            <div className="p-3 rounded-2xl" style={{
              background: theme === 'dark' ? 'rgba(69, 104, 130, 0.2)' : 'rgba(69, 104, 130, 0.1)'
            }}>
              <Icon className="h-6 w-6" style={{ color: themeColors.accent }} />
            </div>
          )}
        </div>
        {description && <p className="text-xs mb-3" style={{ color: colors.textTertiary }}>{description}</p>}
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
            <span className="text-xs" style={{ color: colors.textTertiary }}>{trend.label}</span>
          </div>
        )}
      </div>
    </motion.div>
  )

  const TableRow = ({ data, columns, actions }: any) => (
    <tr 
      className="transition-colors" 
      style={{ borderBottom: `1px solid ${colors.borderLight}` }}
      onMouseEnter={(e) => e.currentTarget.style.background = colors.hover}
      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
    >
      {columns.map((col: any, idx: number) => (
        <td key={idx} className="px-8 py-5 whitespace-nowrap text-sm font-medium" style={{ color: colors.textSecondary }}>
          {col.render ? col.render(data[col.key], data) : data[col.key]}
        </td>
      ))}
      {actions && (
        <td className="px-8 py-5 whitespace-nowrap text-right text-sm font-medium">
          <button 
            className="p-2 transition-colors rounded-lg"
            style={{ color: colors.textSecondary }}
            onMouseEnter={(e) => e.currentTarget.style.color = colors.text}
            onMouseLeave={(e) => e.currentTarget.style.color = colors.textSecondary}
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </td>
      )}
    </tr>
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold" style={{ color: colors.text }}>Dashboard</h1>
        <p style={{ color: colors.textSecondary }}>Welcome back! Here's what's happening with your venues.</p>
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
        background: theme === 'dark' ? 'rgba(69, 104, 130, 0.1)' : 'rgba(255, 255, 255, 0.9)',
        border: `1px solid ${colors.cardBorder}`,
        backdropFilter: 'blur(20px)'
      }}>
        <div className="px-8 py-6" style={{ borderBottom: `1px solid ${colors.border}` }}>
          <h3 className="text-xl font-bold" style={{ color: colors.text }}>Recent Matches</h3>
          <p className="text-sm mt-1" style={{ color: colors.textSecondary }}>Latest matches at your venues</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr style={{ borderBottom: `1px solid ${colors.border}` }}>
                <th className="px-8 py-4 text-left text-xs font-bold uppercase tracking-wider" style={{ color: colors.textSecondary }}>Match</th>
                <th className="px-8 py-4 text-left text-xs font-bold uppercase tracking-wider" style={{ color: colors.textSecondary }}>Sport</th>
                <th className="px-8 py-4 text-left text-xs font-bold uppercase tracking-wider" style={{ color: colors.textSecondary }}>Date</th>
                <th className="px-8 py-4 text-left text-xs font-bold uppercase tracking-wider" style={{ color: colors.textSecondary }}>Players</th>
                <th className="px-8 py-4 text-left text-xs font-bold uppercase tracking-wider" style={{ color: colors.textSecondary }}>Status</th>
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
