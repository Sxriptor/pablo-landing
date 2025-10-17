'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  MapPin,
  Calendar,
  Users,
  Settings,
  Building2,
  Trophy,
  ArrowRight,
  ArrowLeft,
  HelpCircle,
} from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { getThemeColors, themeColors } from '@/lib/theme-colors'


const navigation = [
  {
    name: 'Dashboard',
    href: '/partner/dashboard',
    icon: LayoutDashboard,
    description: 'Overview and stats'
  },
  {
    name: 'Venues',
    href: '/partner/dashboard/venues',
    icon: Building2,
    description: 'Manage your venues'
  },
  {
    name: 'Courts',
    href: '/partner/dashboard/courts',
    icon: MapPin,
    description: 'Court management'
  },
  {
    name: 'Matches',
    href: '/partner/dashboard/matches',
    icon: Trophy,
    description: 'Match scheduling'
  },
  {
    name: 'Events',
    href: '/partner/dashboard/events',
    icon: Calendar,
    description: 'Classes and events'
  },
  {
    name: 'Classes',
    href: '/partner/dashboard/classes',
    icon: Users,
    description: 'Host and manage classes'
  },
  {
    name: 'Settings',
    href: '/partner/dashboard/settings',
    icon: Settings,
    description: 'Account settings'
  },
]

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()
  const { theme } = useTheme()
  const colors = getThemeColors(theme)

  const handleGetSupport = () => {
    window.open('/contact', '_blank')
  }

  return (
    <div
      className={cn(
        'transition-all duration-300 relative h-full flex flex-col',
        collapsed ? 'w-24' : 'w-80',
        className
      )}
      style={{
        background: theme === 'dark' ? 'rgba(5, 10, 15, 0.6)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRight: `1px solid ${colors.border}`
      }}
    >
      {/* Account Pages Section - Top */}
      <div className={cn("flex-1", collapsed && "pt-6")}>
        {!collapsed && (
          <div className="px-6 py-4 text-xs font-semibold uppercase tracking-wider" style={{ color: colors.textSecondary }}>
            Account Pages
          </div>
        )}

        {/* Navigation */}
        <div className="px-4 pb-4">
          <nav className="space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <Link key={item.name} href={item.href}>
                  <div
                    className={cn(
                      'flex items-center px-4 py-3.5 text-sm font-semibold rounded-2xl transition-all',
                    )}
                    style={isActive ? {
                      background: themeColors.accent,
                      boxShadow: '0 8px 24px rgba(69, 104, 130, 0.4)',
                      color: '#ffffff'
                    } : {
                      color: colors.textSecondary
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = colors.text
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = colors.textSecondary
                      }
                    }}
                  >
                    <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20' : 'bg-transparent'}`}>
                      <Icon className="h-4 w-4 flex-shrink-0" />
                    </div>
                    {!collapsed && (
                      <span className="ml-3">{item.name}</span>
                    )}
                  </div>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Need Help Section - Bottom */}
      {!collapsed ? (
        <div className="px-6 pb-6 mt-auto">
          <div className="rounded-2xl p-4" style={{
            background: theme === 'dark' ? 'rgba(69, 104, 130, 0.1)' : 'rgba(69, 104, 130, 0.05)',
            border: `1px solid ${colors.border}`
          }}>
            <h4 className="text-sm font-semibold mb-2" style={{ color: colors.text }}>Need Help?</h4>
            <p className="text-xs mb-3" style={{ color: colors.textSecondary }}>
              Contact our partner support team for assistance with your venues and bookings.
            </p>
            <button
              onClick={handleGetSupport}
              className="w-full px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all hover:scale-105"
              style={{
                background: themeColors.accent,
                boxShadow: '0 4px 12px rgba(69, 104, 130, 0.3)'
              }}
            >
              Get Support
            </button>
          </div>
        </div>
      ) : (
        /* Collapsed Support Button */
        <div className="px-4 pb-6 mt-auto">
          <button
            onClick={handleGetSupport}
            className="w-full p-3 rounded-2xl flex items-center justify-center text-white transition-all hover:scale-105"
            style={{
              background: themeColors.accent,
              boxShadow: '0 4px 12px rgba(69, 104, 130, 0.3)'
            }}
            title="Get Support"
          >
            <HelpCircle className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Vertical Edge Button - Centered on Account Pages section */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute right-0 translate-x-1/2 w-8 h-16 rounded-2xl flex items-center justify-center text-white transition-all hover:scale-110 hover:shadow-2xl z-10"
        style={{
          background: themeColors.accent,
          boxShadow: '0 4px 16px rgba(69, 104, 130, 0.4)',
          top: '200px' // Adjusted for removed header - centered in navigation area
        }}
        title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
      >
        {collapsed ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
      </button>

    </div>
  )
}