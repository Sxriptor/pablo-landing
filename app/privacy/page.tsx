"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function PrivacyPage() {
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
            style={{ background: '#456882' }}
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
                Privacy{" "}
                <motion.span 
                  style={{ 
                    color: '#456882',
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
                  Policy
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Your privacy is important to us. Learn how we protect and use your information.
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
          {/* Privacy Policy Content */}
          <section className="py-16 sm:py-24 lg:py-32 px-4 relative overflow-hidden" style={{ background: '#050a0f' }}>
            <motion.div
              className="absolute top-1/4 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
              style={{ background: '#456882' }}
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
              <div className="space-y-12 sm:space-y-16">
                {/* Information We Collect */}
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
                    Information We Collect
                  </motion.h2>
                  <motion.p 
                    className="text-gray-300 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    We collect information you provide directly to us, such as when you create an account, update your profile, make a purchase, participate in a game, or contact us for support.
                  </motion.p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
                      <ul className="text-gray-300 space-y-2">
                        <li>• Name and contact information</li>
                        <li>• Profile information and preferences</li>
                        <li>• Payment information for premium features</li>
                        <li>• Communication preferences</li>
                      </ul>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <h3 className="text-xl font-semibold text-white mb-3">Usage Information</h3>
                      <ul className="text-gray-300 space-y-2">
                        <li>• Device information and browser type</li>
                        <li>• App usage statistics and interactions</li>
                        <li>• Location data for location-based features</li>
                        <li>• Game participation and performance data</li>
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>

                {/* How We Use Your Information */}
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
                    How We Use Your Information
                  </motion.h2>
                  <motion.p 
                    className="text-gray-300 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    We use the information we collect to:
                  </motion.p>
                  <motion.div 
                    className="grid sm:grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <ul className="text-gray-300 space-y-2">
                      <li>• Provide, maintain, and improve our services</li>
                      <li>• Process transactions and send related information</li>
                      <li>• Send technical notices, updates, and support messages</li>
                    </ul>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Respond to your comments and questions</li>
                      <li>• Communicate about products, services, and events</li>
                      <li>• Monitor and analyze trends, usage, and activities</li>
                    </ul>
                  </motion.div>
                </motion.div>

                {/* Information Sharing */}
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
                  <motion.h2 
                    className="text-2xl sm:text-3xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Information Sharing and Disclosure
                  </motion.h2>
                  <motion.p 
                    className="text-gray-300 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                  </motion.p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <h3 className="text-xl font-semibold text-white mb-3">Service Providers</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We may share your information with trusted third-party service providers who assist us in operating our platform, such as payment processors, analytics providers, and hosting services.
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <h3 className="text-xl font-semibold text-white mb-3">Legal Requirements</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We may disclose your information if required by law or if we believe such action is necessary to comply with legal process or protect the rights, property, or safety of PlayCircle, our users, or others.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Your Rights and Security */}
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
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <motion.h2 
                      className="text-xl sm:text-2xl font-bold text-white mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Your Rights and Choices
                    </motion.h2>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <p className="text-gray-300 leading-relaxed mb-4">You have the right to:</p>
                      <ul className="text-gray-300 space-y-2">
                        <li>• Access and update your personal information</li>
                        <li>• Delete your account and associated data</li>
                        <li>• Opt out of marketing communications</li>
                        <li>• Request data portability</li>
                      </ul>
                    </motion.div>
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
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <motion.h2 
                      className="text-xl sm:text-2xl font-bold text-white mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Data Security
                    </motion.h2>
                    <motion.p 
                      className="text-gray-300 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </motion.p>
                  </motion.div>
                </div>

                {/* Additional Policies */}
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
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h3 className="text-xl font-semibold text-white mb-3">Children's Privacy</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold text-white mb-3">Changes to This Policy</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date below.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

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
                    Contact Us
                  </motion.h2>
                  <motion.p 
                    className="text-gray-300 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    If you have any questions about this Privacy Policy, please contact us at:
                  </motion.p>
                  <motion.div 
                    className="text-gray-300 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <p className="mb-2">Email: privacy@playcircle.com</p>
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
