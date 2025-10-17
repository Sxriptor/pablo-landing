'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Building2, MapPin, Trophy, GraduationCap, Plus } from 'lucide-react'
import {
  AddVenueOverlay,
  AddCourtOverlay,
  CreateEventOverlay,
  CreateClassOverlay
} from './overlays'

export function OverlayDemo() {
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null)

  // Mock data for demo
  const mockVenues = [
    { id: '1', name: 'Downtown Sports Center' },
    { id: '2', name: 'Riverside Tennis Club' },
    { id: '3', name: 'City Recreation Center' },
  ]

  const mockCourts = [
    { id: '1', name: 'Court 1', venueId: '1' },
    { id: '2', name: 'Court 2', venueId: '1' },
    { id: '3', name: 'Center Court', venueId: '2' },
    { id: '4', name: 'Practice Court', venueId: '2' },
    { id: '5', name: 'Multi-Purpose Court A', venueId: '3' },
  ]

  const handleOverlaySubmit = (type: string, data: any) => {
    console.log(`${type} submitted:`, data)
    // Here you would typically send the data to your backend
    alert(`${type} created successfully! Check console for data.`)
  }

  const overlayButtons = [
    {
      id: 'venue',
      title: 'Add Venue',
      description: 'Create a new venue location',
      icon: Building2,
      color: '#456882',
      overlay: (
        <AddVenueOverlay
          isOpen={activeOverlay === 'venue'}
          onClose={() => setActiveOverlay(null)}
          onSubmit={(data) => handleOverlaySubmit('Venue', data)}
        />
      )
    },
    {
      id: 'court',
      title: 'Add Court',
      description: 'Add a new court to your venue',
      icon: MapPin,
      color: '#456882',
      overlay: (
        <AddCourtOverlay
          isOpen={activeOverlay === 'court'}
          onClose={() => setActiveOverlay(null)}
          onSubmit={(data) => handleOverlaySubmit('Court', data)}
          venues={mockVenues}
        />
      )
    },
    {
      id: 'event',
      title: 'Create Event',
      description: 'Organize tournaments and competitions',
      icon: Trophy,
      color: '#456882',
      overlay: (
        <CreateEventOverlay
          isOpen={activeOverlay === 'event'}
          onClose={() => setActiveOverlay(null)}
          onSubmit={(data) => handleOverlaySubmit('Event', data)}
          venues={mockVenues}
          courts={mockCourts}
        />
      )
    },
    {
      id: 'class',
      title: 'Create Class',
      description: 'Set up lessons and training programs',
      icon: GraduationCap,
      color: '#456882',
      overlay: (
        <CreateClassOverlay
          isOpen={activeOverlay === 'class'}
          onClose={() => setActiveOverlay(null)}
          onSubmit={(data) => handleOverlaySubmit('Class', data)}
          venues={mockVenues}
          courts={mockCourts}
        />
      )
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Quick Actions</h2>
        <p className="text-gray-400">Create and manage your venue offerings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {overlayButtons.map((button) => {
          const Icon = button.icon
          return (
            <div key={button.id}>
              <button
                onClick={() => setActiveOverlay(button.id)}
                className="w-full p-6 rounded-2xl transition-all hover:scale-105 hover:shadow-2xl group"
                style={{
                  background: 'rgba(69, 104, 130, 0.1)',
                  border: '1px solid rgba(69, 104, 130, 0.2)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div 
                    className="p-4 rounded-2xl group-hover:scale-110 transition-transform"
                    style={{ background: 'rgba(69, 104, 130, 0.2)' }}
                  >
                    <Icon className="h-8 w-8" style={{ color: button.color }} />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {button.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {button.description}
                    </p>
                  </div>
                  
                  <div 
                    className="flex items-center justify-center w-8 h-8 rounded-full group-hover:scale-110 transition-transform"
                    style={{ background: button.color }}
                  >
                    <Plus className="h-4 w-4 text-white" />
                  </div>
                </div>
              </button>
              
              {button.overlay}
            </div>
          )
        })}
      </div>

      {/* Usage Instructions */}
      <div 
        className="p-6 rounded-2xl"
        style={{
          background: 'rgba(69, 104, 130, 0.1)',
          border: '1px solid rgba(69, 104, 130, 0.2)',
          backdropFilter: 'blur(20px)'
        }}
      >
        <h3 className="text-lg font-semibold text-white mb-3">How to Use These Overlays</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
          <div>
            <h4 className="font-medium text-white mb-2">Integration Steps:</h4>
            <ul className="space-y-1">
              <li>• Import the overlay components you need</li>
              <li>• Add state management for overlay visibility</li>
              <li>• Connect form submissions to your backend</li>
              <li>• Customize styling to match your theme</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-2">Features Included:</h4>
            <ul className="space-y-1">
              <li>• Form validation and error handling</li>
              <li>• Responsive design for all screen sizes</li>
              <li>• Consistent styling with your dashboard</li>
              <li>• Accessibility-compliant components</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}