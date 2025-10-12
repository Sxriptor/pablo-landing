"use client"

import { motion } from "framer-motion"
import { X, Home, Trophy, Users, MessageSquare, User, ChevronRight } from "lucide-react"

const menuItems = [
  { icon: Home, label: "Discover", color: "from-blue-500 to-blue-600", hasArrow: true },
  { icon: Trophy, label: "Leaderboard", color: "from-yellow-500 to-orange-500" },
  { icon: Users, label: "Friends", color: "from-green-500 to-emerald-600" },
  { icon: MessageSquare, label: "Messages", color: "from-purple-500 to-pink-500" },
  { icon: User, label: "Profile", color: "from-teal-500 to-cyan-500" }
]

export function EnhancedNavigationMockup() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          animate={{ 
            y: [0, -6, 0],
            rotate: [0, 1, 0]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transformOrigin: 'center center' }}
        >
          {/* Phone frame */}
          <div className="relative w-[280px] h-[600px] rounded-[3rem] bg-black/50 backdrop-blur-xl border border-white/20 shadow-2xl p-3 overflow-hidden">
            {/* Inner screen */}
            <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden relative">
              {/* Status bar */}
              <div className="absolute top-0 left-0 right-0 h-11 flex items-center justify-between px-6 text-white text-sm z-20 bg-slate-900/80 backdrop-blur-sm">
                <span className="font-semibold">5:38</span>
                <div className="flex gap-1 items-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Background gradient with animated elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-slate-900" />
              
              {/* Animated background orbs */}
              <motion.div
                className="absolute top-16 right-12 w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400/40 to-teal-400/40 blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-24 left-8 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400/40 to-purple-400/40 blur-2xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />

              {/* Side menu overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" />

              {/* Navigation Menu */}
              <motion.div 
                className="absolute top-16 left-4 right-16 bottom-4 z-20"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                      </div>
                    </motion.div>
                    <div>
                      <h2 className="text-white text-xl font-bold">PlayCircle</h2>
                      <p className="text-white/70 text-sm">Sport Community</p>
                    </div>
                  </div>
                  <motion.button 
                    className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.button>
                </div>

                {/* Menu items */}
                <div className="space-y-4 mb-8">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className="backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 p-4 flex items-center gap-4 cursor-pointer transition-all hover:bg-white/20"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Label */}
                      <div className="flex-1">
                        <span className="text-white font-semibold text-lg">{item.label}</span>
                      </div>
                      
                      {/* Arrow for Discover */}
                      {item.hasArrow && (
                        <ChevronRight className="w-5 h-5 text-emerald-400" />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* User profile at bottom */}
                <motion.div 
                  className="absolute bottom-4 left-0 right-0"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div className="backdrop-blur-lg bg-emerald-500/20 rounded-2xl border border-emerald-500/30 p-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                      L
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">Levi Carpenter</div>
                      <div className="text-emerald-300 text-sm">@bluebillshtml</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating decoration elements */}
                <motion.div
                  className="absolute top-8 right-4 w-3 h-3 rounded-full bg-emerald-400/60 blur-sm"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute bottom-32 right-8 w-2 h-2 rounded-full bg-teal-400/60 blur-sm"
                  animate={{ 
                    y: [0, 8, 0],
                    opacity: [0.5, 0.9, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </motion.div>
            </div>

            {/* Phone notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-30 shadow-xl" />
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-500/30 via-teal-500/30 to-transparent blur-2xl" />
        </motion.div>
      </motion.div>
    </div>
  )
}