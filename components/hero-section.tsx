"use client"

import { Star } from "lucide-react"
import { PhoneMockupTriple } from "./phone-mockup-dual"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative pt-16 pb-2 sm:pt-20 sm:pb-12 lg:pt-12 lg:pb-20 px-2 lg:px-12 overflow-x-hidden min-h-screen flex items-center sm:items-center lg:items-end" style={{ transform: 'translateY(-2vh)' }}>
      <style jsx>{`
        @media (min-width: 1024px) {
          section {
            transform: none !important;
          }
        }
      `}</style>
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
      {/* Background gradient overlay - fade to black at bottom */}
      <motion.div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 1) 100%)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 1,
          delay: 0.3,
          ease: "easeOut"
        }}
      />

      {/* Phone mockups - positioned absolutely on desktop */}
      <div className="hidden lg:block absolute right-32 top-1/2 -translate-y-1/2 z-20">
        <PhoneMockupTriple />
      </div>

      <div className="relative z-10 w-full pb-2 sm:pb-8 lg:pb-12 mt-0 sm:mt-0 lg:mt-0">
        <div className="grid lg:grid-cols-1 gap-3 lg:gap-12 items-start lg:items-end">
          <div className="space-y-1 sm:space-y-4 lg:space-y-6 flex flex-col justify-start sm:justify-end items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ willChange: 'opacity, transform' }}
            >
              <motion.span 
                style={{ 
                  color: '#456882',
                  display: 'inline-block',
                  willChange: 'transform',
                  backfaceVisibility: 'hidden',
                  transform: 'translate3d(0,0,0)'
                }}
                animate={{ 
                  x: [0, 3, 4, 3, 0, -3, -4, -3, 0],
                  y: [0, -3, 0, 3, 4, 3, 0, -3, 0]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Play Sports
              </motion.span>
              <br />
              <motion.span
                className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl inline-block"
                style={{ 
                  color: 'white',
                  willChange: 'transform',
                  backfaceVisibility: 'hidden',
                  transform: 'translate3d(0,0,0)'
                }}
                animate={{ 
                  x: [0, -3, -4, -3, 0, 3, 4, 3, 0],
                  y: [0, 3, 0, -3, -4, -3, 0, 3, 0]
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Anytime, Anywhere
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xs sm:text-base lg:text-lg text-white max-w-md text-pretty px-4 lg:px-0 leading-tight"
              style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1,
                y: 0,
                x: [0, 1.5, 2, 1.5, 0, -1.5, -2, -1.5, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.2 },
                y: { duration: 0.6, delay: 0.2 },
                x: {
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              Find a game near you, connect with players, and experience sports like never before.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-1.5 sm:gap-3 justify-center lg:justify-start px-2 lg:px-0"
              style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1,
                y: 0,
                x: [0, 2, 3, 2, 0, -2, -3, -2, 0]
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.3 },
                y: { duration: 0.6, delay: 0.3 },
                x: {
                  duration: 16,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <a href="#" className="inline-block">
                <motion.div 
                  className="bg-card border border-border rounded-lg px-2.5 sm:px-4 py-1 sm:py-2 flex items-center gap-1.5 hover:bg-card/80 transition-colors"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Download on the</div>
                    <div className="text-xs sm:text-sm font-semibold">App Store</div>
                  </div>
                </motion.div>
              </a>
              <a href="#" className="inline-block">
                <motion.div 
                  className="bg-card border border-border rounded-lg px-2.5 sm:px-4 py-1 sm:py-2 flex items-center gap-1.5 hover:bg-card/80 transition-colors"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] sm:text-xs text-muted-foreground">GET IT ON</div>
                    <div className="text-xs sm:text-sm font-semibold">Google Play</div>
                  </div>
                </motion.div>
              </a>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 sm:gap-4 pt-0.5 sm:pt-2 justify-center lg:justify-start"
              style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1,
                y: 0,
                x: [0, 2, 3, 2, 0, -2, -3, -2, 0]
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.4 },
                y: { duration: 0.6, delay: 0.4 },
                x: {
                  duration: 14,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <div className="flex -space-x-2 scale-75 sm:scale-100">
                {[
                  '/soccer-player-testimonial.jpg',
                  '/female-soccer-player.png',
                  '/soccer-player-action.jpg',
                  '/soccer-players-on-field.jpg'
                ].map((image, i) => (
                  <motion.div
                    key={i}
                    className="w-7 h-7 sm:w-10 sm:h-10 rounded-full border-2 border-background overflow-hidden"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.3, ease: "easeOut" }}
                    whileHover={{ scale: 1.15, zIndex: 10 }}
                    style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
                  >
                    <img
                      src={image}
                      alt={`Player ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="text-xs sm:text-base">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: 0.7 + i * 0.05, 
                        duration: 0.4,
                        ease: "easeOut"
                      }}
                      style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
                    >
                      <Star className="w-2.5 h-2.5 sm:w-4 sm:h-4 fill-primary text-primary" />
                    </motion.div>
                  ))}
                  <motion.span 
                    className="ml-0.5 font-semibold text-[10px] sm:text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    4.9/5
                  </motion.span>
                </div>
                <motion.p 
                  className="text-[10px] sm:text-sm text-muted-foreground leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  Join 5000+ players just like you
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Phone mockups on mobile/tablet only */}
          <div className="lg:hidden flex justify-center items-center scale-[0.715] sm:scale-[0.825] origin-center order-1 mt-4 sm:mt-0" style={{ transform: 'translateY(-2.5vh)' }}>
            <PhoneMockupTriple />
          </div>
        </div>
      </div>
    </section>
  )
}
