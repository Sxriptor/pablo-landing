"use client"

import { motion } from "framer-motion"
import { Trophy, MessageSquare, UserPlus, Calendar, Droplets } from "lucide-react"

const stats = [
  { label: "Wins", value: "58%", color: "from-green-500 to-emerald-600" },
  { label: "Attendance", value: "85%", color: "from-blue-500 to-blue-600" },
  { label: "Skill", value: "42%", color: "from-orange-500 to-red-500" }
]

const weeklyStats = [
  { label: "this week", value: "8", icon: Calendar },
  { label: "win streak", value: "3", icon: Droplets }
]

export function EnhancedProfilePerformanceMockup() {
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
            rotate: [2, -2, 2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transformOrigin: 'center center' }}
        >
          {/* Phone frame */}
          <div className="relative w-[200px] h-[420px] sm:w-[240px] sm:h-[480px] md:w-[260px] md:h-[520px] lg:w-[280px] lg:h-[560px] rounded-xl sm:rounded-2xl lg:rounded-[2rem] bg-black/50 backdrop-blur-xl border border-white/20 shadow-2xl p-2 sm:p-2.5 lg:p-3 overflow-hidden">
            {/* Inner screen */}
            <div className="w-full h-full rounded-xl sm:rounded-2xl lg:rounded-[2rem] bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden relative">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-slate-900" />

              {/* QR Code background (blurred) */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                <div className="w-full h-full bg-gradient-to-br from-purple-500/40 to-pink-500/40 blur-sm" />
              </div>

              {/* Profile header */}
              <div className="absolute top-4 sm:top-6 left-3 right-3 z-20">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                  <motion.div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center border-2 sm:border-3 border-white/20 shadow-2xl"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-slate-800 rounded-full flex items-center justify-center">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full" />
                      </div>
                    </div>
                  </motion.div>

                  <div className="flex-1">
                    <h2 className="text-white text-sm sm:text-base font-bold">tytus luke</h2>
                    <p className="text-white/70 text-[10px] sm:text-xs">@daleebling9</p>
                  </div>
                </div>

                {/* Action buttons - moved up on mobile */}
                <div className="flex gap-1 sm:gap-1.5 mb-2 sm:mb-4">
                  {[
                    { icon: UserPlus, label: "Friends", color: "from-green-500 to-emerald-600" },
                    { icon: MessageSquare, label: "Message", color: "from-blue-500 to-blue-600" },
                    { icon: UserPlus, label: "Invite", color: "from-purple-500 to-pink-500" }
                  ].map((action, index) => (
                    <motion.button
                      key={index}
                      className={`flex-1 bg-gradient-to-r ${action.color} text-white font-semibold py-1 sm:py-1.5 px-1 sm:px-1.5 rounded-md sm:rounded-lg flex items-center justify-center gap-0.5 shadow-lg`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <action.icon className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                      <span className="text-[8px] sm:text-[10px]">{action.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Performance section */}
              <motion.div
                className="absolute top-24 sm:top-28 lg:top-36 left-2 sm:left-3 right-2 sm:right-3 bottom-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg sm:rounded-xl lg:rounded-2xl border border-emerald-500/30 p-2 sm:p-2.5 lg:p-3 shadow-2xl h-full">
                  {/* Performance header */}
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <Trophy className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white text-xs sm:text-sm font-bold">Performance</h3>
                      <p className="text-white/70 text-[8px] sm:text-[10px]">This Month</p>
                    </div>
                  </div>

                  {/* Matches played */}
                  <div className="mb-2 sm:mb-3">
                    <div className="text-white text-xl sm:text-2xl font-bold mb-0.5">12</div>
                    <div className="text-white/70 text-[8px] sm:text-[10px]">matches played</div>
                  </div>

                  {/* Circular stats */}
                  <div className="flex justify-between mb-2 sm:mb-3">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="text-center"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      >
                        <div className="relative w-9 h-9 sm:w-12 sm:h-12 mb-1 sm:mb-1.5">
                          {/* Background circle */}
                          <div className="absolute inset-0 rounded-full bg-white/10" />

                          {/* Progress circle */}
                          <motion.div
                            className={`absolute inset-0 rounded-full bg-gradient-to-br ${stat.color}`}
                            style={{
                              background: `conic-gradient(from 0deg, transparent 0%, transparent ${100 - parseInt(stat.value)}%, rgb(16 185 129) ${100 - parseInt(stat.value)}%, rgb(16 185 129) 100%)`
                            }}
                            initial={{ rotate: 0 }}
                            whileInView={{ rotate: 360 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 + index * 0.2, duration: 1 }}
                          />

                          {/* Inner circle with percentage */}
                          <div className="absolute inset-1 sm:inset-1.5 rounded-full bg-slate-800 flex items-center justify-center">
                            <span className="text-white text-[7px] sm:text-[9px] font-bold">{stat.value}</span>
                          </div>
                        </div>
                        <div className="text-white/70 text-[7px] sm:text-[9px]">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Weekly stats */}
                  <div className="flex gap-1.5 sm:gap-2">
                    {weeklyStats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="flex-1 backdrop-blur-lg bg-white/10 rounded-md sm:rounded-lg lg:rounded-xl border border-white/20 p-1.5 sm:p-2 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="flex items-center justify-center mb-0.5">
                          <stat.icon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                        </div>
                        <div className="text-white text-sm sm:text-base font-bold mb-0.5">{stat.value}</div>
                        <div className="text-white/70 text-[7px] sm:text-[8px]">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating decoration */}
                  <motion.div
                    className="absolute top-2 right-2 w-3 h-3 rounded-full bg-emerald-400/60 blur-sm"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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