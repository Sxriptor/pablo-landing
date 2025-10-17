'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Clock,
  Calendar,
  MapPin,
  DollarSign,
  Plus,
  Eye,
  Edit,
  MoreHorizontal,
  GraduationCap
} from 'lucide-react'
import { CreateClassOverlay } from '@/components/partner/overlays'

export default function ClassesPage() {
  const [showCreateClassOverlay, setShowCreateClassOverlay] = useState(false)

  // Mock data for the class overlay
  const mockVenues = [
    { id: '1', name: 'Downtown Tennis Center' },
    { id: '2', name: 'Riverside Courts' },
    { id: '3', name: 'Community Sports Center' },
    { id: '4', name: 'Elite Squash Club' },
    { id: '5', name: 'Premier Tennis Academy' },
  ]

  const mockCourts = [
    { id: '1', name: 'Court 1', venueId: '1' },
    { id: '2', name: 'Court 2', venueId: '1' },
    { id: '3', name: 'Court 3', venueId: '2' },
    { id: '4', name: 'Court 2', venueId: '3' },
    { id: '5', name: 'Court 1', venueId: '4' },
    { id: '6', name: 'Court 4', venueId: '5' },
  ]

  const handleClassSubmit = (classData: any) => {
    console.log('New class data:', classData)
    // Here you would typically send the data to your backend API
    alert('Class created successfully! Check console for data.')
  }

  const mockClasses = [
    {
      id: 1,
      title: 'Beginner Tennis Fundamentals',
      description: 'Learn the basics of tennis including proper grip, stance, and basic strokes.',
      instructor: 'Sarah Johnson',
      date: '2024-12-15',
      time: '10:00',
      duration: 90,
      capacity: 8,
      enrolled: 6,
      price: 45,
      venue: 'Downtown Tennis Center',
      court: 'Court 1',
      status: 'upcoming',
      skill_level: 'beginner',
      sport: 'Tennis'
    },
    {
      id: 2,
      title: 'Advanced Pickleball Strategy',
      description: 'Master advanced techniques and strategic play for competitive pickleball.',
      instructor: 'Mike Chen',
      date: '2024-12-16',
      time: '14:00',
      duration: 120,
      capacity: 6,
      enrolled: 4,
      price: 60,
      venue: 'Riverside Courts',
      court: 'Court 3',
      status: 'upcoming',
      skill_level: 'advanced',
      sport: 'Pickleball'
    },
    {
      id: 3,
      title: 'Youth Tennis Camp',
      description: 'Fun and engaging tennis lessons for kids aged 8-14.',
      instructor: 'Emma Davis',
      date: '2024-12-14',
      time: '09:00',
      duration: 60,
      capacity: 12,
      enrolled: 12,
      price: 30,
      venue: 'Community Sports Center',
      court: 'Court 2',
      status: 'completed',
      skill_level: 'all',
      sport: 'Tennis'
    },
    {
      id: 4,
      title: 'Squash Fitness Bootcamp',
      description: 'High-intensity squash training focused on fitness and conditioning.',
      instructor: 'David Wilson',
      date: '2024-12-17',
      time: '18:00',
      duration: 75,
      capacity: 10,
      enrolled: 8,
      price: 50,
      venue: 'Elite Squash Club',
      court: 'Court 1',
      status: 'upcoming',
      skill_level: 'intermediate',
      sport: 'Squash'
    },
    {
      id: 5,
      title: 'Mixed Doubles Strategy',
      description: 'Learn effective strategies and communication for mixed doubles play.',
      instructor: 'Lisa & Tom Rodriguez',
      date: '2024-12-18',
      time: '16:00',
      duration: 90,
      capacity: 8,
      enrolled: 2,
      price: 55,
      venue: 'Premier Tennis Academy',
      court: 'Court 4',
      status: 'upcoming',
      skill_level: 'intermediate',
      sport: 'Tennis'
    }
  ]

  const ClassCard = ({ classItem }: any) => (
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
              <h3 className="text-xl font-bold text-white">{classItem.title}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                classItem.status === 'upcoming' ? 'bg-blue-500/20 text-blue-400' :
                classItem.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                classItem.status === 'cancelled' ? 'bg-red-500/20 text-red-400' :
                'bg-gray-500/20 text-gray-400'
              }`}>
                {classItem.status}
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-3">{classItem.description}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-300 mb-3">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(classItem.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{classItem.time} ({classItem.duration}min)</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{classItem.venue}</span>
              </div>
              <span>•</span>
              <span>{classItem.sport}</span>
              <span>•</span>
              <span className="capitalize">{classItem.skill_level}</span>
            </div>
          </div>
          <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>

        <div className="mb-4 p-3 rounded-2xl bg-white/5">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-4 w-4 text-purple-400" />
            <p className="text-sm text-gray-300">
              <span className="font-semibold">Instructor:</span> {classItem.instructor}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Users className="h-4 w-4 text-blue-400" />
            </div>
            <p className="text-lg font-bold text-white">{classItem.enrolled}/{classItem.capacity}</p>
            <p className="text-xs text-gray-500">Enrolled</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <DollarSign className="h-4 w-4 text-green-400" />
            </div>
            <p className="text-lg font-bold text-white">${classItem.price}</p>
            <p className="text-xs text-gray-500">Price</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-white">{Math.round((classItem.enrolled / classItem.capacity) * 100)}%</p>
            <p className="text-xs text-gray-500">Full</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-300">
            {classItem.court} • {classItem.duration} minutes
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
          <h1 className="text-3xl font-bold text-white">Classes</h1>
          <p className="text-gray-400">Manage instructional classes and training sessions</p>
        </div>
        <motion.button 
          onClick={() => setShowCreateClassOverlay(true)}
          className="text-white px-6 py-3 rounded-2xl flex items-center font-bold text-sm"
          style={{
            background: '#456882',
            boxShadow: '0 8px 24px rgba(69, 104, 130, 0.4)'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="h-4 w-4 mr-2" />
          CREATE CLASS
        </motion.button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {mockClasses.map((classItem) => (
          <ClassCard key={classItem.id} classItem={classItem} />
        ))}
      </div>

      {/* Create Class Overlay */}
      <CreateClassOverlay
        isOpen={showCreateClassOverlay}
        onClose={() => setShowCreateClassOverlay(false)}
        onSubmit={handleClassSubmit}
        venues={mockVenues}
        courts={mockCourts}
      />
    </div>
  )
}