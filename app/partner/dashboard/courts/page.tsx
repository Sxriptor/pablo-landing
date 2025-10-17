'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Plus,
  Settings,
  MoreHorizontal
} from 'lucide-react'
import { AddCourtOverlay } from '@/components/partner/overlays'
import { getPartnerVenues } from '@/lib/supabase/venues'
import { createCourt, getPartnerCourts, CourtData } from '@/lib/supabase/courts'
import { useToast } from '@/hooks/use-toast'

export default function CourtsPage() {
  const [showAddCourtOverlay, setShowAddCourtOverlay] = useState(false)
  const [venues, setVenues] = useState<any[]>([])
  const [courts, setCourts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  // Fetch venues and courts on component mount
  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      const [partnerVenues, partnerCourts] = await Promise.all([
        getPartnerVenues(),
        getPartnerCourts()
      ])
      setVenues(partnerVenues)
      setCourts(partnerCourts)
    } catch (error) {
      console.error('Error loading data:', error)
      toast({
        title: "Error",
        description: "Failed to load courts and venues",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleCourtSubmit = async (courtData: CourtData) => {
    console.log('Court data:', courtData)
    
    try {
      const result = await createCourt(courtData)
      
      if (result.success) {
        toast({
          title: "Success!",
          description: "Court created successfully!",
        })
        console.log('Court creation result:', result.court)
        setShowAddCourtOverlay(false)
        // Reload courts to show the new one
        loadData()
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to create court",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error creating court:', error)
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    }
  }

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
                {court.available ? 'AVAILABLE' : 'UNAVAILABLE'}
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-3">{court.venues?.name || 'Unknown Venue'}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <span className="capitalize">{court.sport_type}</span>
              <span>•</span>
              <span className="capitalize">{court.surface_type}</span>
              <span>•</span>
              <span>{court.indoor ? 'Indoor' : 'Outdoor'}</span>
              {court.lighting && (
                <>
                  <span>•</span>
                  <span>Lighting</span>
                </>
              )}
            </div>
          </div>
          <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-300">
            {court.hourly_rate && (
              <span>${court.hourly_rate}/hr</span>
            )}
            {court.peak_rate && court.hourly_rate && (
              <span> • Peak: ${court.peak_rate}/hr</span>
            )}
            {!court.hourly_rate && !court.peak_rate && (
              <span>No pricing set</span>
            )}
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
      <div>
        <h1 className="text-3xl font-bold text-white">Courts</h1>
        <p className="text-gray-400">Manage individual courts and their settings</p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-gray-400">Loading courts...</p>
          </div>
        </div>
      ) : venues.length === 0 ? (
        /* No venues - can't create courts without venues */
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
                <MapPin className="h-8 w-8" style={{ color: '#456882' }} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No Venues Found</h3>
              <p className="text-gray-400 mb-6">
                You need to create a venue first before you can add courts. Courts belong to venues.
              </p>
              <motion.button 
                onClick={() => window.location.href = '/partner/dashboard/venues'}
                className="text-white px-6 py-3 rounded-2xl flex items-center font-bold text-sm mx-auto"
                style={{
                  background: '#456882',
                  boxShadow: '0 8px 24px rgba(69, 104, 130, 0.4)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus className="h-4 w-4 mr-2" />
                CREATE VENUE FIRST
              </motion.button>
            </div>
          </div>
        </div>
      ) : courts.length === 0 ? (
        /* No courts yet - but venues exist */
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
                <MapPin className="h-8 w-8" style={{ color: '#456882' }} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No Courts Yet</h3>
              <p className="text-gray-400 mb-6">
                Add your first court to start managing bookings and tracking performance.
              </p>
              <motion.button 
                onClick={() => setShowAddCourtOverlay(true)}
                className="text-white px-6 py-3 rounded-2xl flex items-center font-bold text-sm mx-auto"
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
          </div>
        </div>
      ) : (
        /* Show courts */
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-400">{courts.length} court{courts.length !== 1 ? 's' : ''} found</p>
            <motion.button 
              onClick={() => setShowAddCourtOverlay(true)}
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
            {courts.map((court) => (
              <CourtCard key={court.id} court={court} />
            ))}
          </div>
        </div>
      )}

      {/* Add Court Overlay */}
      <AddCourtOverlay
        isOpen={showAddCourtOverlay}
        onClose={() => setShowAddCourtOverlay(false)}
        onSubmit={handleCourtSubmit}
        venues={venues}
      />
    </div>
  )
}