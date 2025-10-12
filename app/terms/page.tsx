"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function TermsPage() {
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
            className="absolute top-20 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ background: '#456882' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 0.05,
              scale: 1,
              x: [0, 30, 0, -30, 0],
              y: [0, -40, 0, 40, 0]
            }}
            transition={{
              opacity: { duration: 1.5, delay: 0.7 },
              scale: { duration: 1.5, delay: 0.7 },
              x: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2.2 },
              y: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2.2 }
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
                Terms of{" "}
                <motion.span 
                  style={{ 
                    color: '#456882',
                    display: 'inline-block',
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    transform: 'translate3d(0,0,0)'
                  }}
                  animate={{ 
                    x: [0, -2, -3, -2, 0, 2, 3, 2, 0],
                    y: [0, 2, 0, -2, -3, -2, 0, 2, 0]
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  Service
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Please read these terms carefully before using PlayCircle services.
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
              whileHover={{ borderColor: 'rgba(69, 104, 130, 0.8)' }}
            >
              <motion.div
                className="w-1 h-3 rounded-full mt-2"
                style={{ backgroundColor: '#456882' }}
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
          {/* Terms of Service Content */}
          <section className="py-16 sm:py-24 lg:py-32 px-4 relative overflow-hidden" style={{ background: '#050a0f' }}>
            <motion.div
              className="absolute top-1/3 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
              style={{ background: '#456882' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 0.05,
                scale: 1,
                x: [0, -40, 0, 40, 0],
                y: [0, 30, 0, -30, 0]
              }}
              transition={{
                opacity: { duration: 1.5, delay: 1.2 },
                scale: { duration: 1.5, delay: 1.2 },
                x: { duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2.7 },
                y: { duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2.7 }
              }}
            />

            <div className="max-w-4xl mx-auto relative z-10">
              <div className="space-y-12 sm:space-y-16">
                {/* Acceptance and Service Description */}
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
                  transition={{ duration: 0.8 }}
                >
                  <motion.h2 
                    className="text-2xl sm:text-3xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Acceptance of Terms
                  </motion.h2>
                  <motion.p 
                    className="text-gray-300 leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    By accessing and using PlayCircle's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </motion.p>

                  <motion.h3 
                    className="text-xl sm:text-2xl font-semibold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Description of Service
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 leading-relaxed mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    PlayCircle is a platform that connects sports enthusiasts with games, facilities, and other players. Our services include:
                  </motion.p>
                  <motion.div 
                    className="grid sm:grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <ul className="text-gray-300 space-y-2">
                      <li>• Game discovery and booking</li>
                      <li>• Player profile management</li>
                      <li>• Facility partnerships</li>
                    </ul>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Community features and social interactions</li>
                      <li>• Mobile and web applications</li>
                      <li>• Tournament organization</li>
                    </ul>
                  </motion.div>
                </motion.div>

                {/* User Accounts and Conduct */}
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    className="rounded-3xl p-8 backdrop-blur-md"
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
                      className="text-xl sm:text-2xl font-bold text-white mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      User Accounts
                    </motion.h2>
                    <motion.p 
                      className="text-gray-300 leading-relaxed mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      To use certain features of our service, you must register for an account. You agree to:
                    </motion.p>
                    <motion.ul 
                      className="text-gray-300 space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <li>• Provide accurate and complete information</li>
                      <li>• Maintain the security of your account</li>
                      <li>• Accept responsibility for all activities</li>
                      <li>• Notify us of unauthorized use</li>
                    </motion.ul>
                  </motion.div>

                  <motion.div
                    className="rounded-3xl p-8 backdrop-blur-md"
                    style={{
                      background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.12) 0%, rgba(13, 18, 22, 0.8) 100%)',
                      border: '1px solid rgba(69, 104, 130, 0.25)',
                      boxShadow: '0 0 30px rgba(69, 104, 130, 0.08)'
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <motion.h2 
                      className="text-xl sm:text-2xl font-bold text-white mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      User Conduct
                    </motion.h2>
                    <motion.p 
                      className="text-gray-300 leading-relaxed mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      You agree not to use the service to:
                    </motion.p>
                    <motion.ul 
                      className="text-gray-300 space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <li>• Violate any laws or regulations</li>
                      <li>• Transmit harmful or abusive material</li>
                      <li>• Interfere with or disrupt the service</li>
                      <li>• Gain unauthorized access to systems</li>
                    </motion.ul>
                  </motion.div>
                </div>

                {/* Intellectual Property and Payment */}
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
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h3 className="text-xl font-semibold text-white mb-3">Intellectual Property</h3>
                      <p className="text-gray-300 leading-relaxed">
                        The service and its original content, features, and functionality are and will remain the exclusive property of PlayCircle and its licensors. The service is protected by copyright, trademark, and other laws.
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold text-white mb-3">Payment and Billing</h3>
                      <p className="text-gray-300 leading-relaxed mb-3">
                        Some features require payment. By purchasing premium features, you agree to:
                      </p>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Pay all fees associated with your account</li>
                        <li>• Provide valid payment information</li>
                        <li>• Automatic renewal unless cancelled</li>
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Liability and Legal */}
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
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.h2 
                    className="text-2xl sm:text-3xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Disclaimers and Limitation of Liability
                  </motion.h2>
                  <motion.p 
                    className="text-gray-300 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    The information on this service is provided on an 'as is' basis. To the fullest extent permitted by law, PlayCircle:
                  </motion.p>
                  <motion.div 
                    className="grid sm:grid-cols-2 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <ul className="text-gray-300 space-y-2">
                      <li>• Excludes all representations and warranties</li>
                      <li>• Is not liable for indirect or consequential losses</li>
                    </ul>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Limits liability to the amount paid for service</li>
                      <li>• Does not guarantee continuous, uninterrupted access</li>
                    </ul>
                  </motion.div>
                </motion.div>

                {/* Termination and Governing Law */}
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    className="rounded-3xl p-8 backdrop-blur-md"
                    style={{
                      background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.12) 0%, rgba(13, 18, 22, 0.8) 100%)',
                      border: '1px solid rgba(69, 104, 130, 0.25)',
                      boxShadow: '0 0 30px rgba(69, 104, 130, 0.08)'
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <motion.h3 
                      className="text-xl font-semibold text-white mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Termination
                    </motion.h3>
                    <motion.p 
                      className="text-gray-300 leading-relaxed mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      We may terminate or suspend your account and access to the service immediately, without prior notice, for any reason whatsoever, including breach of these terms.
                    </motion.p>
                    <motion.h4 
                      className="text-lg font-semibold text-white mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      Indemnification
                    </motion.h4>
                    <motion.p 
                      className="text-gray-300 leading-relaxed text-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      You agree to indemnify and hold harmless PlayCircle from any claims arising from your use of the service.
                    </motion.p>
                  </motion.div>

                  <motion.div
                    className="rounded-3xl p-8 backdrop-blur-md"
                    style={{
                      background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.12) 0%, rgba(13, 18, 22, 0.8) 100%)',
                      border: '1px solid rgba(69, 104, 130, 0.25)',
                      boxShadow: '0 0 30px rgba(69, 104, 130, 0.08)'
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <motion.h3 
                      className="text-xl font-semibold text-white mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Governing Law
                    </motion.h3>
                    <motion.p 
                      className="text-gray-300 leading-relaxed mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      These terms shall be interpreted and governed by the laws of [Your Jurisdiction], without regard to conflict of law provisions.
                    </motion.p>
                    <motion.h4 
                      className="text-lg font-semibold text-white mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      Changes to Terms
                    </motion.h4>
                    <motion.p 
                      className="text-gray-300 leading-relaxed text-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      We reserve the right to modify these terms at any time with 30 days notice for material changes.
                    </motion.p>
                  </motion.div>
                </div>

                {/* Contact Information */}
                <motion.div
                  className="rounded-3xl p-8 sm:p-12 backdrop-blur-md text-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.15) 0%, rgba(13, 18, 22, 0.8) 100%)',
                    border: '1px solid rgba(69, 104, 130, 0.3)',
                    boxShadow: '0 0 40px rgba(69, 104, 130, 0.1)'
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <motion.h2 
                    className="text-2xl sm:text-3xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Contact Information
                  </motion.h2>
                  <motion.p 
                    className="text-gray-300 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    If you have any questions about these Terms of Service, please contact us at:
                  </motion.p>
                  <motion.div 
                    className="text-gray-300 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <p className="mb-2">Email: legal@playcircle.com</p>
                    <p>Address: PlayCircle Inc., [Your Address]</p>
                  </motion.div>

                  <motion.div 
                    className="text-sm text-gray-400 pt-8 border-t border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <p>Last Updated: {new Date().toLocaleDateString()}</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  )
}
