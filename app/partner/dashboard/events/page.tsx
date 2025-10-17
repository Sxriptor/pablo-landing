'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Users,
  Clock,
  MapPin,
  DollarSign,
  Plus,
  Eye,
  Edit,
  MoreHorizontal
} from 'lucide-react'
import { CreateEventOverlay } from '@/components/partner/overlays'

export default function EventsPage() {
  const [showCreateEventOverlay, setShowCreateEventOverlay] = useState(false)

  // Mock data for the event overlay
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

  const handleEventSubmit = (eventData: any) => {
    console.log('New event data:', eventData)
    // Here you would typically send the data to your backend API
    alert('Event created successfully! Check console for data.')
  }

  const mockEvents = [
    {
      id: 1,
      name: 'Tennis Fundamentals Workshop',
      description: 'Learn the basics of tennis including proper grip, stance, and swing techniques',
      event_type: 'workshop',
      sport: 'tennis',
      instructor_name: 'Sarah Johnson',
      start_date: '2024-12-21',
      end_date: '2024-12-21',
      start_time: '10:00',
      end_time: '12:00',
      capacity: 12,
      current_registrations: 8,
      price: 75,
      early_bird_price: 65,
      skill_level: 'beginner',
      age_group: 'adults',
      venue_name: 'Downtown Tennis Center',
      status: 'scheduled',
    },
    {
      id: 2,
      name: 'Advanced Pickleball Clinic',
      description: 'Master advanced pickleball strategies, shot placement, and competitive play techniques',
      event_type: 'clinic',
      sport: 'pickleball',
      instructor_name: 'Mike Rodriguez',
      start_date: '2024-12-23',
      end_date: '2024-12-23',
      start_time: '14:00',
      end_time: '16:30',
      capacity: 16,
      current_registrations: 14,
      price: 95,
      skill_level: 'advanced',
      age_group: 'adults',
      venue_name: 'Riverside Courts',
      status: 'scheduled',
    },
    {
      id: 3,
      name: 'Junior Tennis Summer Camp',
      description: 'Week-long tennis camp for kids featuring skill development, games, and fun activities',
      event_type: 'camp',
      sport: 'tennis',
      instructor_name: 'Coach Emma Wilson',
      start_date: '2024-12-26',
      end_date: '2024-12-30',
      start_time: '09:00',
      end_time: '15:00',
      capacity: 20,
      current_registrations: 18,
      price: 350,
      early_bird_price: 300,
      skill_level: 'all_levels',
      age_group: 'kids',
      venue_name: 'Elite Training Facility',
      status: 'scheduled',
    },
    {
      id: 4,
      name: 'Monthly Tennis Social',
      description: 'Casual tennis social for players of all levels. Meet new players and enjoy friendly games',
      event_type: 'social',
      sport: 'tennis',
      instructor_name: null,
      start_date: '2024-12-28',
      end_date: '2024-12-28',
      start_time: '18:00',
      end_time: '21:00',
      capacity: 24,
      current_registrations: 16,
      price: 25,
      skill_level: 'all_levels',
      age_group: 'adults',
      venue_name: 'Central Park Tennis Club',
      status: 'scheduled',
    },
  ]

  const EventCard = ({ event }: any) => (
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
              <h3 className="text-xl font-bold text-white">{event.name}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                event.status === 'scheduled' ? 'bg-blue-500/20 text-blue-400' :
                event.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                'bg-gray-500/20 text-gray-400'
              }`}>
                {event.status}
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-3">{event.description}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-300 mb-3">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(event.start_date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{event.start_time} - {event.end_time}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{event.venue_name}</span>
              </div>
              <span>•</span>
              <span className="capitalize">{event.event_type}</span>
              <span>•</span>
              <span className="capitalize">{event.sport}</span>
            </div>
          </div>
          <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>

        {event.instructor_name && (
          <div className="mb-4 p-3 rounded-2xl bg-white/5">
            <p className="text-sm text-gray-300">
              <span className="font-semibold">Instructor:</span> {event.instructor_name}
            </p>
          </div>
        )}

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Users className="h-4 w-4 text-blue-400" />
            </div>
            <p className="text-lg font-bold text-white">{event.current_registrations}/{event.capacity}</p>
            <p className="text-xs text-gray-500">Registered</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <DollarSign className="h-4 w-4 text-green-400" />
            </div>
            <p className="text-lg font-bold text-white">${event.price}</p>
            <p className="text-xs text-gray-500">Price</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-white">{Math.round((event.current_registrations / event.capacity) * 100)}%</p>
            <p className="text-xs text-gray-500">Full</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-300">
            <span className="capitalize">{event.skill_level.replace('_', ' ')}</span> • {event.age_group}
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
          <h1 className="text-3xl font-bold text-white">Events</h1>
          <p className="text-gray-400">Organize workshops, clinics, and special events</p>
        </div>
        <motion.button 
          onClick={() => setShowCreateEventOverlay(true)}
          className="text-white px-6 py-3 rounded-2xl flex items-center font-bold text-sm"
          style={{
            background: '#456882',
            boxShadow: '0 8px 24px rgba(69, 104, 130, 0.4)'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="h-4 w-4 mr-2" />
          CREATE EVENT
        </motion.button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {mockEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {/* Create Event Overlay */}
      <CreateEventOverlay
        isOpen={showCreateEventOverlay}
        onClose={() => setShowCreateEventOverlay(false)}
        onSubmit={handleEventSubmit}
        venues={mockVenues}
        courts={mockCourts}
      />
    </div>
  )
}