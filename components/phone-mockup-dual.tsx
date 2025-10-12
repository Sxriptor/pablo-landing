"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Users, Clock, Trophy, Star, TrendingUp, Check, MessageCircle, Send, Calendar, Zap } from "lucide-react"

const mockGames = [
  {
    sport: "⚽ Soccer",
    location: "Central Park",
    time: "Today, 6:00 PM",
    players: "8/10",
    distance: "0.5 km",
  },
  {
    sport: "🏀 Basketball",
    location: "Downtown Court",
    time: "Tomorrow, 5:30 PM",
    players: "6/8",
    distance: "1.2 km",
  },
  {
    sport: "🎾 Tennis",
    location: "West Side Courts",
    time: "Today, 7:00 PM",
    players: "2/4",
    distance: "2.1 km",
  },
]



export function PhoneMockupTriple() {
  const [currentGame, setCurrentGame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGame((prev) => (prev + 1) % mockGames.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center gap-0.5 xs:gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 2xl:gap-8">
      {/* Floating glass card background elements - responsive positioning */}
      <motion.div
        className="absolute top-1/4 -left-4 xs:-left-6 sm:-left-8 md:-left-12 lg:-left-16 xl:-left-20 w-8 h-8 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 rounded-xl xs:rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10"
        initial={{ opacity: 0, scale: 0.5, x: -40, y: -25 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: [0, 10, 0],
          rotate: [0, 3, 0],
        }}
        style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden', transform: 'translate3d(0,0,0)' }}
        transition={{
          opacity: { duration: 1, ease: "easeOut" },
          scale: { duration: 1, ease: "easeOut" },
          x: { duration: 1, ease: "easeOut" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-4 xs:-right-6 sm:-right-8 md:-right-12 lg:-right-16 xl:-right-20 w-10 h-10 xs:w-14 xs:h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-xl xs:rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/10"
        initial={{ opacity: 0, scale: 0.5, x: 40, y: 25 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: [0, -12, 0],
          rotate: [0, -3, 0],
        }}
        style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden', transform: 'translate3d(0,0,0)' }}
        transition={{
          opacity: { duration: 1, ease: "easeOut", delay: 0.2 },
          scale: { duration: 1, ease: "easeOut", delay: 0.2 },
          x: { duration: 1, ease: "easeOut", delay: 0.2 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
          rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
        }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-lg xs:rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-br from-pink-500/20 to-orange-500/20 backdrop-blur-xl border border-white/10 -z-10"
        initial={{ opacity: 0, scale: 0.5, y: -25 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, 8, 0],
          rotate: [0, 5, 0],
        }}
        style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden', transform: 'translate3d(0,0,0)' }}
        transition={{
          opacity: { duration: 1, ease: "easeOut", delay: 0.4 },
          scale: { duration: 1, ease: "easeOut", delay: 0.4 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
          rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
        }}
      />

      {/* First Phone - Find Games Screen - Responsive sizing */}
      <motion.div
        className="relative z-20"
        initial={{ opacity: 0, x: -50, rotate: -8 }}
        animate={{ opacity: 1, x: 0, rotate: -8 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transform: 'translateY(-8px) rotate(-6deg)', willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
      >
        <motion.div 
          className="relative w-[120px] h-[260px] xs:w-[140px] xs:h-[300px] sm:w-[180px] sm:h-[380px] md:w-[220px] md:h-[440px] lg:w-[260px] lg:h-[520px] xl:w-[280px] xl:h-[560px] 2xl:w-[300px] 2xl:h-[600px] rounded-lg sm:rounded-xl lg:rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/20 shadow-2xl p-1.5 sm:p-2 lg:p-3"
          animate={{
            y: [0, -6, 0],
          }}
          style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-br from-slate-900/95 to-slate-800/95 overflow-hidden relative">
            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 h-6 sm:h-8 flex items-center justify-between px-2 sm:px-5 text-white text-[8px] sm:text-[10px] z-20">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3">📶</div>
                <div className="w-2 h-2 sm:w-3 sm:h-3">🔋</div>
              </div>
            </div>

            {/* Enhanced App header */}
            <div className="absolute top-6 sm:top-8 left-2 sm:left-3 right-2 sm:right-3 z-20">
              <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
                <motion.button 
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-sm" />
                </motion.button>
                
                <div className="flex-1 relative">
                  <div className="backdrop-blur-xl bg-white/10 rounded-lg sm:rounded-xl border border-white/20 px-2 sm:px-3 py-1.5 sm:py-2 flex items-center gap-1 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/60 flex items-center justify-center">🔍</div>
                    <span className="text-white/60 text-[9px] sm:text-[10px]">Search games</span>
                  </div>
                </div>

              </div>

              {/* Date selector */}
              <div className="flex gap-1 mb-1 sm:mb-2">
                <div className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[9px] font-semibold bg-white text-slate-900">
                  Sun 12
                </div>
                <div className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[9px] font-semibold bg-emerald-500/20 text-white backdrop-blur-xl border border-emerald-500/30">
                  Mon 13
                </div>
                <div className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[9px] font-semibold bg-emerald-500/20 text-white backdrop-blur-xl border border-emerald-500/30">
                  Tue 14
                </div>
                <div className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[9px] font-semibold bg-emerald-500/20 text-white backdrop-blur-xl border border-emerald-500/30">
                  Wed 15
                </div>
              </div>
            </div>

            {/* Enhanced Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 via-teal-500/10 to-slate-900" />

            {/* Enhanced Game Discovery Content */}
            <div className="absolute top-28 left-2 sm:left-3 right-2 sm:right-3 bottom-16 overflow-hidden">
              <h2 className="text-white text-[10px] sm:text-sm font-bold mb-1.5 sm:mb-3">Available Games</h2>
              
              <div className="space-y-1 sm:space-y-2">
                {/* Downtown Padel Courts */}
                <motion.div
                  className="backdrop-blur-xl bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-md sm:rounded-lg lg:rounded-xl border border-emerald-500/40 p-1.5 sm:p-2 lg:p-3 shadow-xl relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 to-teal-600/80" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-1 sm:mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold text-[9px] sm:text-xs lg:text-sm mb-0.5 sm:mb-1 truncate">Downtown Padel</h3>
                        <div className="flex items-center gap-0.5 sm:gap-1 text-white/90 text-[7px] sm:text-[10px] lg:text-xs mb-0.5 sm:mb-1">
                          <Clock className="w-2 h-2 sm:w-2.5 sm:h-2.5 flex-shrink-0" />
                          <span className="truncate">Today 10:00am</span>
                        </div>
                      </div>
                      <div className="px-1 sm:px-1.5 lg:px-2 py-0.5 rounded-full text-[7px] sm:text-[8px] lg:text-[9px] font-bold bg-blue-500/30 text-blue-200 border border-blue-400/30 flex-shrink-0 ml-1">
                        CASUAL
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-1">
                      <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 text-white/90 text-[7px] sm:text-[10px] lg:text-xs">
                        <div className="flex items-center gap-0.5">
                          <Clock className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-2.5 lg:h-2.5" />
                          <span>90m</span>
                        </div>
                        <div className="flex items-center gap-0.5">
                          <Users className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-2.5 lg:h-2.5" />
                          <span>3/4</span>
                        </div>
                      </div>
                      <div className="text-white font-bold text-[9px] sm:text-xs lg:text-sm">
                        $12
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Eastside Padel League */}
                <motion.div
                  className="backdrop-blur-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-md sm:rounded-lg lg:rounded-xl border border-emerald-500/30 p-1.5 sm:p-2 lg:p-3 shadow-xl relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/60 to-teal-600/60" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-1 sm:mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold text-[9px] sm:text-xs lg:text-sm mb-0.5 sm:mb-1 truncate">Eastside League</h3>
                        <div className="flex items-center gap-0.5 sm:gap-1 text-white/90 text-[7px] sm:text-[10px] lg:text-xs mb-0.5 sm:mb-1">
                          <Clock className="w-2 h-2 sm:w-2.5 sm:h-2.5 flex-shrink-0" />
                          <span className="truncate">Today 9:00pm</span>
                        </div>
                      </div>
                      <div className="px-1 sm:px-1.5 lg:px-2 py-0.5 rounded-full text-[7px] sm:text-[8px] lg:text-[9px] font-bold bg-orange-500/30 text-orange-200 border border-orange-400/30 flex-shrink-0 ml-1">
                        COMP
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-1">
                      <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 text-white/90 text-[7px] sm:text-[10px] lg:text-xs">
                        <div className="flex items-center gap-0.5">
                          <Clock className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-2.5 lg:h-2.5" />
                          <span>90m</span>
                        </div>
                        <div className="flex items-center gap-0.5">
                          <Users className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-2.5 lg:h-2.5" />
                          <span>3/4</span>
                        </div>
                      </div>
                      <div className="text-white font-bold text-[9px] sm:text-xs lg:text-sm">
                        $20
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Elite Padel Academy */}
                <motion.div
                  className="backdrop-blur-xl bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-md sm:rounded-lg lg:rounded-xl border border-emerald-500/25 p-1.5 sm:p-2 lg:p-3 shadow-xl relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/50 to-teal-600/50" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-1 sm:mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold text-[9px] sm:text-xs lg:text-sm mb-0.5 sm:mb-1 truncate">Elite Academy</h3>
                        <div className="flex items-center gap-0.5 sm:gap-1 text-white/90 text-[7px] sm:text-[10px] lg:text-xs mb-0.5 sm:mb-1">
                          <Clock className="w-2 h-2 sm:w-2.5 sm:h-2.5 flex-shrink-0" />
                          <span className="truncate">Today 6:00pm</span>
                        </div>
                      </div>
                      <div className="px-1 sm:px-1.5 lg:px-2 py-0.5 rounded-full text-[7px] sm:text-[8px] lg:text-[9px] font-bold bg-orange-500/30 text-orange-200 border border-orange-400/30 flex-shrink-0 ml-1">
                        COMP
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-1">
                      <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 text-white/90 text-[7px] sm:text-[10px] lg:text-xs">
                        <div className="flex items-center gap-0.5">
                          <Clock className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-2.5 lg:h-2.5" />
                          <span>60m</span>
                        </div>
                        <div className="flex items-center gap-0.5">
                          <Users className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-2.5 lg:h-2.5" />
                          <span>2/4</span>
                        </div>
                      </div>
                      <div className="text-white font-bold text-[9px] sm:text-xs lg:text-sm">
                        $15
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>


          </div>

          {/* Phone notch */}
          <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-16 h-3 xs:w-20 xs:h-4 sm:w-24 sm:h-5 bg-black rounded-full z-30" />
        </motion.div>

        {/* Glow effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/30 via-teal-500/30 to-cyan-500/30 blur-3xl rounded-full scale-110" />
      </motion.div>

      {/* Second Phone - Profile/Stats Screen (center, visible on all screens) - Responsive sizing */}
      <motion.div
        className="relative z-30"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        style={{ transform: 'translateY(0px) scale(1.01)', willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
      >
        <motion.div 
          className="relative w-[140px] h-[300px] xs:w-[160px] xs:h-[340px] sm:w-[200px] sm:h-[420px] md:w-[240px] md:h-[500px] lg:w-[280px] lg:h-[580px] xl:w-[300px] xl:h-[620px] 2xl:w-[320px] 2xl:h-[660px] rounded-lg sm:rounded-xl lg:rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/20 shadow-2xl p-1.5 sm:p-2 lg:p-3"
          animate={{
            y: [0, -8, 0],
            scale: [1.02, 1.04, 1.02],
          }}
          style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-slate-900/95 to-slate-800/95 overflow-hidden relative">
            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-5 text-white text-[10px] z-20">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-3 h-3">📶</div>
                <div className="w-3 h-3">🔋</div>
              </div>
            </div>

            {/* Enhanced Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-slate-900" />

            {/* Enhanced Profile header */}
            <div className="absolute top-6 sm:top-8 left-3 right-3 z-20">
              <div className="flex items-center gap-2 mb-2 sm:mb-4">
                <motion.div 
                  className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center border-2 border-white/20 shadow-xl"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-white flex items-center justify-center">
                    <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 bg-slate-800 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
                    </div>
                  </div>
                </motion.div>
                
                <div className="flex-1">
                  <h2 className="text-white text-[10px] sm:text-xs font-bold">Alex Johnson</h2>
                  <p className="text-white/70 text-[7px] sm:text-[8px]">@alexj_sports</p>
                </div>
              </div>

              {/* Action buttons - moved up on mobile */}
              <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                <motion.button
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-0.5 sm:py-1 px-1 sm:px-1.5 rounded-md sm:rounded-lg flex items-center justify-center gap-0.5 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Users className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                  <span className="text-[7px] sm:text-[8px]">Friends</span>
                </motion.button>
                <motion.button
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-0.5 sm:py-1 px-1 sm:px-1.5 rounded-md sm:rounded-lg flex items-center justify-center gap-0.5 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                  <span className="text-[7px] sm:text-[8px]">Message</span>
                </motion.button>
                <motion.button
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-0.5 sm:py-1 px-1 sm:px-1.5 rounded-md sm:rounded-lg flex items-center justify-center gap-0.5 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                  <span className="text-[7px] sm:text-[8px]">Invite</span>
                </motion.button>
              </div>
            </div>

            {/* Enhanced Performance section */}
            <motion.div 
              className="absolute top-28 sm:top-32 left-2 sm:left-3 right-2 sm:right-3 bottom-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg sm:rounded-xl lg:rounded-2xl border border-emerald-500/30 p-1.5 sm:p-2 lg:p-3 shadow-2xl h-full">
                {/* Performance header */}
                <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md sm:rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <Trophy className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-[9px] sm:text-xs font-bold">Performance</h3>
                    <p className="text-white/70 text-[6px] sm:text-[7px]">This Month</p>
                  </div>
                </div>

                {/* Matches played */}
                <div className="mb-1.5 sm:mb-3">
                  <div className="text-white text-base sm:text-xl font-bold mb-0.5">12</div>
                  <div className="text-white/70 text-[7px] sm:text-[8px]">matches played</div>
                </div>

                {/* Circular stats */}
                <div className="flex justify-between mb-1.5 sm:mb-3">
                  {[
                    { label: "Wins", value: "58%", color: "from-green-500 to-emerald-600" },
                    { label: "Attendance", value: "85%", color: "from-blue-500 to-blue-600" },
                    { label: "Skill", value: "42%", color: "from-orange-500 to-red-500" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    >
                      <div className="relative w-6 h-6 sm:w-8 sm:h-8 mb-0.5 sm:mb-1">
                        <div className="absolute inset-0 rounded-full bg-white/10" />
                        <div className="absolute inset-0.5 rounded-full bg-slate-800 flex items-center justify-center">
                          <span className="text-white text-[6px] sm:text-[7px] font-bold">{stat.value}</span>
                        </div>
                      </div>
                      <div className="text-white/70 text-[6px] sm:text-[7px] leading-tight">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Weekly stats */}
                <div className="flex gap-1 sm:gap-1.5">
                  <motion.div
                    className="flex-1 backdrop-blur-lg bg-white/10 rounded-md sm:rounded-lg border border-white/20 p-1 sm:p-1.5 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <div className="flex items-center justify-center mb-0.5">
                      <Calendar className="w-2 h-2 sm:w-3 sm:h-3 text-emerald-400" />
                    </div>
                    <div className="text-white text-xs sm:text-sm font-bold mb-0.5">8</div>
                    <div className="text-white/70 text-[6px] sm:text-[7px] leading-tight">this week</div>
                  </motion.div>
                  <motion.div
                    className="flex-1 backdrop-blur-lg bg-white/10 rounded-md sm:rounded-lg border border-white/20 p-1 sm:p-1.5 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                  >
                    <div className="flex items-center justify-center mb-0.5">
                      <Zap className="w-2 h-2 sm:w-3 sm:h-3 text-emerald-400" />
                    </div>
                    <div className="text-white text-xs sm:text-sm font-bold mb-0.5">3</div>
                    <div className="text-white/70 text-[6px] sm:text-[7px] leading-tight">win streak</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>


          </div>

          {/* Phone notch */}
          <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-16 h-3 xs:w-20 xs:h-4 sm:w-24 sm:h-5 bg-black rounded-full z-30" />
        </motion.div>

        {/* Glow effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/40 via-teal-500/40 to-cyan-500/40 blur-3xl rounded-full scale-120" />
      </motion.div>

      {/* Third Phone - Game Active Screen - Responsive sizing */}
      <motion.div
        className="relative z-20"
        initial={{ opacity: 0, x: 50, rotate: 6 }}
        animate={{ opacity: 1, x: 0, rotate: 6 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        style={{ transform: 'translateY(12px) rotate(4deg)', willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
      >
        <motion.div 
          className="relative w-[100px] h-[220px] xs:w-[120px] xs:h-[260px] sm:w-[160px] sm:h-[340px] md:w-[200px] md:h-[420px] lg:w-[240px] lg:h-[500px] xl:w-[260px] xl:h-[540px] 2xl:w-[280px] 2xl:h-[580px] rounded-lg sm:rounded-xl lg:rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/20 shadow-2xl p-1.5 sm:p-2 lg:p-3"
          animate={{
            y: [0, 4, 0],
          }}
          style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        >
          <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-slate-900/95 to-slate-800/95 overflow-hidden relative">
            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-5 text-white text-[10px] z-20">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-3 h-3">📶</div>
                <div className="w-3 h-3">🔋</div>
              </div>
            </div>

            {/* Enhanced Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/20 via-orange-500/10 to-slate-900" />

            {/* Enhanced Leaderboard Header */}
            <div className="absolute top-8 left-2 right-2 z-20">
              <div className="flex items-center gap-1 mb-3">
                <motion.button 
                  className="w-6 h-6 rounded-full bg-yellow-500/20 backdrop-blur-xl border border-yellow-500/30 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2 h-2 bg-yellow-400 rounded-sm" />
                </motion.button>
                
                <div className="flex gap-0.5 flex-wrap">
                  <div className="px-1.5 py-0.5 rounded-full bg-yellow-500/20 backdrop-blur-xl border border-yellow-500/30 text-white text-[7px] font-semibold">
                    🏓 Pickleball
                  </div>
                  <div className="px-1.5 py-0.5 rounded-full bg-yellow-500/20 backdrop-blur-xl border border-yellow-500/30 text-white text-[7px] font-semibold">
                    🏀 Basketball
                  </div>
                </div>
              </div>

              {/* Scope tabs */}
              <div className="flex gap-0.5 mb-3 justify-center">
                <div className="px-2 py-0.5 rounded-full text-[8px] font-semibold border border-emerald-500 text-emerald-400 bg-emerald-500/10">
                  Local
                </div>
                <div className="px-2 py-0.5 rounded-full text-[8px] font-semibold text-white/70">
                  National
                </div>
                <div className="px-2 py-0.5 rounded-full text-[8px] font-semibold text-white/70">
                  Global
                </div>
              </div>
            </div>

            {/* Top 3 podium */}
            <div className="absolute top-24 left-2 right-2 z-20">
              <div className="flex items-end justify-center gap-1 mb-3">
                {[
                  { name: "Maria Garcia", initial: "M", score: 2640, rank: 2, color: "from-blue-500 to-blue-600" },
                  { name: "Carlos Rodriguez", initial: "C", score: 2850, rank: 1, color: "from-orange-500 to-red-500" },
                  { name: "Juan Martinez", initial: "J", score: 2420, rank: 3, color: "from-green-500 to-emerald-600" }
                ].map((player, index) => (
                  <motion.div
                    key={index}
                    className="text-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    {/* Trophy for winner */}
                    {player.rank === 1 && (
                      <motion.div 
                        className="absolute -top-4 left-1/2 -translate-x-1/2"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Trophy className="w-4 h-4 text-yellow-400" />
                      </motion.div>
                    )}
                    
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${player.color} flex items-center justify-center text-white text-xs font-bold mb-1 relative`}>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-slate-800 border border-white flex items-center justify-center text-[8px] font-bold text-white">
                        {player.rank}
                      </div>
                      {player.initial}
                    </div>
                    
                    <div className="text-white text-[8px] font-semibold">{player.name.split(' ')[0]}</div>
                    <div className={`text-xs font-bold ${
                      player.rank === 1 ? 'text-yellow-400' : 
                      player.rank === 2 ? 'text-blue-400' : 'text-green-400'
                    }`}>
                      {player.score}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Leaderboard list */}
            <div className="absolute top-44 left-2 right-2 bottom-12">
              <div className="space-y-1">
                {[
                  { name: "Sofia Lopez", initial: "S", score: 2180, rank: 4 },
                  { name: "Diego Santos", initial: "D", score: 1950, rank: 5 },
                  { name: "Ana Torres", initial: "A", score: 1820, rank: 6 },
                  { name: "Luis Hernandez", initial: "L", score: 1690, rank: 7 }
                ].map((player, index) => (
                  <motion.div
                    key={index}
                    className="backdrop-blur-xl bg-emerald-500/20 rounded-lg border border-emerald-500/30 p-2 flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.02, x: 2 }}
                  >
                    {/* Rank */}
                    <div className="w-4 h-4 rounded bg-emerald-600 flex items-center justify-center text-white font-bold text-[8px]">
                      {player.rank}
                    </div>
                    
                    {/* Avatar */}
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-[8px]">
                      {player.initial}
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1">
                      <div className="text-white font-semibold text-[9px]">{player.name}</div>
                    </div>
                    
                    {/* Score */}
                    <div className="text-right">
                      <div className="text-white font-bold text-[9px]">{player.score}</div>
                      <div className="flex items-center gap-0.5">
                        <TrendingUp className="w-2 h-2 text-green-400" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>



            {/* Confetti elements */}
            {[...Array(3)].map((_, idx) => (
              <motion.div
                key={idx}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  background: ['#3b82f6', '#10b981', '#f59e0b'][idx],
                  left: `${20 + idx * 25}%`,
                  top: `${15 + idx * 8}%`,
                }}
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2 + idx * 0.5,
                  repeat: Infinity,
                  delay: idx * 0.2,
                }}
              />
            ))}
          </div>

          {/* Phone notch */}
          <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-16 h-3 xs:w-20 xs:h-4 sm:w-24 sm:h-5 bg-black rounded-full z-30" />
        </motion.div>

        {/* Glow effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-500/30 via-orange-500/30 to-red-500/30 blur-3xl rounded-full scale-110" />
      </motion.div>


    </div>
  )
}

