"use client"

import { motion } from "framer-motion"
import { Search, Bell, Menu, Filter, Clock, Users, MapPin } from "lucide-react"

const games = [
  {
    title: "Downtown Padel Courts",
    time: "Today 10:00am to 11:30am",
    duration: "90 min",
    players: "3/4",
    price: "$12",
    level: "CASUAL",
    image: "/padel-court-1.jpg"
  },
  {
    title: "Eastside Padel League",
    time: "Today 9:00pm to 10:30pm", 
    duration: "90 min",
    players: "3/4",
    price: "$20",
    level: "COMP",
    image: "/padel-court-2.jpg"
  },
  {
    title: "Elite Padel Academy",
    time: "Today 6:00pm to 7:00pm",
    duration: "60 min", 
    players: "2/4",
    price: "$15",
    level: "COMP",
    image: "/padel-court-3.jpg"
  }
]

const days = [
  { day: "Sun", date: "12", active: true },
  { day: "Mon", date: "13", active: false },
  { day: "Tue", date: "14", active: false },
  { day: "Wed", date: "15", active: false }
]

export function EnhancedGameDiscoveryMockup() {
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
            rotate: [0, 2, 0]
          }}
          transition={{
            duration: 4,
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
                <span className="font-semibold">5:37</span>
                <div className="flex gap-1 items-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 via-teal-500/10 to-slate-900" />

              {/* Header with search */}
              <div className="absolute top-11 left-4 right-4 z-20">
                <div className="flex items-center gap-3 mb-4">
                  <motion.button 
                    className="w-12 h-12 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Menu className="w-6 h-6 text-emerald-400" />
                  </motion.button>
                  
                  <div className="flex-1 relative">
                    <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 px-4 py-3 flex items-center gap-3">
                      <Search className="w-5 h-5 text-white/60" />
                      <span className="text-white/60 text-sm">Search games</span>
                    </div>
                  </div>
                  
                  <motion.button 
                    className="w-12 h-12 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Filter className="w-6 h-6 text-emerald-400" />
                  </motion.button>
                  
                  <motion.button 
                    className="w-12 h-12 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Bell className="w-6 h-6 text-emerald-400" />
                  </motion.button>
                </div>

                {/* Date selector */}
                <div className="flex gap-2 mb-4">
                  {days.map((day, index) => (
                    <motion.div
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                        day.active 
                          ? 'bg-white text-slate-900' 
                          : 'bg-emerald-500/20 text-white backdrop-blur-xl border border-emerald-500/30'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {day.day} {day.date}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Available Games Section */}
              <div className="absolute top-44 left-4 right-4 bottom-4">
                <h2 className="text-white text-xl font-bold mb-4">Available Games</h2>
                
                <div className="space-y-3">
                  {games.map((game, index) => (
                    <motion.div
                      key={index}
                      className="backdrop-blur-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl border border-emerald-500/30 p-4 shadow-xl relative overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      {/* Background image with overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 to-teal-600/80" />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-white font-bold text-lg mb-1">{game.title}</h3>
                            <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                              <Clock className="w-4 h-4" />
                              <span>{game.time}</span>
                            </div>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                            game.level === 'CASUAL' 
                              ? 'bg-blue-500/30 text-blue-200 border border-blue-400/30' 
                              : 'bg-orange-500/30 text-orange-200 border border-orange-400/30'
                          }`}>
                            {game.level}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-white/90 text-sm">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{game.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{game.players}</span>
                            </div>
                          </div>
                          <div className="text-white font-bold text-xl">
                            {game.price}
                            <span className="text-sm font-normal text-white/70 ml-1">per player</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 blur-xl" />
                    </motion.div>
                  ))}
                </div>
              </div>
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