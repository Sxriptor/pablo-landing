"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Users, Filter, Search } from "lucide-react"

const mockGames = [
  { sport: "⚽", name: "Sunday Soccer", location: "Central Park", time: "6:00 PM", players: "8/10", distance: "0.5 km" },
  { sport: "🏀", name: "Basketball", location: "Downtown Court", time: "5:30 PM", players: "6/8", distance: "1.2 km" },
  { sport: "🎾", name: "Tennis Match", location: "West Courts", time: "7:00 PM", players: "2/4", distance: "2.1 km" },
]

export function IPhoneGameSearchMockup() {
  return (
    <div className="relative w-full flex items-center justify-center">
      {/* iPhone mockup - showing top half */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            rotate: [3, 5, 3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transformOrigin: 'center center' }}
        >
        {/* Phone frame - top half - Responsive sizing */}
        <div className="relative w-[240px] h-[280px] sm:w-[260px] sm:h-[300px] md:w-[280px] md:h-[320px] lg:w-[300px] lg:h-[340px] rounded-t-[2.5rem] lg:rounded-t-[3rem] bg-black/50 backdrop-blur-xl border border-white/20 border-b-0 shadow-2xl p-2 lg:p-3 overflow-hidden">
          {/* Inner screen */}
          <div className="w-full h-full rounded-t-[2.5rem] bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden relative">
            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 h-11 flex items-center justify-between px-6 text-white text-xs z-20 bg-slate-900/80 backdrop-blur-sm">
              <span className="font-semibold">9:41</span>
              <div className="flex gap-1 items-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* App Header with Search */}
            <div className="absolute top-11 left-0 right-0 px-4 py-3 bg-slate-900/60 backdrop-blur-md border-b border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <h1 className="text-white text-xl font-bold">Find Games</h1>
                <motion.div 
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Filter className="w-4 h-4 text-white" />
                </motion.div>
              </div>
              
              {/* Search bar */}
              <motion.div 
                className="backdrop-blur-xl bg-white/10 rounded-xl border border-white/20 px-3 py-2 flex items-center gap-2"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Search className="w-4 h-4 text-white/50" />
                <input 
                  type="text" 
                  placeholder="Search sports, location..."
                  className="bg-transparent text-white text-sm placeholder-white/50 outline-none flex-1"
                  disabled
                />
              </motion.div>

              {/* Filter chips */}
              <div className="flex gap-2 overflow-x-auto hide-scrollbar">
                {["⚽ Soccer", "🏀 Basketball", "🎾 Tennis", "⚾ Baseball"].map((sport, idx) => (
                  <motion.div
                    key={sport}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${
                      idx === 0 
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" 
                        : "bg-white/5 text-white/70 border border-white/10"
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                  >
                    {sport}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Game Cards List */}
            <div className="absolute top-40 left-0 right-0 px-3 space-y-1.5">
              {mockGames.map((game, idx) => (
                <motion.div
                  key={idx}
                  className="backdrop-blur-xl bg-white/10 rounded-lg border border-white/20 p-2 shadow-lg relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                >
                  <div className="flex items-start gap-2">
                    {/* Sport icon */}
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-base flex-shrink-0">
                      {game.sport}
                    </div>
                    
                    {/* Game info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1 mb-1">
                        <h3 className="text-white font-bold text-[10px] leading-tight truncate">{game.name}</h3>
                        <span className="text-emerald-400 text-[9px] font-semibold whitespace-nowrap">{game.distance}</span>
                      </div>
                      
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1 text-white/70 text-[9px]">
                          <MapPin className="w-2 h-2 flex-shrink-0" />
                          <span className="truncate">{game.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-0.5 text-white/70 text-[9px]">
                            <Clock className="w-2 h-2 flex-shrink-0" />
                            <span className="truncate">{game.time}</span>
                          </div>
                          <div className="flex items-center gap-0.5 text-white/70 text-[9px]">
                            <Users className="w-2 h-2 flex-shrink-0" />
                            <span>{game.players}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action button */}
                      {idx === 0 && (
                        <motion.button
                          className="mt-1 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-[9px] font-bold py-1 rounded-md"
                          initial={{ scale: 0.9, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          Join Game
                        </motion.button>
                      )}
                    </div>
                  </div>
                  
                  {/* Open badge for first game */}
                  {idx === 0 && (
                    <motion.div 
                      className="absolute top-1.5 right-1.5 bg-emerald-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, type: "spring" }}
                    >
                      OPEN
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent pointer-events-none" />
            
            {/* Map preview indicator at bottom */}
            <motion.div 
              className="absolute bottom-4 left-4 right-4 backdrop-blur-lg bg-white/5 rounded-lg border border-white/10 p-2 flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-white/70 text-xs">Map View</span>
              <div className="flex gap-0.5">
                <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                <div className="w-1 h-1 rounded-full bg-purple-400"></div>
                <div className="w-1 h-1 rounded-full bg-pink-400"></div>
              </div>
            </motion.div>
          </div>

          {/* Phone notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-30 shadow-xl" />
        </div>

        {/* Fade out effect at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#0a0f14] pointer-events-none" />

        {/* Glow effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-500/20 via-blue-500/20 to-transparent blur-2xl" />
        </motion.div>
      </motion.div>
    </div>
  )
}

