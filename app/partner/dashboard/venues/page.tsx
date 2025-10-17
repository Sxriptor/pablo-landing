'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Building2, 
  MapPin, 
  Star,
  Users,
  DollarSign,
  Plus,
  Eye,
  Edit,
  MoreHorizontal
} from 'lucide-react'

export default function VenuesPage() {
  const mockVenues = [
    { 
      id: 1, 
      name: 'Downtown Tennis Center', 
      city: 'New York', 
      address: '123 Main St, Manhattan, NY 10001', 
      active: true, 
      created_at: '2024-01-15',
      courts: 8,
      phone: '(212) 555-0123',
      email: 'info@downtowntennis.com',
      rating: 4.8,
      amenities: ['Parking', 'Pro Shop', 'Locker Rooms', 'Café'],
      revenue: '$12,450',
      bookings: 156
    },
    { 
      id: 2, 
      name: 'Riverside Courts', 
      city: 'Brooklyn', 
      address: '456 River Ave, Brooklyn, NY 11201', 
      active: true, 
      created_at: '2024-02-20',
      courts: 6,
      phone: '(718) 555-0456',
      email: 'contact@riversidecourts.com',
      rating: 4.6,
      amenities: ['Parking', 'Locker Rooms', 'Equipment Rental'],
      revenue: '$8,920',
      bookings: 98
    },
    { 
      id: 3, 
      name: 'Elite Training Facility', 
      city: 'Manhattan', 
      address: '789 Elite Blvd, Manhattan, NY 10022', 
      active: false, 
      created_at: '2024-03-10',
      courts: 12,
      phone: '(212) 555-0789',
      email: 'admin@elitetraining.com',
      rating: 4.9,
      amenities: ['Parking', 'Pro Shop', 'Locker Rooms', 'Café', 'Fitness Center', 'Spa'],
      revenue: '$18,750',
      bookings: 234
    },
  ]

  const VenueCard = ({ venue }: any) => (
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
              <h3 className="text-xl font-bold text-white">{venue.name}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                venue.active ? 'text-green-400' : 'text-red-400'
              }`} style={{
                background: venue.active ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'
              }}>
                {venue.active ? 'ACTIVE' : 'INACTIVE'}
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-3">{venue.address}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{venue.courts} courts</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>{venue.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{venue.bookings} bookings</span>
              </div>
            </div>
          </div>
          <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <DollarSign className="h-4 w-4 text-green-400" />
            <span className="text-lg font-bold text-green-400">{venue.revenue}</span>
            <span className="text-xs text-gray-500">this month</span>
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
          <h1 className="text-3xl font-bold text-white">Venues</h1>
          <p className="text-gray-400">Manage your sports venues and facilities</p>
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
          ADD VENUE
        </motion.button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {mockVenues.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>
    </div>
  )
}