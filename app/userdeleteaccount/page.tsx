"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useState } from "react"

export default function UserDeleteAccountPage() {
  const [step, setStep] = useState(1)
  const [confirmText, setConfirmText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleDeleteAccount = async () => {
    if (confirmText !== "DELETE MY ACCOUNT") {
      return
    }
    
    setIsDeleting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsDeleting(false)
      setShowSuccess(true)
    }, 3000)
  }

  return (
    <div className="min-h-screen overscroll-none overflow-x-hidden" style={{ background: '#050a0f' }}>
      <Header />

      <main className="overscroll-none overflow-x-hidden relative">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-[60vh] flex items-center">
          {/* Background image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/Backgrounddark1.png')",
            }}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.3, 
              ease: "easeOut"
            }}
          />
          
          {/* Background gradient overlay */}
          <motion.div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(5, 10, 15, 0.8) 70%, rgba(5, 10, 15, 1) 100%)'
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.3,
              ease: "easeOut"
            }}
          />

          {/* Decorative background elements */}
          <motion.div
            className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ background: '#dc2626' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 0.05,
              scale: 1,
              x: [0, -30, 0, 30, 0],
              y: [0, 40, 0, -40, 0]
            }}
            transition={{
              opacity: { duration: 1.5, delay: 0.5 },
              scale: { duration: 1.5, delay: 0.5 },
              x: { duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 },
              y: { duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }
            }}
          />

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
            {/* Header Section */}
            <motion.div 
              className="text-center max-w-4xl xl:max-w-5xl mx-auto"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Delete{" "}
                <motion.span 
                  style={{ 
                    color: '#dc2626',
                    display: 'inline-block',
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    transform: 'translate3d(0,0,0)'
                  }}
                  animate={{ 
                    x: [0, 2, 3, 2, 0, -2, -3, -2, 0],
                    y: [0, -2, 0, 2, 3, 2, 0, -2, 0]
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  Account
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                We're sorry to see you go. This action cannot be undone.
              </motion.p>
            </motion.div>
          </div>

          {/* Animated Scroll Indicator */}
          <motion.div 
            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative"
              whileHover={{ borderColor: 'rgba(220, 38, 38, 0.8)' }}
            >
              <motion.div
                className="w-1 h-3 rounded-full mt-2"
                style={{ backgroundColor: '#dc2626' }}
                animate={{
                  y: [0, 12, 0],
                  opacity: [1, 0.3, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            <motion.div
              className="mt-2"
              animate={{ 
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg 
                className="w-4 h-4 text-white/60" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* Content Section */}
        <section className="relative" style={{ background: '#050a0f' }}>
          {/* Account Deletion Process */}
          <section className="py-16 sm:py-24 lg:py-32 px-4 relative overflow-hidden" style={{ background: '#050a0f' }}>
            <motion.div
              className="absolute top-1/4 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
              style={{ background: '#dc2626' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 0.05,
                scale: 1,
                x: [0, 50, 0, -50, 0],
                y: [0, -30, 0, 30, 0]
              }}
              transition={{
                opacity: { duration: 1.5, delay: 1 },
                scale: { duration: 1.5, delay: 1 },
                x: { duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
                y: { duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2.5 }
              }}
            />

            <div className="max-w-4xl mx-auto relative z-10">
              {!showSuccess ? (
                <div className="space-y-12 sm:space-y-16">
                  {/* What happens when you delete */}
                  <motion.div
                    className="rounded-3xl p-8 sm:p-12 backdrop-blur-md"
                    style={{
                      background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.12) 0%, rgba(13, 18, 22, 0.8) 100%)',
                      border: '1px solid rgba(220, 38, 38, 0.25)',
                      boxShadow: '0 0 30px rgba(220, 38, 38, 0.08)'
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.h2 
                      className="text-2xl sm:text-3xl font-bold text-white mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      What happens when you delete your account?
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                          <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Data Permanently Deleted
                        </h3>
                        <ul className="text-gray-300 space-y-2">
                          <li>• Your profile and personal information</li>
                          <li>• Game history and statistics</li>
                          <li>• Messages and communications</li>
                          <li>• Payment information and receipts</li>
                          <li>• Friend connections and social data</li>
                        </ul>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                          <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                          Cannot Be Recovered
                        </h3>
                        <ul className="text-gray-300 space-y-2">
                          <li>• This action is permanent and irreversible</li>
                          <li>• You'll lose access to premium features</li>
                          <li>• Active game bookings will be cancelled</li>
                          <li>• You'll need to create a new account to return</li>
                          <li>• All achievements and progress will be lost</li>
                        </ul>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Alternatives */}
                  <motion.div
                    className="rounded-3xl p-8 sm:p-12 backdrop-blur-md"
                    style={{
                      background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.12) 0%, rgba(13, 18, 22, 0.8) 100%)',
                      border: '1px solid rgba(69, 104, 130, 0.25)',
                      boxShadow: '0 0 30px rgba(69, 104, 130, 0.08)'
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.h2 
                      className="text-2xl sm:text-3xl font-bold text-white mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Consider these alternatives
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-6">
                      <motion.div
                        className="text-center p-6 rounded-2xl"
                        style={{
                          background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.1) 0%, rgba(13, 18, 22, 0.5) 100%)',
                          border: '1px solid rgba(69, 104, 130, 0.2)'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Deactivate Account</h3>
                        <p className="text-gray-300 text-sm">Temporarily disable your account without losing data</p>
                      </motion.div>

                      <motion.div
                        className="text-center p-6 rounded-2xl"
                        style={{
                          background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.1) 0%, rgba(13, 18, 22, 0.5) 100%)',
                          border: '1px solid rgba(69, 104, 130, 0.2)'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                          <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Update Settings</h3>
                        <p className="text-gray-300 text-sm">Adjust privacy and notification preferences</p>
                      </motion.div>

                      <motion.div
                        className="text-center p-6 rounded-2xl"
                        style={{
                          background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.1) 0%, rgba(13, 18, 22, 0.5) 100%)',
                          border: '1px solid rgba(69, 104, 130, 0.2)'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Contact Support</h3>
                        <p className="text-gray-300 text-sm">Talk to our team about your concerns</p>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Deletion Process */}
                  <motion.div
                    className="rounded-3xl p-8 sm:p-12 backdrop-blur-md"
                    style={{
                      background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(13, 18, 22, 0.8) 100%)',
                      border: '1px solid rgba(220, 38, 38, 0.3)',
                      boxShadow: '0 0 40px rgba(220, 38, 38, 0.1)'
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <motion.h2 
                      className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Delete Your Account
                    </motion.h2>

                    <div className="max-w-md mx-auto">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <p className="text-gray-300 text-center mb-6">
                          To confirm deletion, type <span className="font-bold text-red-400">"DELETE MY ACCOUNT"</span> below:
                        </p>
                        
                        <input
                          type="text"
                          value={confirmText}
                          onChange={(e) => setConfirmText(e.target.value)}
                          placeholder="Type confirmation text here"
                          className="w-full p-4 rounded-xl bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 mb-6"
                        />

                        <motion.button
                          onClick={handleDeleteAccount}
                          disabled={confirmText !== "DELETE MY ACCOUNT" || isDeleting}
                          className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${
                            confirmText === "DELETE MY ACCOUNT" && !isDeleting
                              ? 'bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-red-500/25'
                              : 'bg-gray-600 cursor-not-allowed opacity-50'
                          }`}
                          whileHover={confirmText === "DELETE MY ACCOUNT" && !isDeleting ? { scale: 1.02 } : {}}
                          whileTap={confirmText === "DELETE MY ACCOUNT" && !isDeleting ? { scale: 0.98 } : {}}
                        >
                          {isDeleting ? (
                            <div className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Deleting Account...
                            </div>
                          ) : (
                            'Delete My Account Forever'
                          )}
                        </motion.button>

                        <p className="text-xs text-gray-400 text-center mt-4">
                          This action cannot be undone. All your data will be permanently deleted.
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              ) : (
                /* Success Message */
                <motion.div
                  className="rounded-3xl p-8 sm:p-12 backdrop-blur-md text-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(13, 18, 22, 0.8) 100%)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    boxShadow: '0 0 40px rgba(34, 197, 94, 0.1)'
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  
                  <motion.h2 
                    className="text-3xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Account Deleted Successfully
                  </motion.h2>
                  
                  <motion.p 
                    className="text-gray-300 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    Your PlayCircle account and all associated data have been permanently deleted. 
                    Thank you for being part of our community.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <a
                      href="/"
                      className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-300"
                    >
                      Return to Homepage
                    </a>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  )
}