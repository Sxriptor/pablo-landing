"use client"

import { Header } from "@/components/header"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Mail, MessageSquare, Phone, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
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
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut",
              opacity: { duration: 0.8 },
              scale: { duration: 1.2 }
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
              duration: 1,
              delay: 0.3,
              ease: "easeOut"
            }}
          />

          {/* Decorative background elements */}
          <motion.div
            className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ background: '#456882' }}
            animate={{ 
              x: [0, -30, 0, 30, 0],
              y: [0, 40, 0, -40, 0],
              scale: [1, 1.1, 1, 0.9, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
            {/* Header Section */}
            <motion.div 
              className="text-center max-w-4xl xl:max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Let's{" "}
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
                  Connect
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Have questions? Want to partner with us? We're here to help.
                <br className="hidden sm:block" />
                Reach out and let's make something great together.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative py-12 sm:py-16 lg:py-20" style={{ background: '#050a0f' }}>
          {/* Decorative background elements */}
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ background: '#456882' }}
            animate={{ 
              x: [0, 50, 0, -50, 0],
              y: [0, -30, 0, 30, 0],
              scale: [1, 0.9, 1, 1.1, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 max-w-7xl xl:max-w-8xl mx-auto mb-12 lg:mb-16 xl:mb-20">
              {/* Contact Cards */}
              <motion.div
                className="rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 backdrop-blur-md text-center group"
                style={{
                  background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.15) 0%, rgba(13, 18, 22, 0.8) 100%)',
                  border: '1px solid rgba(69, 104, 130, 0.3)',
                  boxShadow: '0 0 20px rgba(69, 104, 130, 0.1)'
                }}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: '0 0 40px rgba(69, 104, 130, 0.2)'
                }}
              >
                <motion.div
                  className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6"
                  style={{ background: 'rgba(69, 104, 130, 0.2)' }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Mail className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10" style={{ color: '#456882' }} />
                </motion.div>
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-white mb-2 lg:mb-3">Email Us</h3>
                <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-3 lg:mb-4">Drop us a line anytime</p>
                <motion.a
                  href="mailto:hello@playcircle.com"
                  className="text-sm sm:text-base lg:text-lg hover:underline break-all"
                  style={{ color: '#456882' }}
                  whileHover={{ scale: 1.05 }}
                >
                  hello@playcircle.com
                </motion.a>
              </motion.div>

              <motion.div
                className="rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 backdrop-blur-md text-center group"
                style={{
                  background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.15) 0%, rgba(13, 18, 22, 0.8) 100%)',
                  border: '1px solid rgba(69, 104, 130, 0.3)',
                  boxShadow: '0 0 20px rgba(69, 104, 130, 0.1)'
                }}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: '0 0 40px rgba(69, 104, 130, 0.2)'
                }}
              >
                <motion.div
                  className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6"
                  style={{ background: 'rgba(69, 104, 130, 0.2)' }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Phone className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10" style={{ color: '#456882' }} />
                </motion.div>
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-white mb-2 lg:mb-3">Call Us</h3>
                <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-3 lg:mb-4">Mon-Fri from 9am to 6pm</p>
                <motion.a
                  href="tel:+1234567890"
                  className="text-sm sm:text-base lg:text-lg hover:underline"
                  style={{ color: '#456882' }}
                  whileHover={{ scale: 1.05 }}
                >
                  +1 (234) 567-890
                </motion.a>
              </motion.div>

              <motion.div
                className="rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 backdrop-blur-md text-center group sm:col-span-2 lg:col-span-1"
                style={{
                  background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.15) 0%, rgba(13, 18, 22, 0.8) 100%)',
                  border: '1px solid rgba(69, 104, 130, 0.3)',
                  boxShadow: '0 0 20px rgba(69, 104, 130, 0.1)'
                }}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: '0 0 40px rgba(69, 104, 130, 0.2)'
                }}
              >
                <motion.div
                  className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6"
                  style={{ background: 'rgba(69, 104, 130, 0.2)' }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Users className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10" style={{ color: '#456882' }} />
                </motion.div>
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-white mb-2 lg:mb-3">Join Our Community</h3>
                <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-3 lg:mb-4">Connect with players worldwide</p>
                <motion.p 
                  className="text-sm sm:text-base lg:text-lg" 
                  style={{ color: '#456882' }}
                  whileHover={{ scale: 1.05 }}
                >
                  Download the app today
                </motion.p>
              </motion.div>
            </div>

            {/* Form Section */}
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <MessageSquare className="w-6 h-6" style={{ color: '#456882' }} />
                  </motion.div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Send us a message</h2>
                </div>
                <p className="text-gray-400">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <ContactForm />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}