"use client"

import { motion } from "framer-motion"
import { Star, Download } from "lucide-react"

export function IPhoneDownloadMockup() {
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
            y: [0, -8, 0],
            rotate: [-5, -3, -5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transformOrigin: 'center center' }}
        >
          {/* Phone frame - top half - Responsive sizing */}
          <div className="relative w-[200px] h-[240px] xs:w-[220px] xs:h-[260px] sm:w-[240px] sm:h-[280px] md:w-[260px] md:h-[300px] lg:w-[280px] lg:h-[320px] xl:w-[300px] xl:h-[340px] rounded-t-[2rem] sm:rounded-t-[2.5rem] lg:rounded-t-[3rem] bg-black/50 backdrop-blur-xl border border-white/20 border-b-0 shadow-2xl p-1.5 sm:p-2 lg:p-3 overflow-hidden">
            {/* Inner screen */}
            <div className="w-full h-full rounded-t-[2rem] sm:rounded-t-[2.5rem] bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden relative">
              {/* Status bar */}
              <div className="absolute top-0 left-0 right-0 h-8 sm:h-10 lg:h-11 flex items-center justify-between px-3 sm:px-4 lg:px-6 text-white text-[10px] sm:text-xs z-20 bg-slate-900/80 backdrop-blur-sm">
                <span className="font-semibold">9:41</span>
                <div className="flex gap-0.5 sm:gap-1 items-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* App Store Header */}
              <div className="absolute top-8 sm:top-10 lg:top-11 left-0 right-0 px-3 sm:px-4 lg:px-5 py-2 sm:py-3 lg:py-4 bg-slate-900/60 backdrop-blur-md border-b border-white/10">
                <div className="flex items-center justify-between">
                  <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-bold">App Store</h1>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm">👤</span>
                  </div>
                </div>
              </div>

              {/* App Card */}
              <div className="absolute top-20 sm:top-24 lg:top-28 left-2 right-2 sm:left-3 sm:right-3 lg:left-4 lg:right-4">
                <motion.div
                  className="backdrop-blur-xl bg-white/10 rounded-xl sm:rounded-2xl border border-white/20 p-2 sm:p-2.5 lg:p-3 shadow-xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="flex gap-2 sm:gap-2.5 lg:gap-3">
                    {/* App Icon */}
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                        <img
                          src="/playcirclelogonew.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* App Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold text-xs sm:text-sm lg:text-base mb-0.5 truncate">PlayCircle</h3>
                      <p className="text-white/70 text-[9px] sm:text-[10px] mb-1 truncate">Find & Join Sports Games</p>
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-white/90 text-[9px] sm:text-[10px] font-semibold">4.9</span>
                        <span className="text-white/50 text-[8px] sm:text-[9px]">• 5K+</span>
                      </div>
                      <div className="flex items-center gap-1 mt-0.5 sm:mt-1">
                        <span className="text-white/50 text-[8px] sm:text-[9px]">#1 Sports</span>
                        <span className="text-white/50 text-[8px] sm:text-[9px]">• Age 12+</span>
                      </div>
                    </div>
                  </div>

                  {/* Download Button with Animation */}
                  <motion.div
                    className="mt-2 sm:mt-3 lg:mt-4 relative"
                    initial={{ width: "100%" }}
                  >
                    <motion.button
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 sm:py-2.5 lg:py-3 rounded-full flex items-center justify-center gap-1 sm:gap-2 transition-all shadow-lg text-xs sm:text-sm lg:text-base"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                      <span>GET</span>
                    </motion.button>

                    {/* Download progress indicator */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-white/30 rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "60%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
                    />
                  </motion.div>
                </motion.div>

                {/* Additional info badges */}
                <div className="flex gap-1 sm:gap-2 mt-2 sm:mt-3">
                  <motion.div
                    className="backdrop-blur-lg bg-white/5 rounded-md sm:rounded-lg border border-white/10 px-2 sm:px-3 py-1 sm:py-2 flex-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-white/50 text-[8px] sm:text-[10px]">Chart</p>
                    <p className="text-white font-bold text-[10px] sm:text-xs lg:text-sm">#1 Sports</p>
                  </motion.div>
                  <motion.div
                    className="backdrop-blur-lg bg-white/5 rounded-md sm:rounded-lg border border-white/10 px-2 sm:px-3 py-1 sm:py-2 flex-1"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-white/50 text-[8px] sm:text-[10px]">Developer</p>
                    <p className="text-white font-bold text-[10px] sm:text-xs lg:text-sm">PlayCircle</p>
                  </motion.div>
                </div>
              </div>

              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent pointer-events-none" />
            </div>

            {/* Phone notch */}
            <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-24 sm:w-28 lg:w-32 h-4 sm:h-5 lg:h-6 bg-black rounded-full z-30 shadow-xl" />
          </div>

          {/* Fade out effect at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 lg:h-20 bg-gradient-to-b from-transparent to-[#0a0f14] pointer-events-none" />

          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent blur-2xl" />
        </motion.div>
      </motion.div>
    </div>
  )
}

