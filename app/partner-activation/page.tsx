'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function PartnerActivationPage() {
  const [activationCode, setActivationCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleActivation = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Simulate activation code validation
    setTimeout(() => {
      if (activationCode.toLowerCase() === 'partner2024' || activationCode === '8891') {
        // Redirect to partner registration
        router.push('/partner-registration')
      } else {
        setError('Invalid activation code. Please check your code and try again.')
      }
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Image and Overlay Container - locked together */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            opacity: { duration: 0.8 },
            scale: { duration: 1.2 }
          }}
        >
          {/* Background Image */}
          <Image
            src="/soccer-field-aerial-view-night.jpg"
            alt="Soccer field aerial view"
            fill
            className="object-cover"
            priority
          />
          
          {/* Gradient Overlay - locked to image */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-blue-900/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.3,
              ease: "easeOut"
            }}
          />
        </motion.div>
        
        {/* Centered Content */}
        <div className="relative z-20 flex items-center justify-center w-full h-full p-12">
          <motion.div
            className="text-center text-white space-y-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Logo */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -3, -5, -3, 0, 3, 5, 3, 0],
                rotate: [0, 1, 0, -1, 0, 1, 0, -1, 0]
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.6 },
                scale: { duration: 0.8, delay: 0.6 },
                y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 20, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ 
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
            >
              <Image
                src="/logo.png"
                alt="PlayCircle Logo"
                width={120}
                height={120}
                className="drop-shadow-2xl"
              />
            </motion.div>
            
            {/* Main Title with Advanced Styling */}
            <motion.div
              className="space-y-4"
              style={{ 
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                transform: 'translate3d(0,0,0)'
              }}
              animate={{ 
                x: [0, -2, -3, -2, 0, 2, 3, 2, 0],
                y: [0, 2, 0, -2, -3, -2, 0, 2, 0]
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <h1 className="text-6xl lg:text-7xl font-black leading-none tracking-tight">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
                  PARTNER
                </span>
                <span className="block text-4xl lg:text-5xl font-light mt-2 text-white/90 tracking-wider">
                  ACTIVATION
                </span>
              </h1>
            </motion.div>
            
            {/* Subtitle with Enhanced Typography */}
            <motion.div 
              className="space-y-3"
              style={{ 
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
              animate={{ 
                x: [0, 1.5, 2, 1.5, 0, -1.5, -2, -1.5, 0],
                y: [0, -1, 0, 1, 1.5, 1, 0, -1, 0]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
              <p className="text-xl lg:text-2xl font-light text-white/90 leading-relaxed mx-auto max-w-lg">
                Enter your activation code to begin your partner journey
              </p>
              <div className="flex items-center justify-center space-x-2 text-white/70">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm font-medium tracking-widest uppercase">
                  Exclusive Access
                </span>
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Right side - Activation Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-slate-900 p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Welcome Message */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-white mb-2"
              style={{ 
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
              animate={{ 
                x: [0, 1, 1.5, 1, 0, -1, -1.5, -1, 0],
                y: [0, -1, 0, 1, 1, 1, 0, -1, 0]
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Welcome Partner!
            </motion.h2>
            <motion.p 
              className="text-slate-400"
              style={{ 
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
              animate={{ 
                x: [0, -1, -1.5, -1, 0, 1, 1.5, 1, 0],
                y: [0, 1, 0, -1, -1, -1, 0, 1, 0]
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Enter your activation code to get started
            </motion.p>
          </motion.div>

          {/* Activation Form */}
          <motion.form 
            onSubmit={handleActivation} 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ 
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
          >
            {error && (
              <motion.div
                className="p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {error}
              </motion.div>
            )}

            <motion.div 
              className="space-y-2"
              style={{ 
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
              animate={{ 
                x: [0, 0.5, 1, 0.5, 0, -0.5, -1, -0.5, 0],
                y: [0, -0.5, 0, 0.5, 0.5, 0.5, 0, -0.5, 0]
              }}
              transition={{
                duration: 13,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <label htmlFor="activationCode" className="block text-sm font-medium text-white">
                Activation Code
              </label>
              <input
                id="activationCode"
                type="text"
                value={activationCode}
                onChange={(e) => setActivationCode(e.target.value)}
                placeholder="Enter your activation code"
                required
                disabled={loading}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 text-center text-lg font-mono tracking-wider"
              />
              <p className="text-xs text-slate-500 text-center">
                Code is case-sensitive and provided by PlayCircle
              </p>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Validating...
                </>
              ) : (
                'ACTIVATE & CONTINUE'
              )}
            </motion.button>
          </motion.form>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={{ 
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
          >
            <motion.p 
              className="text-sm text-slate-400"
              animate={{ 
                x: [0, 0.5, 1, 0.5, 0, -0.5, -1, -0.5, 0],
                y: [0, -0.5, 0, 0.5, 0.5, 0.5, 0, -0.5, 0]
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Already have an account?{' '}
              <a
                href="/partner-login"
                className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                Sign in here
              </a>
            </motion.p>
          </motion.div>

          {/* Info Box */}
          <motion.div
            className="mt-6 p-4 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            style={{ 
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
          >
            <motion.div
              animate={{ 
                x: [0, 1, 1.5, 1, 0, -1, -1.5, -1, 0],
                y: [0, -0.5, 0, 0.5, 0.5, 0.5, 0, -0.5, 0]
              }}
              transition={{
                duration: 13,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="flex items-center justify-center mb-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Demo Access
              </div>
              <p>
                Use code <span className="font-mono font-bold">PARTNER2024</span> or <span className="font-mono font-bold">8891</span> for demo access
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}