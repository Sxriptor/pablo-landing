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
        {/* Phone frame - top half */}
        <div className="relative w-[280px] h-[320px] rounded-t-[3rem] bg-black/50 backdrop-blur-xl border border-white/20 border-b-0 shadow-2xl p-3 overflow-hidden">
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

            {/* App Store Header */}
            <div className="absolute top-11 left-0 right-0 px-5 py-4 bg-slate-900/60 backdrop-blur-md border-b border-white/10">
              <div className="flex items-center justify-between">
                <h1 className="text-white text-2xl font-bold">App Store</h1>
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm">👤</span>
                </div>
              </div>
            </div>

            {/* App Card */}
            <div className="absolute top-28 left-4 right-4">
              <motion.div 
                className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-4 shadow-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="flex gap-4">
                  {/* App Icon */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg">
                      <span className="text-white text-3xl font-black">P</span>
                    </div>
                  </div>

                  {/* App Info */}
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-1">PlayCircle</h3>
                    <p className="text-white/70 text-xs mb-2">Find & Join Sports Games</p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-white/90 text-xs font-semibold">4.9</span>
                      <span className="text-white/50 text-xs">• 5K+ Ratings</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-white/50 text-xs">#1 Sports</span>
                      <span className="text-white/50 text-xs">• Age 12+</span>
                    </div>
                  </div>
                </div>

                {/* Download Button with Animation */}
                <motion.div 
                  className="mt-4 relative"
                  initial={{ width: "100%" }}
                >
                  <motion.button
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-full flex items-center justify-center gap-2 transition-all shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5" />
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
              <div className="flex gap-2 mt-3">
                <motion.div 
                  className="backdrop-blur-lg bg-white/5 rounded-lg border border-white/10 px-3 py-2 flex-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-white/50 text-[10px]">Chart</p>
                  <p className="text-white font-bold text-sm">#1 Sports</p>
                </motion.div>
                <motion.div 
                  className="backdrop-blur-lg bg-white/5 rounded-lg border border-white/10 px-3 py-2 flex-1"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-white/50 text-[10px]">Developer</p>
                  <p className="text-white font-bold text-sm">PlayCircle</p>
                </motion.div>
              </div>
            </div>

            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent pointer-events-none" />
          </div>

          {/* Phone notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-30 shadow-xl" />
        </div>

        {/* Fade out effect at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#0a0f14] pointer-events-none" />

        {/* Glow effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent blur-2xl" />
        </motion.div>
      </motion.div>
    </div>
  )
}

