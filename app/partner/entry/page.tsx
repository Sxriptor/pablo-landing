'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

export default function PartnerEntryPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [fullName, setFullName] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Dev bypass code
    if (password === '8891') {
      setTimeout(() => {
        // Redirect to the partner dashboard
        window.location.href = '/partner/dashboard'
        setLoading(false)
      }, 1000)
      return
    }

    // For now, show a message about the partner dashboard being in development
    setTimeout(() => {
      setError('Partner Dashboard is currently in development. Please check back soon! (Use code 8891 for demo)')
      setLoading(false)
    }, 1000)
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Validate password match
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    // For now, show a message about signup being in development
    setTimeout(() => {
      setError('Partner sign up is currently in development. Please check back soon!')
      setLoading(false)
    }, 1000)
  }

  const switchToSignUp = () => {
    setIsSignUp(true)
    setError('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setCompanyName('')
    setFullName('')
  }

  const switchToSignIn = () => {
    setIsSignUp(false)
    setError('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setCompanyName('')
    setFullName('')
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
                  PLAYCIRCLE
                </span>
                <span className="block text-4xl lg:text-5xl font-light mt-2 text-white/90 tracking-wider">
                  PARTNER DASHBOARD
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
                Manage your venues, events, and connect with players in your community
              </p>
              <div className="flex items-center justify-center space-x-2 text-white/70">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-sm font-medium tracking-widest uppercase">
                  Professional Dashboard
                </span>
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-slate-900 p-8 relative">
        {/* Back Arrow Button */}
        <motion.button
          onClick={() => window.location.href = '/partners'}
          className="absolute top-8 left-8 text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ x: -4 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </motion.button>

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
              {isSignUp ? 'Create Your Account' : 'Nice to see you!'}
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
              {isSignUp ? 'Join PlayCircle as a partner' : 'Enter your email and password to sign in'}
            </motion.p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={isSignUp ? handleSignUp : handleSignIn}
            className="space-y-6"
            key={isSignUp ? 'signup' : 'signin'}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
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

            {isSignUp && (
              <>
                <motion.div className="space-y-2">
                  <label htmlFor="fullName" className="block text-sm font-medium text-white">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your full name"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
                  />
                </motion.div>

                <motion.div className="space-y-2">
                  <label htmlFor="companyName" className="block text-sm font-medium text-white">
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Your company name"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
                  />
                </motion.div>
              </>
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
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                disabled={loading}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
              />
            </motion.div>

            <motion.div
              className="space-y-2"
              style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
              animate={{
                x: [0, -0.5, -1, -0.5, 0, 0.5, 1, 0.5, 0],
                y: [0, 0.5, 0, -0.5, -0.5, -0.5, 0, 0.5, 0]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                required
                disabled={loading}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
              />
            </motion.div>

            {isSignUp && (
              <motion.div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
                />
              </motion.div>
            )}

            {!isSignUp && (
              <motion.div
                className="flex items-center"
                style={{
                  willChange: 'transform',
                  backfaceVisibility: 'hidden'
                }}
                animate={{
                  x: [0, 1, 1.5, 1, 0, -1, -1.5, -1, 0],
                  y: [0, -0.5, 0, 0.5, 0.5, 0.5, 0, -0.5, 0]
                }}
                transition={{
                  duration: 17,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-700 rounded bg-slate-800"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-slate-300">
                  Remember me
                </label>
              </motion.div>
            )}

            <motion.button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  {isSignUp ? 'Creating Account...' : 'Signing In...'}
                </>
              ) : (
                isSignUp ? 'CREATE ACCOUNT' : 'SIGN IN'
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
              {isSignUp ? (
                <>
                  Already have an account?{' '}
                  <button
                    onClick={switchToSignIn}
                    className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Sign In
                  </button>
                </>
              ) : (
                <>
                  Don't have an account?{' '}
                  <button
                    onClick={switchToSignUp}
                    className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </motion.p>
          </motion.div>

          {/* Footer */}
          <motion.div 
            className="text-center text-xs text-slate-500 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            style={{ 
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
          >
            <motion.p
              animate={{ 
                x: [0, -0.5, -1, -0.5, 0, 0.5, 1, 0.5, 0],
                y: [0, 0.5, 0, -0.5, -0.5, -0.5, 0, 0.5, 0]
              }}
              transition={{
                duration: 19,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              © 2024 • Made with ❤️ by PlayCircle • Creative Tim for a better web
            </motion.p>
          </motion.div>

          {/* Development Notice - Only for Sign In */}
          {!isSignUp && (
            <motion.div
              className="mt-6 p-3 rounded-lg bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 text-xs text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
            >
              <motion.p
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
                Development Notice: Use code 8891 for demo access
              </motion.p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}