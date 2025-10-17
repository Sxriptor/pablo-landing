'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Activity,
  DollarSign,
  Plus,
  Settings,
  MoreHorizontal
} from 'lucide-react'

export default function CourtsPage() {
  const mockCourts = [
    {
      id: 1,
      name: 'Center Court',
      venue_name: 'Downtown Tennis Center',
      sport_type: 'tennis',
      surface_type: 'hard',
      indoor: false,
      lighting: true,
      available: true,
      hourly_rate: 45,
      peak_rate: 65,
      utilization: 85,
      bookings_today: 8,
      revenue_month: 2850,
      condition: 'excellent'
    },
    {
      id: 2,
      name: 'Court 1',
      venue_name: 'Downtown Tennis Center',
      sport_type: 'tennis',
      surface_type: 'hard',
      indoor: true,
      lighting: true,
      available: true,
      hourly_rate: 40,
      peak_rate: 55,
      utilization: 72,
      bookings_today: 6,
      revenue_month: 2240,
      condition: 'good'
    },
    {
      id: 3,
      name: 'Pickleball Court A',
      venue_name: 'Riverside Courts',
      sport_type: 'pickleball',
      surface_type: 'synthetic',
      indoor: false,
      lighting: true,
      available: true,
      hourly_rate: 25,
      peak_rate: 35,
      utilization: 90,
      bookings_today: 12,
      revenue_month: 1680,
      condition: 'excellent'
    },
    {
      id: 4,
      name: 'Court 2',
      venue_name: 'Downtown Tennis Center',
      sport_type: 'tennis',
      surface_type: 'clay',
      indoor: false,
      lighting: true,
      available: false,
      hourly_rate: 50,
      peak_rate: 70,
      utilization: 0,
      bookings_today: 0,
      revenue_month: 1950,
      condition: 'maintenance'
    },
  ]

  const CourtCard = ({ court }: any) => (
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
              <h3 className="text-xl font-bold text-white">{court.name}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                court.available ? 'text-green-400' : 'text-red-400'
              }`} style={{
                background: court.available ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'
              }}>
                {court.available ? 'AVAILABLE' : 'MAINTENANCE'}
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-3">{court.venue_name}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <span className="capitalize">{court.sport_type}</span>
              <span>•</span>
              <span className="capitalize">{court.surface_type}</span>
              <span>•</span>
              <span>{court.indoor ? 'Indoor' : 'Outdoor'}</span>
            </div>
          </div>
          <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Activity className="h-4 w-4" style={{ color: '#456882' }} />
            </div>
            <p className="text-2xl font-bold text-white">{court.utilization}%</p>
            <p className="text-xs text-gray-500">Utilization</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <MapPin className="h-4 w-4 text-green-400" />
            </div>
            <p className="text-2xl font-bold text-white">{court.bookings_today}</p>
            <p className="text-xs text-gray-500">Today</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <DollarSign className="h-4 w-4 text-yellow-400" />
            </div>
            <p className="text-2xl font-bold text-white">${court.revenue_month}</p>
            <p className="text-xs text-gray-500">This month</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-300">
            <span>${court.hourly_rate}/hr • Peak: ${court.peak_rate}/hr</span>
          </div>
          <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg">
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Courts</h1>
          <p className="text-gray-400">Manage individual courts and their settings</p>
        </div>
        <motion.button 
          className="text-white px-6 py-3 rounded-2xl flex items-center font-bold text-sm"
          style={{
            background: '#456882',
            boxShadow: '0 8px 24px rgba(69, 104, 130, 0.4)'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="h-4 w-4 mr-2" />
          ADD COURT
        </motion.button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {mockCourts.map((court) => (
          <CourtCard key={court.id} court={court} />
        ))}
      </div>
    </div>
  )
}