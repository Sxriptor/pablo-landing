"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function AboutPage() {
  const values = [
    {
      title: "Community First",
      description: "Building connections between players and fostering a vibrant sports community across the globe.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Accessibility",
      description: "Making sports accessible to everyone, everywhere. Breaking down barriers to play.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description: "Constantly evolving our platform to provide the best experience for players and partners.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-4 sm:pt-20 sm:pb-12 lg:pt-12 lg:pb-20 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 min-h-screen flex items-center sm:items-center lg:items-end" style={{ transform: 'translateY(0)' }}>
          <style jsx>{`
            @media (max-width: 1023px) {
              section {
                min-height: 100vh;
                min-height: 100dvh;
                transform: translateY(0) !important;
              }
            }
            @media (min-width: 1024px) {
              section {
                transform: none !important;
              }
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
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
          
          {/* Background gradient overlay - seamless transition to next section */}
          <motion.div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(5, 10, 15, 1) 95%)',
              height: '110%'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.3,
              ease: "easeOut"
            }}
          />

          <div className="relative z-10 w-full h-full flex flex-col justify-center items-center lg:items-start pb-2 sm:pb-8 lg:pb-12">
            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 lg:gap-12 h-full">
              <div className="space-y-3 sm:space-y-4 lg:space-y-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-1 max-w-full lg:max-w-[60%] xl:max-w-[55%] 2xl:max-w-[50%] flex-shrink-0 px-4 sm:px-0">
                <motion.h1 
                  className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-balance"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ willChange: 'opacity, transform' }}
                >
                  <motion.span 
                    style={{ 
                      color: 'white',
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
                      duration: 15,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    About
                  </motion.span>
                  <br />
                  <motion.span
                    className="text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl inline-block"
                    style={{ 
                      color: '#456882',
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
                    PlayCircle
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="text-sm sm:text-base lg:text-lg text-white max-w-xs sm:max-w-md lg:max-w-lg text-pretty leading-relaxed"
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
                  We're on a mission to make sports accessible to everyone, everywhere
                </motion.p>
              </div>
            </div>
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
   
     {/* Story Section */}
        <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative" style={{ background: '#050a0f' }}>
          {/* Decorative background elements */}
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ background: '#456882' }}
            animate={{ 
              x: [0, 50, 0, -50, 0],
              y: [0, -30, 0, 30, 0],
              scale: [1, 1.1, 1, 0.9, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div 
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our Story
              </motion.h2>
              <motion.div 
                className="w-12 sm:w-16 h-px mx-auto" 
                style={{ backgroundColor: '#456882' }}
                initial={{ width: 0 }}
                whileInView={{ width: 'auto' }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.div>

            {/* Mobile: Horizontal Scroll, Desktop: Grid */}
            <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar">
              <div className="flex gap-6 min-w-max">
                <motion.div
                  className="rounded-3xl p-8 sm:p-10 backdrop-blur-md w-[85vw] sm:w-96 snap-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.15) 0%, rgba(13, 18, 22, 0.8) 100%)',
                    border: '1px solid rgba(69, 104, 130, 0.3)',
                    boxShadow: '0 0 40px rgba(69, 104, 130, 0.1)'
                  }}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <motion.div 
                    className="text-6xl sm:text-7xl font-bold mb-6 opacity-30" 
                    style={{ color: '#456882' }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 0.3, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    01
                  </motion.div>
                  <motion.div 
                    className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <p>
                      PlayCircle was born from a simple observation: sports like soccer, tennis, padel, and more are growing rapidly, yet finding a game or connecting with other players remained surprisingly difficult.
                    </p>
                    <p>
                      We set out to change that by building a platform that brings players, facilities, and communities together in one seamless experience.
                    </p>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="rounded-3xl p-8 sm:p-10 backdrop-blur-md w-[85vw] sm:w-96 snap-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.15) 0%, rgba(13, 18, 22, 0.8) 100%)',
                    border: '1px solid rgba(69, 104, 130, 0.3)',
                    boxShadow: '0 0 40px rgba(69, 104, 130, 0.1)'
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <motion.div 
                    className="text-6xl sm:text-7xl font-bold mb-6 opacity-30" 
                    style={{ color: '#456882' }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 0.3, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    02
                  </motion.div>
                  <motion.div 
                    className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <p>
                      Whether you're a seasoned pro or just getting started with a new sport, PlayCircle makes it easy to find your next game.
                    </p>
                    <p>
                      Today, we're proud to serve thousands of players across multiple cities, partnering with leading facilities and brands to grow the sport we all love.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Desktop: Grid */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-stretch">
              <motion.div
                className="rounded-3xl p-10 backdrop-blur-md"
                style={{
                  background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.15) 0%, rgba(13, 18, 22, 0.8) 100%)',
                  border: '1px solid rgba(69, 104, 130, 0.3)',
                  boxShadow: '0 0 40px rgba(69, 104, 130, 0.1)'
                }}
                initial={{ opacity: 0, x: -50, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -10,
                  boxShadow: '0 0 60px rgba(69, 104, 130, 0.2)'
                }}
              >
                <motion.div 
                  className="text-7xl font-bold mb-6 opacity-30" 
                  style={{ color: '#456882' }}
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  whileInView={{ opacity: 0.3, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  01
                </motion.div>
                <motion.div 
                  className="space-y-6 text-gray-300 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p>
                    PlayCircle was born from a simple observation: sports like soccer, tennis, padel, and more are growing rapidly, yet finding a game or connecting with other players remained surprisingly difficult.
                  </p>
                  <p>
                    We set out to change that by building a platform that brings players, facilities, and communities together in one seamless experience.
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                className="rounded-3xl p-10 backdrop-blur-md"
                style={{
                  background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.15) 0%, rgba(13, 18, 22, 0.8) 100%)',
                  border: '1px solid rgba(69, 104, 130, 0.3)',
                  boxShadow: '0 0 40px rgba(69, 104, 130, 0.1)'
                }}
                initial={{ opacity: 0, x: 50, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -10,
                  boxShadow: '0 0 60px rgba(69, 104, 130, 0.2)'
                }}
              >
                <motion.div 
                  className="text-7xl font-bold mb-6 opacity-30" 
                  style={{ color: '#456882' }}
                  initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                  whileInView={{ opacity: 0.3, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  02
                </motion.div>
                <motion.div 
                  className="space-y-6 text-gray-300 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <p>
                    Whether you're a seasoned pro or just getting started with a new sport, PlayCircle makes it easy to find your next game.
                  </p>
                  <p>
                    Today, we're proud to serve thousands of players across multiple cities, partnering with leading facilities and brands to grow the sport we all love.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative" style={{ background: '#050a0f' }}>
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ background: '#456882' }}
            animate={{ 
              x: [0, -30, 0, 30, 0],
              y: [0, 40, 0, -40, 0],
              scale: [1, 0.9, 1, 1.1, 1]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div 
              className="text-center mb-12 sm:mb-16 lg:mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our Values
              </motion.h2>
              <motion.div 
                className="w-12 sm:w-16 h-px mx-auto" 
                style={{ backgroundColor: '#456882' }}
                initial={{ width: 0 }}
                whileInView={{ width: 'auto' }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center rounded-3xl p-6 sm:p-8 backdrop-blur-md"
                  style={{
                    background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.12) 0%, rgba(13, 18, 22, 0.8) 100%)',
                    border: '1px solid rgba(69, 104, 130, 0.25)',
                    boxShadow: '0 0 30px rgba(69, 104, 130, 0.08)'
                  }}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: '0 0 50px rgba(69, 104, 130, 0.15)'
                  }}
                >
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(69, 104, 130, 0.2)', color: '#456882' }}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 + 0.3,
                      ease: "easeOut"
                    }}
                    whileHover={{ rotate: 360 }}
                  >
                    {value.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  >
                    {value.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm sm:text-base text-gray-400 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                  >
                    {value.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ background: '#050a0f' }}>
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              Join the Movement
            </motion.h2>
            <motion.div 
              className="w-16 sm:w-24 h-px mx-auto mb-8 sm:mb-12" 
              style={{ backgroundColor: '#456882' }}
              initial={{ width: 0 }}
              whileInView={{ width: 'auto' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-gray-300 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Be part of the community that's transforming how people play sports around the world.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="/"
                className="inline-block rounded-full px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold"
                style={{
                  backgroundColor: '#456882',
                  color: 'white'
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: '0 10px 30px rgba(69, 104, 130, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Download App
              </motion.a>
              <motion.a
                href="/partners"
                className="inline-block rounded-full px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold border-2"
                style={{
                  borderColor: '#456882',
                  color: '#456882'
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  backgroundColor: '#456882',
                  color: 'white',
                  boxShadow: '0 10px 30px rgba(69, 104, 130, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Become a Partner
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}