"use client"

import { motion } from "framer-motion"
import { Mail, Lock, Eye, Sparkles, Check } from "lucide-react"

export function EnhancedLoginMockup() {
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
            rotate: [-2, 0, -2]
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
                <span className="font-semibold">12:29</span>
                <div className="flex gap-1 items-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002 2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Background gradient with floating elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-slate-900" />
              
              {/* Floating orbs */}
              <motion.div
                className="absolute top-20 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400/30 to-teal-400/30 blur-xl"
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-32 left-6 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-400/30 blur-xl"
                animate={{ y: [0, 15, 0], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />

              {/* Logo and header */}
              <div className="absolute top-16 left-0 right-0 text-center z-20 px-6">
                <motion.div 
                  className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-2xl"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full relative">
                      <div className="absolute inset-1 bg-white rounded-full" />
                    </div>
                  </div>
                </motion.div>
                
                <motion.h1 
                  className="text-white text-3xl font-bold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  PlayCircle
                </motion.h1>
                <motion.p 
                  className="text-white/70 text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Your Ultimate Sport Community
                </motion.p>
              </div>

              {/* Welcome card */}
              <motion.div 
                className="absolute top-56 left-4 right-4 bottom-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-6 shadow-2xl h-full">
                  {/* Welcome header */}
                  <div className="text-center mb-6">
                    <motion.div 
                      className="inline-flex items-center gap-2 mb-3"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Sparkles className="w-6 h-6 text-emerald-400" />
                    </motion.div>
                    <h2 className="text-white text-2xl font-bold mb-2">Welcome Back</h2>
                    <p className="text-white/70 text-sm">Sign in to connect with players and join matches</p>
                  </div>

                  {/* Form */}
                  <div className="space-y-4 mb-6">
                    {/* Email field */}
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">Email address</label>
                      <div className="relative">
                        <div className="backdrop-blur-lg bg-white/5 rounded-xl border border-white/20 px-4 py-3 flex items-center gap-3">
                          <Mail className="w-5 h-5 text-white/60" />
                          <span className="text-white/60 text-sm">Enter email to get started</span>
                        </div>
                      </div>
                    </div>

                    {/* Password field */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-white text-sm font-medium">Password</label>
                        <button className="text-emerald-400 text-sm font-medium">Forgot Password?</button>
                      </div>
                      <div className="relative">
                        <div className="backdrop-blur-lg bg-white/5 rounded-xl border border-white/20 px-4 py-3 flex items-center gap-3">
                          <Lock className="w-5 h-5 text-white/60" />
                          <span className="text-white/60 text-sm flex-1">Enter your password</span>
                          <Eye className="w-5 h-5 text-white/60" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sign in button */}
                  <motion.button
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-4 rounded-xl mb-4 shadow-lg"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(16, 185, 129, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Sign In
                  </motion.button>

                  {/* Divider */}
                  <div className="text-center text-white/50 text-sm mb-4">OR</div>

                  {/* Create account button */}
                  <motion.button
                    className="w-full backdrop-blur-lg bg-white/10 border border-white/20 text-white font-bold py-4 rounded-xl mb-6"
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Create New Account
                  </motion.button>

                  {/* Features list */}
                  <div className="space-y-3">
                    {[
                      "Find players near you",
                      "Join or create matches", 
                      "Track your stats & progress"
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 text-white/80 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-emerald-400" />
                        </div>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Terms */}
                  <p className="text-white/50 text-xs text-center mt-6">
                    By continuing, you agree to our <span className="text-emerald-400">Terms</span> and <span className="text-emerald-400">Privacy Policy</span>
                  </p>
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