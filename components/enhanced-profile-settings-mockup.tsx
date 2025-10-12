"use client"

import { motion } from "framer-motion"
import { X, User, Settings, ShoppingCart, Globe, HelpCircle, LogOut, ChevronRight } from "lucide-react"

const menuItems = [
  { icon: User, label: "Account Setting", color: "from-blue-500 to-blue-600" },
  { icon: Settings, label: "Preferences", color: "from-purple-500 to-purple-600" },
  { icon: ShoppingCart, label: "Purchases", color: "from-green-500 to-green-600" },
  { icon: Globe, label: "Languages", color: "from-orange-500 to-orange-600" },
  { icon: Settings, label: "Settings", color: "from-teal-500 to-teal-600" },
  { icon: HelpCircle, label: "Help Center", color: "from-indigo-500 to-indigo-600" },
  { icon: LogOut, label: "Sign Out", color: "from-red-500 to-red-600", isSignOut: true }
]

export function EnhancedProfileSettingsMockup() {
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
            y: [0, -8, 0],
            rotate: [-1, 1, -1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transformOrigin: 'center center' }}
        >
          {/* Phone frame */}
          <div className="relative w-[200px] h-[420px] sm:w-[240px] sm:h-[480px] md:w-[260px] md:h-[520px] lg:w-[280px] lg:h-[560px] rounded-xl sm:rounded-2xl lg:rounded-[2rem] bg-black/50 backdrop-blur-xl border border-white/20 shadow-2xl p-2 sm:p-2.5 lg:p-3 overflow-hidden">
            {/* Inner screen */}
            <div className="w-full h-full rounded-xl sm:rounded-2xl lg:rounded-[2rem] bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden relative">
              {/* Status bar */}
              <div className="absolute top-0 left-0 right-0 h-11 flex items-center justify-between px-6 text-white text-sm z-20 bg-slate-900/80 backdrop-blur-sm">
                <span className="font-semibold">5:39</span>
                <div className="flex gap-1 items-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Background gradient with blur effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-slate-900" />
              
              {/* Blurred background pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-8 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400/40 to-teal-400/40 blur-3xl" />
                <div className="absolute bottom-32 right-8 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400/40 to-purple-400/40 blur-3xl" />
              </div>

              {/* Modal overlay */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />

              {/* Profile Settings Modal */}
              <motion.div 
                className="absolute top-32 left-4 right-4 bottom-8 z-20"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl border border-emerald-500/30 shadow-2xl h-full p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-white text-2xl font-bold">Profile Settings</h2>
                    <motion.button 
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="w-6 h-6 text-white" />
                    </motion.button>
                  </div>

                  {/* Menu items */}
                  <div className="space-y-3">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={index}
                        className={`backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 p-4 flex items-center gap-4 cursor-pointer transition-all ${
                          item.isSignOut ? 'hover:bg-red-500/20 hover:border-red-500/30' : 'hover:bg-white/20'
                        }`}
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
                          <span className={`font-semibold ${
                            item.isSignOut ? 'text-red-400' : 'text-white'
                          }`}>
                            {item.label}
                          </span>
                        </div>
                        
                        {/* Arrow */}
                        <ChevronRight className={`w-5 h-5 ${
                          item.isSignOut ? 'text-red-400' : 'text-white/60'
                        }`} />
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating decoration elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400/60 to-teal-400/60 blur-sm"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400/60 to-purple-400/60 blur-sm"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Phone notch */}
            <div className="absolute top-2 sm:top-2.5 lg:top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 lg:w-28 h-4 sm:h-5 lg:h-6 bg-black rounded-full z-30 shadow-xl" />
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-500/30 via-teal-500/30 to-transparent blur-2xl" />
        </motion.div>
      </motion.div>
    </div>
  )
}