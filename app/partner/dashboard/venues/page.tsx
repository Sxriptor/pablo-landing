'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Building2, 
  MapPin, 
  Star,
  Users,
  DollarSign,
  Plus,
  Eye,
  EyeOff,
  Edit,
  MoreHorizontal,
  Trash2,
  AlertTriangle
} from 'lucide-react'
import { AddVenueOverlay } from '@/components/partner/overlays'
import { createVenue, updateVenue, toggleVenueStatus, deleteVenue, VenueData, getPartnerVenues } from '@/lib/supabase/venues'
import { useToast } from '@/hooks/use-toast'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { useTheme } from '@/components/partner/layout/ThemeProvider'
import { getThemeColors, themeColors } from '@/lib/theme-colors'

export default function VenuesPage() {
  const { theme } = useTheme()
  const colors = getThemeColors(theme)
  const [showAddVenueOverlay, setShowAddVenueOverlay] = useState(false)
  const [editingVenue, setEditingVenue] = useState<any>(null)
  const [venues, setVenues] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [venueToDelete, setVenueToDelete] = useState<any>(null)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const { toast } = useToast()

  // Fetch venues on component mount
  useEffect(() => {
    loadVenues()
  }, [])

  const loadVenues = async () => {
    try {
      setLoading(true)
      const partnerVenues = await getPartnerVenues()
      console.log('Loaded venues:', partnerVenues)
      setVenues(partnerVenues)
    } catch (error) {
      console.error('Error loading venues:', error)
      toast({
        title: "Error",
        description: "Failed to load venues",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleVenueSubmit = async (venueData: VenueData & { venueId?: string }) => {
    console.log('Venue data:', venueData)
    
    try {
      let result
      
      if (venueData.venueId) {
        // Update existing venue
        result = await updateVenue(venueData.venueId, venueData)
      } else {
        // Create new venue
        result = await createVenue(venueData)
      }
      
      if (result.success) {
        toast({
          title: "Success!",
          description: venueData.venueId ? "Venue updated successfully!" : "Venue created successfully!",
        })
        console.log('Venue operation result:', result.venue)
        setShowAddVenueOverlay(false)
        setEditingVenue(null)
        // Reload venues instead of refreshing the page
        loadVenues()
      } else {
        toast({
          title: "Error",
          description: result.error || `Failed to ${venueData.venueId ? 'update' : 'create'} venue`,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error with venue operation:', error)
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    }
  }

  const handleEditVenue = (venue: any) => {
    setEditingVenue(venue)
    setShowAddVenueOverlay(true)
  }

  const handleCloseOverlay = () => {
    setShowAddVenueOverlay(false)
    setEditingVenue(null)
  }

  const handleToggleVenueStatus = async (venue: any) => {
    try {
      const result = await toggleVenueStatus(venue.id)
      
      if (result.success) {
        toast({
          title: "Success!",
          description: `Venue ${result.venue.active ? 'activated' : 'deactivated'} successfully!`,
        })
        // Reload venues to reflect the change
        loadVenues()
      } else {
        toast({
          title: "Error",
          description: result.error || 'Failed to update venue status',
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error toggling venue status:', error)
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    }
  }

  const handleDeleteVenue = async () => {
    if (!venueToDelete) return
    
    try {
      const result = await deleteVenue(venueToDelete.id)
      
      if (result.success) {
        toast({
          title: "Success!",
          description: "Venue deleted successfully!",
        })
        setShowDeleteDialog(false)
        setVenueToDelete(null)
        // Reload venues to reflect the change
        loadVenues()
      } else {
        toast({
          title: "Error",
          description: result.error || 'Failed to delete venue',
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error deleting venue:', error)
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    }
  }

  const confirmDeleteVenue = (venue: any) => {
    setVenueToDelete(venue)
    setShowDeleteDialog(true)
  }



  const VenueCard = ({ venue }: any) => (
    <motion.div
      className="rounded-3xl p-6 relative overflow-hidden"
      style={{
        background: theme === 'dark' ? 'rgba(69, 104, 130, 0.1)' : 'rgba(255, 255, 255, 0.9)',
        border: `1px solid ${colors.cardBorder}`,
        backdropFilter: 'blur(20px)'
      }}
      whileHover={{ 
        y: -4,
        scale: 1.02
      }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full" style={{
        background: theme === 'dark' ? 'radial-gradient(circle, rgba(69, 104, 130, 0.15) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(69, 104, 130, 0.08) 0%, transparent 70%)',
        filter: 'blur(30px)'
      }} />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-xl font-bold" style={{ color: colors.text }}>{venue.name}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                venue.active ? 'text-green-400' : 'text-red-400'
              }`} style={{
                background: venue.active ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'
              }}>
                {venue.active ? 'ACTIVE' : 'INACTIVE'}
              </span>
            </div>
            <p className="text-sm mb-3" style={{ color: colors.textSecondary }}>
              {venue.address}, {venue.city}, {venue.state} {venue.postal_code}
            </p>
            <div className="flex items-center space-x-4 text-sm" style={{ color: colors.textSecondary }}>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{venue.city}, {venue.state}</span>
              </div>
              {venue.phone && (
                <div className="flex items-center space-x-1">
                  <span>{venue.phone}</span>
                </div>
              )}
              {venue.amenities && venue.amenities.length > 0 && (
                <div className="flex items-center space-x-1">
                  <span>{venue.amenities.length} amenities</span>
                </div>
              )}
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button 
                className="p-2 transition-colors rounded-lg"
                style={{ color: colors.textSecondary }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.text}
                onMouseLeave={(e) => e.currentTarget.style.color = colors.textSecondary}
              >
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="bg-gray-900 border-gray-700"
            >
              <DropdownMenuItem
                onClick={() => confirmDeleteVenue(venue)}
                className="text-red-400 hover:text-red-300 hover:bg-red-900/20 cursor-pointer"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Venue
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">
            Created {new Date(venue.created_at).toLocaleDateString()}
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => handleToggleVenueStatus(venue)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                venue.active 
                  ? 'text-green-400 hover:text-green-300' 
                  : 'text-red-400 hover:text-red-300'
              }`}
            >
              {venue.active ? (
                <Eye className="h-4 w-4" />
              ) : (
                <EyeOff className="h-4 w-4" />
              )}
              <span className="text-xs font-medium">
                {venue.active ? 'Active' : 'Inactive'}
              </span>
            </button>
            <button 
              onClick={() => handleEditVenue(venue)}
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg"
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: colors.text }}>Venues</h1>
          <p style={{ color: colors.textSecondary }}>Manage your sports venues and facilities</p>
        </div>
        {venues.length > 0 && (
          <motion.button 
            onClick={() => {
              setEditingVenue(null)
              setShowAddVenueOverlay(true)
            }}
            className="text-white px-6 py-3 rounded-2xl flex items-center font-bold text-sm"
            style={{
              background: themeColors.accent,
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

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-gray-400">Loading venues...</p>
          </div>
        </div>
      ) : venues.length > 0 ? (
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
              background: theme === 'dark' ? 'rgba(69, 104, 130, 0.1)' : 'rgba(255, 255, 255, 0.9)',
              border: `2px dashed ${colors.border}`,
              backdropFilter: 'blur(20px)'
            }}
          >
            <div className="mb-6">
              <div 
                className="w-24 h-24 mx-auto rounded-2xl flex items-center justify-center mb-4"
                style={{ background: theme === 'dark' ? 'rgba(69, 104, 130, 0.2)' : 'rgba(69, 104, 130, 0.1)' }}
              >
                <Building2 className="h-12 w-12" style={{ color: themeColors.accent }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: colors.text }}>No Venues Yet</h3>
              <p className="mb-6" style={{ color: colors.textSecondary }}>
                Get started by adding your first venue. You can manage courts, events, and bookings once you have a venue set up.
              </p>
            </div>
            
            <motion.button 
              onClick={() => {
                setEditingVenue(null)
                setShowAddVenueOverlay(true)
              }}
              className="text-white px-8 py-4 rounded-2xl flex items-center font-bold text-sm mx-auto"
              style={{
                background: themeColors.accent,
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

      {/* Add/Edit Venue Overlay */}
      <AddVenueOverlay
        key={editingVenue ? `edit-${editingVenue.id}` : 'create'}
        isOpen={showAddVenueOverlay}
        onClose={handleCloseOverlay}
        onSubmit={handleVenueSubmit}
        editingVenue={editingVenue}
      />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent 
          className="bg-gray-900 border-gray-700"
        >
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-400" />
              Delete Venue - Dangerous Action
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300">
              <div className="space-y-3">
                <p>
                  You are about to permanently delete <strong className="text-white">"{venueToDelete?.name}"</strong>.
                </p>
                <div 
                  className="p-4 rounded-lg border-l-4 border-red-500"
                  style={{ background: 'rgba(239, 68, 68, 0.1)' }}
                >
                  <p className="text-red-400 font-semibold mb-2">⚠️ This action will permanently remove:</p>
                  <ul className="text-sm text-gray-300 space-y-1 ml-4">
                    <li>• All courts associated with this venue</li>
                    <li>• All active games and matches</li>
                    <li>• All active player bookings</li>
                    <li>• All venue data and history</li>
                  </ul>
                </div>
                <p className="text-red-400 font-medium">
                  This action cannot be undone. Are you absolutely sure?
                </p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel 
              className="bg-gray-700 text-white hover:bg-gray-600 border-gray-600"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteVenue}
              className="bg-red-600 text-white hover:bg-red-700"
            >
              Yes, Delete Permanently
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}