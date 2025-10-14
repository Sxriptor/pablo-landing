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
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Building2,
  Trophy,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    description: 'Overview and stats'
  },
  {
    name: 'Venues',
    href: '/venues',
    icon: Building2,
    description: 'Manage your venues'
  },
  {
    name: 'Courts',
    href: '/courts',
    icon: MapPin,
    description: 'Court management'
  },
  {
    name: 'Matches',
    href: '/matches',
    icon: Trophy,
    description: 'Match scheduling'
  },
  {
    name: 'Events',
    href: '/events',
    icon: Calendar,
    description: 'Classes and events'
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: BarChart3,
    description: 'Performance insights'
  },
  {
    name: 'Settings',
    href: '/settings',
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

  return (
    <div
      className={cn(
        'flex flex-col border-r bg-background transition-all duration-300',
        collapsed ? 'w-16' : 'w-64',
        className
      )}
    >
      {/* Collapse Toggle */}
      <div className="flex h-16 items-center justify-end px-4 border-b">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link key={item.name} href={item.href}>
              <div
                className={cn(
                  'group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && (
                  <>
                    <span className="ml-3 flex-1">{item.name}</span>
                    {item.name === 'Matches' && (
                      <Badge variant="secondary" className="ml-auto text-xs">
                        3
                      </Badge>
                    )}
                    {item.name === 'Events' && (
                      <Badge variant="secondary" className="ml-auto text-xs">
                        2
                      </Badge>
                    )}
                  </>
                )}
              </div>
              {!collapsed && (
                <p className="ml-11 text-xs text-muted-foreground">
                  {item.description}
                </p>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="border-t p-4">
          <div className="rounded-lg bg-muted p-3">
            <h4 className="text-sm font-medium">Need Help?</h4>
            <p className="text-xs text-muted-foreground mt-1">
              Contact our partner support team for assistance.
            </p>
            <Button variant="outline" size="sm" className="mt-2 w-full">
              Get Support
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}