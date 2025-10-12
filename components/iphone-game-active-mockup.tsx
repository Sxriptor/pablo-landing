"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Users, Star, Check } from "lucide-react"

const players = [
  { name: "John D.", avatar: "JD", status: "checked-in" },
  { name: "Sarah M.", avatar: "SM", status: "checked-in" },
  { name: "Mike R.", avatar: "MR", status: "checked-in" },
  { name: "Lisa K.", avatar: "LK", status: "checked-in" },
]

export function IPhoneGameActiveMockup() {
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
            y: [0, -6, 0],
            rotate: [-3, -1, -3]
          }}
          transition={{
            duration: 4.5,
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

              {/* Game Active Header */}
              <motion.div
                className="absolute top-11 left-3 right-3 backdrop-blur-xl bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl border border-emerald-500/30 p-2"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <motion.div
                      className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-base"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    >
                      ⚽
                    </motion.div>
                    <div>
                      <h3 className="text-white font-bold text-xs leading-tight">Sunday Soccer</h3>
                      <p className="text-emerald-300 text-[9px] font-semibold">Game In Progress</p>
                    </div>
                  </div>
                  <motion.div
                    className="bg-emerald-500 px-1.5 py-0.5 rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <span className="text-white text-[8px] font-bold">LIVE</span>
                  </motion.div>
                </div>

                <div className="grid grid-cols-3 gap-1">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-0.5 mb-0.5">
                      <Clock className="w-2 h-2 text-white" />
                    </div>
                    <p className="text-white/90 text-[9px] font-semibold leading-tight">6:00 PM</p>
                    <p className="text-white/60 text-[7px] leading-tight">Today</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-0.5 mb-0.5">
                      <Users className="w-2 h-2 text-white" />
                    </div>
                    <p className="text-white/90 text-[9px] font-semibold leading-tight">10/10</p>
                    <p className="text-white/60 text-[7px] leading-tight">Players</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-0.5 mb-0.5">
                      <MapPin className="w-2 h-2 text-white" />
                    </div>
                    <p className="text-white/90 text-[9px] font-semibold leading-tight">0.5 km</p>
                    <p className="text-white/60 text-[7px] leading-tight">Away</p>
                  </div>
                </div>
              </motion.div>

              {/* Players List */}
              <div className="absolute top-[110px] left-3 right-3">
                <div className="flex items-center justify-between mb-1 px-0.5">
                  <h4 className="text-white font-bold text-[9px]"></h4>
                  <span className="text-emerald-400 text-[8px] font-semibold">4/10</span>
                </div>

                <div className="space-y-1">
                  {players.map((player, idx) => (
                    <motion.div
                      key={idx}
                      className="backdrop-blur-lg bg-white/10 rounded-lg border border-white/20 p-1.5 flex items-center justify-between"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                    >
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-[8px] font-bold">{player.avatar}</span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-white text-[9px] font-semibold leading-tight">{player.name}</p>
                          <div className="flex items-center gap-0.5 mt-0.5">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <Star key={i} className="w-1.5 h-1.5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <motion.div
                        className="bg-emerald-500 rounded-full p-0.5 flex-shrink-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + idx * 0.1, type: "spring" }}
                      >
                        <Check className="w-2 h-2 text-white" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Check-in Button */}
              <motion.div
                className="absolute bottom-3 left-3 right-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold py-2 rounded-xl flex items-center justify-center gap-1.5 shadow-lg text-xs"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>I'm Here - Check In</span>
                </motion.button>
              </motion.div>

              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-green-500/5 to-transparent pointer-events-none" />

              {/* Confetti elements */}
              {[...Array(5)].map((_, idx) => (
                <motion.div
                  key={idx}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'][idx],
                    left: `${20 + idx * 15}%`,
                    top: `${15 + idx * 10}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
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
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-30 shadow-xl" />
          </div>

          {/* Fade out effect at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#0a0f14] pointer-events-none" />

          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-500/20 via-green-500/20 to-transparent blur-2xl" />
        </motion.div>
      </motion.div>
    </div>
  )
}

