'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Plus
} from 'lucide-react'
import { AddCourtOverlay } from '@/components/partner/overlays'

export default function CourtsPage() {
  const [showAddCourtOverlay, setShowAddCourtOverlay] = useState(false)

  const handleCourtSubmit = (courtData: any) => {
    // TODO: Implement court creation API call
    setShowAddCourtOverlay(false)
  }



  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Courts</h1>
          <p className="text-gray-400">Manage individual courts and their settings</p>
        </div>
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

      {/* Empty state - no courts yet */}
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
          </div>
        </div>
      </div>

      {/* Add Court Overlay */}
      <AddCourtOverlay
        isOpen={showAddCourtOverlay}
        onClose={() => setShowAddCourtOverlay(false)}
        onSubmit={handleCourtSubmit}
        venues={[]}
      />
    </div>
  )
}