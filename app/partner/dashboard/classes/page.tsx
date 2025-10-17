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
import { useTheme } from '@/components/partner/layout/ThemeProvider'
import { getThemeColors, themeColors } from '@/lib/theme-colors'

export default function ClassesPage() {
  const { theme } = useTheme()
  const colors = getThemeColors(theme)
  const [showCreateClassOverlay, setShowCreateClassOverlay] = useState(false)
  const [classes, setClasses] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const mockVenues: any[] = []
  const mockCourts: any[] = []

  const handleClassSubmit = (classData: any) => {
    console.log('New class data:', classData)
    // Here you would typically send the data to your backend API
    alert('Class created successfully! Check console for data.')
  }

  const ClassCard = ({ classItem }: any) => (
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
              <h3 className="text-xl font-bold" style={{ color: colors.text }}>{classItem.title}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                classItem.status === 'upcoming' ? 'bg-blue-500/20 text-blue-400' :
                classItem.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                classItem.status === 'cancelled' ? 'bg-red-500/20 text-red-400' :
                'bg-gray-500/20 text-gray-400'
              }`}>
                {classItem.status}
              </span>
            </div>
            <p className="text-sm mb-3" style={{ color: colors.textSecondary }}>{classItem.description}</p>
            <div className="flex items-center space-x-4 text-sm mb-3" style={{ color: colors.textSecondary }}>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(classItem.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{classItem.time} ({classItem.duration}min)</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm" style={{ color: colors.textSecondary }}>
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
          <button 
            className="p-2 transition-colors rounded-lg"
            style={{ color: colors.textSecondary }}
            onMouseEnter={(e) => e.currentTarget.style.color = colors.text}
            onMouseLeave={(e) => e.currentTarget.style.color = colors.textSecondary}
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>

        <div className="mb-4 p-3 rounded-2xl" style={{ background: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(69, 104, 130, 0.05)' }}>
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-4 w-4 text-purple-400" />
            <p className="text-sm" style={{ color: colors.textSecondary }}>
              <span className="font-semibold">Instructor:</span> {classItem.instructor}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Users className="h-4 w-4 text-blue-400" />
            </div>
            <p className="text-lg font-bold" style={{ color: colors.text }}>{classItem.enrolled}/{classItem.capacity}</p>
            <p className="text-xs" style={{ color: colors.textTertiary }}>Enrolled</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <DollarSign className="h-4 w-4 text-green-400" />
            </div>
            <p className="text-lg font-bold" style={{ color: colors.text }}>${classItem.price}</p>
            <p className="text-xs" style={{ color: colors.textTertiary }}>Price</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold" style={{ color: colors.text }}>{Math.round((classItem.enrolled / classItem.capacity) * 100)}%</p>
            <p className="text-xs" style={{ color: colors.textTertiary }}>Full</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm" style={{ color: colors.textSecondary }}>
            {classItem.court} • {classItem.duration} minutes
          </div>
          <div className="flex space-x-2">
            <button className="p-2 text-blue-400 hover:text-blue-300 transition-colors rounded-lg">
              <Eye className="h-4 w-4" />
            </button>
            <button 
              className="p-2 transition-colors rounded-lg"
              style={{ color: colors.textSecondary }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.text}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.textSecondary}
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
          <h1 className="text-3xl font-bold" style={{ color: colors.text }}>Classes</h1>
          <p style={{ color: colors.textSecondary }}>Manage instructional classes and training sessions</p>
        </div>
        {classes.length > 0 && (
          <motion.button
            onClick={() => setShowCreateClassOverlay(true)}
            className="text-white px-6 py-3 rounded-2xl flex items-center font-bold text-sm"
            style={{
              background: themeColors.accent,
              boxShadow: '0 8px 24px rgba(69, 104, 130, 0.4)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="h-4 w-4 mr-2" />
            CREATE CLASS
          </motion.button>
        )}
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-gray-400">Loading classes...</p>
          </div>
        </div>
      ) : classes.length > 0 ? (
        <div className="grid gap-6 lg:grid-cols-2">
          {classes.map((classItem) => (
            <ClassCard key={classItem.id} classItem={classItem} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16">
          <div
            className="rounded-3xl p-12 text-center max-w-md"
            style={{
              background: theme === 'dark' ? 'rgba(69, 104, 130, 0.1)' : 'rgba(255, 255, 255, 0.9)',
              border: `1px solid ${colors.cardBorder}`,
              backdropFilter: 'blur(20px)'
            }}
          >
            <div className="mb-6">
              <div
                className="w-24 h-24 mx-auto rounded-2xl flex items-center justify-center mb-4"
                style={{ background: theme === 'dark' ? 'rgba(69, 104, 130, 0.2)' : 'rgba(69, 104, 130, 0.1)' }}
              >
                <GraduationCap className="h-12 w-12" style={{ color: themeColors.accent }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: colors.text }}>No Classes Yet</h3>
              <p className="mb-6" style={{ color: colors.textSecondary }}>
                Get started by creating your first class. Offer lessons, clinics, and training sessions to your community.
              </p>
            </div>

            <motion.button
              onClick={() => setShowCreateClassOverlay(true)}
              className="text-white px-8 py-4 rounded-2xl flex items-center font-bold text-sm mx-auto"
              style={{
                background: themeColors.accent,
                boxShadow: '0 8px 24px rgba(69, 104, 130, 0.4)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="h-5 w-5 mr-2" />
              CREATE YOUR FIRST CLASS
            </motion.button>
          </div>
        </div>
      )}

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