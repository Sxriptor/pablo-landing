'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Trophy, 
  Users,
  Calendar,
  MapPin,
  DollarSign,
  Plus,
  Eye,
  Edit,
  MoreHorizontal
} from 'lucide-react'
import { CreateMatchOverlay } from '@/components/partner/overlays'
import { useTheme } from '@/components/partner/layout/ThemeProvider'
import { getThemeColors, themeColors } from '@/lib/theme-colors'
export default function MatchesPage() {
  const { theme } = useTheme()
  const colors = getThemeColors(theme)
  const [showCreateMatchOverlay, setShowCreateMatchOverlay] = useState(false)
  const [matches, setMatches] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  // Mock data for the match overlay (reusing event overlay for matches)
  const mockVenues = [
    { id: '1', name: 'Downtown Tennis Center' },
    { id: '2', name: 'Riverside Courts' },
    { id: '3', name: 'Elite Training Facility' },
  ]

  const mockCourts = [
    { id: '1', name: 'Center Court', venueId: '1' },
    { id: '2', name: 'Court 1', venueId: '1' },
    { id: '3', name: 'Court 2', venueId: '1' },
    { id: '4', name: 'Pickleball Court A', venueId: '2' },
    { id: '5', name: 'Court 1', venueId: '2' },
    { id: '6', name: 'Premium Court', venueId: '3' },
  ]

  const handleMatchSubmit = (matchData: any) => {
    console.log('New match data:', matchData)
    // Here you would typically send the data to your backend API
    alert('Match created successfully! Check console for data.')
  }

  const MatchCard = ({ match }: any) => (
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
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full" style={{
        background: 'radial-gradient(circle, rgba(69, 104, 130, 0.15) 0%, transparent 70%)',
        filter: 'blur(30px)'
      }} />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-xl font-bold" style={{ color: colors.text }}>{match.title}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                match.status === 'scheduled' ? 'bg-blue-500/20 text-blue-400' :
                match.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                'bg-gray-500/20 text-gray-400'
              }`}>
                {match.status}
              </span>
            </div>
            <p className="text-sm mb-3" style={{ color: colors.textSecondary }}>{match.description}</p>
            <div className="flex items-center space-x-4 text-sm mb-3" style={{ color: colors.textSecondary }}>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(match.scheduled_date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>{match.start_time} - {match.end_time}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm" style={{ color: colors.textSecondary }}>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{match.venue_name}</span>
              </div>
              <span>•</span>
              <span className="capitalize">{match.sport}</span>
              <span>•</span>
              <span className="capitalize">{match.skill_level}</span>
            </div>
          </div>
          <button 
            className="p-2 transition-colors rounded-lg"
            style={{ color: colors.textSecondary }}
            onMouseEnter={(e) => e.currentTarget.style.color = colors.text}
            onMouseLeave={(e) => e.currentTarget.style.color = colors.textSecondary}
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Users className="h-4 w-4 text-blue-400" />
            </div>
            <p className="text-lg font-bold" style={{ color: colors.text }}>{match.current_players}/{match.max_players}</p>
            <p className="text-xs" style={{ color: colors.textTertiary }}>Players</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <DollarSign className="h-4 w-4 text-green-400" />
            </div>
            <p className="text-lg font-bold" style={{ color: colors.text }}>${match.entry_fee}</p>
            <p className="text-xs" style={{ color: colors.textTertiary }}>Entry Fee</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Trophy className="h-4 w-4 text-yellow-400" />
            </div>
            <p className="text-lg font-bold" style={{ color: colors.text }}>${match.prize_pool}</p>
            <p className="text-xs" style={{ color: colors.textTertiary }}>Prize Pool</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm" style={{ color: colors.textSecondary }}>
            <span className="capitalize">{match.match_type}</span> • {match.court_name}
          </div>
          <div className="flex space-x-2">
            <button className="p-2 text-blue-400 hover:text-blue-300 transition-colors rounded-lg">
              <Eye className="h-4 w-4" />
            </button>
            <button 
              className="p-2 transition-colors rounded-lg"
              style={{ color: colors.textSecondary }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.text}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.textSecondary}
            >
              <Edit className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Matches</h1>
        <p className="text-gray-400">Organize and manage competitive matches</p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-gray-400">Loading matches...</p>
          </div>
        </div>
      ) : matches.length === 0 ? (
        /* No matches yet */
        <div className="text-center py-12">
          <div className="rounded-3xl p-8 max-w-md mx-auto" style={{
            background: 'rgba(69, 104, 130, 0.1)',
            border: '1px solid rgba(69, 104, 130, 0.2)',
            backdropFilter: 'blur(20px)'
          }}>
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{
                background: 'rgba(69, 104, 130, 0.2)'
              }}>
                <Trophy className="h-8 w-8" style={{ color: '#456882' }} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No Matches Yet</h3>
              <p className="text-gray-400 mb-6">
                Create your first match to start organizing competitive games and tournaments.
              </p>
              <motion.button
                onClick={() => setShowCreateMatchOverlay(true)}
                className="text-white px-6 py-3 rounded-2xl flex items-center font-bold text-sm mx-auto"
                style={{
                  background: '#456882',
                  boxShadow: '0 8px 24px rgba(69, 104, 130, 0.4)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus className="h-4 w-4 mr-2" />
                CREATE MATCH
              </motion.button>
            </div>
          </div>
        </div>
      ) : (
        /* Show matches */
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-400">{matches.length} match{matches.length !== 1 ? 'es' : ''} found</p>
            <motion.button
              onClick={() => setShowCreateMatchOverlay(true)}
              className="text-white px-6 py-3 rounded-2xl flex items-center font-bold text-sm"
              style={{
                background: '#456882',
                boxShadow: '0 8px 24px rgba(69, 104, 130, 0.4)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="h-4 w-4 mr-2" />
              CREATE MATCH
            </motion.button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {matches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      )}

      {/* Create Match Overlay */}
      <CreateMatchOverlay
        isOpen={showCreateMatchOverlay}
        onClose={() => setShowCreateMatchOverlay(false)}
        onSubmit={handleMatchSubmit}
        venues={mockVenues}
        courts={mockCourts}
      />
    </div>
  )
}