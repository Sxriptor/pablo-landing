'use client'

import { useState } from 'react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function PartnerLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Dev bypass code
    if (password === '8891') {
      setTimeout(() => {
        // Redirect to the partner dashboard demo
        window.open('/partner-demo', '_blank')
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

  return (
    <div className="min-h-screen overscroll-none overflow-x-hidden" style={{ background: '#050a0f' }}>
      <Header />

      <main className="overscroll-none overflow-x-hidden relative">
        {/* Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Backgrounddark1.png')",
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut"
          }}
        />
        
        {/* Background gradient overlay */}
        <motion.div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(5, 10, 15, 0.8) 70%, rgba(5, 10, 15, 1) 100%)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut"
          }}
        />

        {/* Login Section */}
        <section className="relative z-10 min-h-screen flex items-center justify-center py-16 px-4">
          <div className="max-w-md w-full">
            {/* Header */}
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                PlayCircle Partner Dashboard
              </h1>
              <p className="text-gray-300">
                Sign in to manage your venues and events
              </p>
            </motion.div>

            {/* Login Form */}
            <motion.div
              className="rounded-3xl p-8 backdrop-blur-md"
              style={{
                background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.15) 0%, rgba(13, 18, 22, 0.8) 100%)',
                border: '1px solid rgba(69, 104, 130, 0.3)',
                boxShadow: '0 0 40px rgba(69, 104, 130, 0.1)'
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <form onSubmit={handleSignIn} className="space-y-6">
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

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="partner@example.com"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-600 text-white placeholder-gray-400 focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-600 text-white placeholder-gray-400 focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-colors disabled:opacity-50"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg text-white font-semibold flex items-center justify-center"
                  style={{ backgroundColor: '#456882' }}
                  disabled={loading}
                  whileHover={{ 
                    scale: loading ? 1 : 1.02,
                    boxShadow: loading ? 'none' : '0 10px 30px rgba(69, 104, 130, 0.3)'
                  }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Signing In...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </motion.button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  Don't have partner access?{' '}
                  <a
                    href="/partners"
                    className="font-medium hover:underline"
                    style={{ color: '#456882' }}
                  >
                    Apply for partnership
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Development Notice */}
            <motion.div
              className="mt-8 p-4 rounded-lg bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 text-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="flex items-center justify-center mb-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                Development Notice
              </div>
              <p>
                The Partner Dashboard is currently under development. 
                <br />
                Full functionality will be available soon!
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}