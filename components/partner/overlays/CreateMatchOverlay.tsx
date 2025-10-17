'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Trophy, DollarSign, X, Target } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface CreateMatchOverlayProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (matchData: any) => void
  venues?: Array<{ id: string; name: string }>
  courts?: Array<{ id: string; name: string; venueId: string }>
}

export function CreateMatchOverlay({ 
  isOpen, 
  onClose, 
  onSubmit, 
  venues = [], 
  courts = [] 
}: CreateMatchOverlayProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    matchType: 'singles',
    sport: 'tennis',
    venueId: '',
    courtId: '',
    scheduledDate: '',
    startTime: '',
    endTime: '',
    maxPlayers: '',
    entryFee: '',
    prizePool: '',
    registrationDeadline: '',
    skillLevel: 'intermediate',
    format: 'elimination',
    rules: '',
    requirements: [] as string[],
  })

  const matchTypes = [
    { value: 'singles', label: 'Singles' },
    { value: 'doubles', label: 'Doubles' },
    { value: 'mixed-doubles', label: 'Mixed Doubles' },
    { value: 'team', label: 'Team Match' },
    { value: 'exhibition', label: 'Exhibition' },
  ]

  const sportOptions = [
    { value: 'tennis', label: 'Tennis' },
    { value: 'pickleball', label: 'Pickleball' },
    { value: 'badminton', label: 'Badminton' },
    { value: 'squash', label: 'Squash' },
    { value: 'basketball', label: 'Basketball' },
    { value: 'volleyball', label: 'Volleyball' },
  ]

  const skillLevels = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'professional', label: 'Professional' },
    { value: 'open', label: 'Open (All Levels)' },
  ]

  const formatOptions = [
    { value: 'elimination', label: 'Single Elimination' },
    { value: 'double-elimination', label: 'Double Elimination' },
    { value: 'round-robin', label: 'Round Robin' },
    { value: 'swiss', label: 'Swiss System' },
    { value: 'ladder', label: 'Ladder Match' },
    { value: 'friendly', label: 'Friendly Match' },
  ]

  const requirementOptions = [
    'Valid ID Required',
    'Waiver Must Be Signed',
    'Equipment Provided',
    'Bring Own Equipment',
    'Skill Level Verification',
    'Registration Fee Non-Refundable',
    'No Late Entries',
    'Punctuality Required'
  ]

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleRequirementToggle = (requirement: string) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.includes(requirement)
        ? prev.requirements.filter(r => r !== requirement)
        : [...prev.requirements, requirement]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
    onClose()
    // Reset form
    setFormData({
      title: '',
      description: '',
      matchType: 'singles',
      sport: 'tennis',
      venueId: '',
      courtId: '',
      scheduledDate: '',
      startTime: '',
      endTime: '',
      maxPlayers: '',
      entryFee: '',
      prizePool: '',
      registrationDeadline: '',
      skillLevel: 'intermediate',
      format: 'elimination',
      rules: '',
      requirements: [],
    })
  }

  const availableCourts = courts.filter(court => 
    formData.venueId ? court.venueId === formData.venueId : true
  )

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="!max-w-5xl max-h-[90vh] overflow-y-auto w-[95vw]"
        style={{
          background: 'rgba(5, 10, 15, 0.95)',
          border: '1px solid rgba(69, 104, 130, 0.3)',
          backdropFilter: 'blur(20px)'
        }}
        showCloseButton={false}
      >
        <DialogHeader className="relative">
          <button
            onClick={onClose}
            className="absolute right-0 top-0 p-2 text-gray-400 hover:text-white transition-colors rounded-lg"
          >
            <X className="h-5 w-5" />
          </button>
          <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
            <div className="p-2 rounded-xl" style={{ background: 'rgba(69, 104, 130, 0.2)' }}>
              <Target className="h-6 w-6" style={{ color: '#456882' }} />
            </div>
            Create New Match
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Organize a competitive match or tournament at your venue
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Match Details</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Match Title *
              </label>
              <Input
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Singles Championship Final"
                required
                className="bg-white/5 border-white/10 text-white placeholder-gray-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Match Type *
                </label>
                <select
                  value={formData.matchType}
                  onChange={(e) => handleInputChange('matchType', e.target.value)}
                  required
                  className="w-full h-9 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {matchTypes.map((type) => (
                    <option key={type.value} value={type.value} className="bg-gray-800">
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Sport *
                </label>
                <select
                  value={formData.sport}
                  onChange={(e) => handleInputChange('sport', e.target.value)}
                  required
                  className="w-full h-9 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {sportOptions.map((sport) => (
                    <option key={sport.value} value={sport.value} className="bg-gray-800">
                      {sport.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Skill Level *
                </label>
                <select
                  value={formData.skillLevel}
                  onChange={(e) => handleInputChange('skillLevel', e.target.value)}
                  required
                  className="w-full h-9 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {skillLevels.map((level) => (
                    <option key={level.value} value={level.value} className="bg-gray-800">
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description
              </label>
              <Textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Describe the match format, competition level, and what players can expect..."
                rows={3}
                className="bg-white/5 border-white/10 text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Venue and Court */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Location</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Venue *
                </label>
                <select
                  value={formData.venueId}
                  onChange={(e) => handleInputChange('venueId', e.target.value)}
                  required
                  className="w-full h-9 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a venue</option>
                  {venues.map((venue) => (
                    <option key={venue.id} value={venue.id} className="bg-gray-800">
                      {venue.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Court *
                </label>
                <select
                  value={formData.courtId}
                  onChange={(e) => handleInputChange('courtId', e.target.value)}
                  required
                  disabled={!formData.venueId}
                  className="w-full h-9 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  <option value="">Select a court</option>
                  {availableCourts.map((court) => (
                    <option key={court.id} value={court.id} className="bg-gray-800">
                      {court.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Schedule
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Match Date *
                </label>
                <Input
                  type="date"
                  value={formData.scheduledDate}
                  onChange={(e) => handleInputChange('scheduledDate', e.target.value)}
                  required
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Start Time *
                </label>
                <Input
                  type="time"
                  value={formData.startTime}
                  onChange={(e) => handleInputChange('startTime', e.target.value)}
                  required
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  End Time *
                </label>
                <Input
                  type="time"
                  value={formData.endTime}
                  onChange={(e) => handleInputChange('endTime', e.target.value)}
                  required
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Registration Deadline
              </label>
              <Input
                type="date"
                value={formData.registrationDeadline}
                onChange={(e) => handleInputChange('registrationDeadline', e.target.value)}
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
          </div>

          {/* Match Format & Participants */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Users className="h-5 w-5" />
              Format & Participants
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tournament Format
                </label>
                <select
                  value={formData.format}
                  onChange={(e) => handleInputChange('format', e.target.value)}
                  className="w-full h-9 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {formatOptions.map((format) => (
                    <option key={format.value} value={format.value} className="bg-gray-800">
                      {format.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Max Players
                </label>
                <Input
                  type="number"
                  value={formData.maxPlayers}
                  onChange={(e) => handleInputChange('maxPlayers', e.target.value)}
                  placeholder="16"
                  min="2"
                  className="bg-white/5 border-white/10 text-white placeholder-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Pricing & Prizes
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Entry Fee ($)
                </label>
                <Input
                  type="number"
                  value={formData.entryFee}
                  onChange={(e) => handleInputChange('entryFee', e.target.value)}
                  placeholder="25.00"
                  min="0"
                  step="0.01"
                  className="bg-white/5 border-white/10 text-white placeholder-gray-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Prize Pool ($)
                </label>
                <Input
                  type="number"
                  value={formData.prizePool}
                  onChange={(e) => handleInputChange('prizePool', e.target.value)}
                  placeholder="500.00"
                  min="0"
                  step="0.01"
                  className="bg-white/5 border-white/10 text-white placeholder-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Rules and Requirements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Rules & Requirements
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Match Rules
              </label>
              <Textarea
                value={formData.rules}
                onChange={(e) => handleInputChange('rules', e.target.value)}
                placeholder="Specify scoring system, time limits, dress code, and any special match rules..."
                rows={3}
                className="bg-white/5 border-white/10 text-white placeholder-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Requirements
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {requirementOptions.map((requirement) => (
                  <button
                    key={requirement}
                    type="button"
                    onClick={() => handleRequirementToggle(requirement)}
                    className={`p-3 rounded-xl text-sm font-medium transition-all text-left ${
                      formData.requirements.includes(requirement)
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                    style={{
                      background: formData.requirements.includes(requirement)
                        ? '#456882'
                        : 'rgba(69, 104, 130, 0.1)',
                      border: `1px solid ${formData.requirements.includes(requirement)
                        ? '#456882'
                        : 'rgba(69, 104, 130, 0.2)'}`
                    }}
                  >
                    {requirement}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-white/10">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="text-white"
              style={{
                background: '#456882',
                boxShadow: '0 4px 12px rgba(69, 104, 130, 0.3)'
              }}
            >
              Create Match
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}