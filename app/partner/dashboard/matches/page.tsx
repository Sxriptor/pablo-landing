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
import { CreateEventOverlay } from '@/components/partner/overlays'

export default function MatchesPage() {
  const [showCreateMatchOverlay, setShowCreateMatchOverlay] = useState(false)

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

  const mockMatches = [
    { 
      id: 1, 
      title: 'Singles Tournament', 
      description: 'Competitive singles tournament for intermediate to advanced players',
      sport: 'tennis', 
      scheduled_date: '2024-12-20', 
      start_time: '10:00', 
      end_time: '12:00', 
      current_players: 8, 
      max_players: 16, 
      entry_fee: 25, 
      status: 'scheduled',
      venue_name: 'Downtown Tennis Center',
      court_name: 'Center Court',
      match_type: 'singles',
      skill_level: 'intermediate',
      prize_pool: 500,
    },
    { 
      id: 2, 
      title: 'Doubles League Match', 
      description: 'Weekly doubles league - Division A championship match',
      sport: 'tennis', 
      scheduled_date: '2024-12-22', 
      start_time: '14:00', 
      end_time: '16:00', 
      current_players: 12, 
      max_players: 16, 
      entry_fee: 35, 
      status: 'scheduled',
      venue_name: 'Riverside Courts',
      court_name: 'Court 1',
      match_type: 'doubles',
      skill_level: 'advanced',
      prize_pool: 800,
    },
    { 
      id: 3, 
      title: 'Pro Exhibition Match', 
      description: 'Special exhibition featuring local tennis professionals',
      sport: 'tennis', 
      scheduled_date: '2024-12-18', 
      start_time: '19:00', 
      end_time: '21:00', 
      current_players: 4, 
      max_players: 4, 
      entry_fee: 0, 
      status: 'completed',
      venue_name: 'Elite Training Facility',
      court_name: 'Premium Court',
      match_type: 'exhibition',
      skill_level: 'professional',
      prize_pool: 0,
    },
    { 
      id: 4, 
      title: 'Pickleball Social', 
      description: 'Fun social pickleball games for all skill levels',
      sport: 'pickleball', 
      scheduled_date: '2024-12-21', 
      start_time: '16:00', 
      end_time: '18:00', 
      current_players: 6, 
      max_players: 12, 
      entry_fee: 15, 
      status: 'scheduled',
      venue_name: 'Riverside Courts',
      court_name: 'Pickleball Court A',
      match_type: 'social',
      skill_level: 'beginner',
      prize_pool: 0,
    },
  ]

  const MatchCard = ({ match }: any) => (
    <motion.div
      className="rounded-3xl p-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
        border: '1px solid rgba(59, 130, 246, 0.1)',
        backdropFilter: 'blur(20px)'
      }}
      whileHover={{ 
        y: -4,
        scale: 1.02
      }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full" style={{
        background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)',
        filter: 'blur(30px)'
      }} />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-xl font-bold text-white">{match.title}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                match.status === 'scheduled' ? 'bg-blue-500/20 text-blue-400' :
                match.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                'bg-gray-500/20 text-gray-400'
              }`}>
                {match.status}
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-3">{match.description}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-300 mb-3">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(match.scheduled_date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>{match.start_time} - {match.end_time}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-300">
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
          <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Users className="h-4 w-4 text-blue-400" />
            </div>
            <p className="text-lg font-bold text-white">{match.current_players}/{match.max_players}</p>
            <p className="text-xs text-gray-500">Players</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <DollarSign className="h-4 w-4 text-green-400" />
            </div>
            <p className="text-lg font-bold text-white">${match.entry_fee}</p>
            <p className="text-xs text-gray-500">Entry Fee</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Trophy className="h-4 w-4 text-yellow-400" />
            </div>
            <p className="text-lg font-bold text-white">${match.prize_pool}</p>
            <p className="text-xs text-gray-500">Prize Pool</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-300">
            <span className="capitalize">{match.match_type}</span> • {match.court_name}
          </div>
          <div className="flex space-x-2">
            <button className="p-2 text-blue-400 hover:text-blue-300 transition-colors rounded-lg">
              <Eye className="h-4 w-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg">
              <Edit className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Matches</h1>
          <p className="text-gray-400">Organize and manage competitive matches</p>
        </div>
        <motion.button 
          onClick={() => setShowCreateMatchOverlay(true)}
          className="text-white px-6 py-3 rounded-2xl flex items-center font-bold text-sm"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="h-4 w-4 mr-2" />
          CREATE MATCH
        </motion.button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {mockMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>

      {/* Create Match Overlay (using Event overlay) */}
      <CreateEventOverlay
        isOpen={showCreateMatchOverlay}
        onClose={() => setShowCreateMatchOverlay(false)}
        onSubmit={handleMatchSubmit}
        venues={mockVenues}
        courts={mockCourts}
      />
    </div>
  )
}