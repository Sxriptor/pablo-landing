'use client'

import { useState } from 'react'
import { Bell, Search, Settings, DoorOpen } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import type { Partner } from '@/lib/types'

interface NavbarProps {
  partner: Partner | null
}

export function Navbar({ partner }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut()
    } catch (error) {
      console.log('Sign out error (demo mode):', error)
    }
    router.push('/partner/entry')
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'rejected':
        return 'bg-red-100 text-red-800'
      case 'suspended':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl" style={{
      background: 'rgba(5, 10, 15, 0.8)',
      borderBottom: '1px solid rgba(69, 104, 130, 0.2)'
    }}>
      <div className="flex h-20 items-center justify-between px-8">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="text-xl font-bold tracking-wider" style={{
              color: '#456882'
            }}>
              PLAYCIRCLE
            </div>
            <span className="px-3 py-1 text-xs font-semibold rounded-lg" style={{
              background: 'rgba(69, 104, 130, 0.2)',
              color: '#456882',
              border: '1px solid rgba(69, 104, 130, 0.3)'
            }}>
              PARTNER
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              placeholder="Search venues, courts, matches..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl text-white placeholder-gray-500 focus:outline-none transition-all"
              style={{
                background: 'rgba(69, 104, 130, 0.1)',
                border: '1px solid rgba(69, 104, 130, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-6">
          <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-blue-500" />
          </button>
          
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Settings className="h-5 w-5" />
          </button>

          <div className="flex items-center space-x-3 pl-6" style={{ borderLeft: '1px solid rgba(69, 104, 130, 0.2)' }}>
            <div className="h-10 w-10 rounded-xl flex items-center justify-center text-white text-sm font-bold" style={{
              background: '#456882'
            }}>
              {partner ? getInitials(partner.company_name) : 'PC'}
            </div>
            <div className="hidden lg:block">
              <p className="text-sm font-semibold text-white">{partner?.company_name || 'Partner'}</p>
              <p className="text-xs text-gray-400">{partner?.email || 'partner@playcircle.com'}</p>
            </div>
            <button 
              onClick={handleSignOut}
              className="p-2 text-red-400 hover:text-red-300 transition-colors rounded-lg ml-2"
              title="Sign Out"
            >
              <DoorOpen className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}