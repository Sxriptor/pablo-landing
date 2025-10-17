'use client'

import React, { useState } from 'react'
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
import { AddVenueOverlay } from '@/components/partner/overlays'
import { createVenue, VenueData } from '@/lib/supabase/venues'
import { useToast } from '@/hooks/use-toast'

export default function VenuesPage() {
  const [showAddVenueOverlay, setShowAddVenueOverlay] = useState(false)
  const { toast } = useToast()

  const handleVenueSubmit = async (venueData: VenueData) => {
    console.log('New venue data:', venueData)
    
    try {
      const result = await createVenue(venueData)
      
      if (result.success) {
        toast({
          title: "Success!",
          description: "Venue created successfully!",
        })
        console.log('Created venue:', result.venue)
        setShowAddVenueOverlay(false)
        // Optionally refresh the page or update local state
        window.location.reload()
      } else {
        toast({
          title: "Error",
          description: result.error || 'Failed to create venue',
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error creating venue:', error)
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    }
  }

  // For now, using empty array - will be replaced with real data from Supabase
  const venues: any[] = []

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
        {venues.length > 0 && (
          <motion.button 
            onClick={() => setShowAddVenueOverlay(true)}
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
        )}
      </div>

      {venues.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {venues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16">
          <div 
            className="rounded-3xl p-12 text-center max-w-md"
            style={{
              background: 'rgba(69, 104, 130, 0.1)',
              border: '2px dashed rgba(69, 104, 130, 0.3)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <div className="mb-6">
              <div 
                className="w-24 h-24 mx-auto rounded-2xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(69, 104, 130, 0.2)' }}
              >
                <Building2 className="h-12 w-12" style={{ color: '#456882' }} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No Venues Yet</h3>
              <p className="text-gray-400 mb-6">
                Get started by adding your first venue. You can manage courts, events, and bookings once you have a venue set up.
              </p>
            </div>
            
            <motion.button 
              onClick={() => setShowAddVenueOverlay(true)}
              className="text-white px-8 py-4 rounded-2xl flex items-center font-bold text-sm mx-auto"
              style={{
                background: '#456882',
                boxShadow: '0 8px 24px rgba(69, 104, 130, 0.4)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="h-5 w-5 mr-2" />
              ADD YOUR FIRST VENUE
            </motion.button>
          </div>
        </div>
      )}

      {/* Add Venue Overlay */}
      <AddVenueOverlay
        isOpen={showAddVenueOverlay}
        onClose={() => setShowAddVenueOverlay(false)}
        onSubmit={handleVenueSubmit}
      />
    </div>
  )
}