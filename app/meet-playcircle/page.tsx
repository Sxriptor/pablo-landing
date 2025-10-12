"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => {
    const value = Math.round(latest)
    // Format large numbers
    if (value >= 10000) {
      return `${Math.floor(value / 1000)}K`
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`
    }
    return value.toString()
  })
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration })
      return controls.stop
    }
  }, [inView, count, to, duration])

  return <motion.div ref={ref}>{rounded}</motion.div>
}

export default function MeetPlayCirclePage() {
  const upcomingFeatures = [
    {
      title: "Multi-Sport Platform",
      description: "Support multiple sports including soccer, football, tennis, pickleball, padel, badminton, and more.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Global Court Network",
      description: "Connect with courts and facilities worldwide, from local clubs to premium venues.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "AI-Powered Matching",
      description: "Smart algorithms to match players based on skill level, location, and playing style.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Tournament Management",
      description: "Organize and participate in tournaments, leagues, and competitive events.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Social Features",
      description: "Connect with friends, share achievements, and build lasting relationships through sport.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Analytics & Insights",
      description: "Track your progress, analyze your game, and improve with detailed performance metrics.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ]

  const roadmap = [
    {
      phase: "Phase 1",
      title: "Foundation",
      description: "Core platform foundation",
      features: ["Court booking", "Player matching", "Basic tournaments"],
      status: "completed"
    },
    {
      phase: "Phase 2",
      title: "Expansion",
      description: "Multi-sport integration",
      features: ["Soccer fields", "Tennis courts", "Pickleball venues", "Football pitches"],
      status: "in-progress"
    },
    {
      phase: "Phase 3",
      title: "Intelligence",
      description: "AI-powered features",
      features: ["Smart matching", "Performance analytics", "Predictive insights"],
      status: "planned"
    },
    {
      phase: "Phase 4",
      title: "Global",
      description: "Worldwide community",
      features: ["International tournaments", "Global court network", "Multi-language support"],
      status: "planned"
    },
  ]

  const stats = [
    { number: "10K+", value: 10000, suffix: "+", label: "Active Players" },
    { number: "500+", value: 500, suffix: "+", label: "Partner Courts" },
    { number: "50+", value: 50, suffix: "+", label: "Cities" },
    { number: "5+", value: 5, suffix: "+", label: "Sports" },
  ]

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
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 0.05,
              scale: 1,
              x: [0, -30, 0, 30, 0],
              y: [0, 40, 0, -40, 0]
            }}
            transition={{
              opacity: { duration: 2, delay: 1 },
              scale: { duration: 2, delay: 1 },
              x: {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              },
              y: {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }
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
                Meet{" "}
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
                  PlayCircle
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                The future of sports connection. More sports, more courts, more possibilities.
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
        <section className="relative">
          {/* Floating orb above stats */}
          <motion.div
            className="absolute top-20 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl z-10"
            style={{ background: '#456882' }}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ 
              opacity: 0.1,
              scale: 1,
              x: [0, -50, 0, 50, 0],
              y: [0, 30, 0, -30, 0]
            }}
            transition={{
              opacity: { duration: 2.5, delay: 2 },
              scale: { duration: 2.5, delay: 2 },
              x: {
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4.5
              },
              y: {
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4.5
              }
            }}
          />

          {/* Stats Section */}
          <section className="py-16 sm:py-24 lg:py-32 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                className="text-center mb-12 sm:mb-16 lg:mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <motion.h2 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Today's Impact
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
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center"
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div 
                      className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-4 leading-tight" 
                      style={{ color: '#456882' }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      <Counter from={0} to={stat.value} duration={2 + index * 0.2} />+
                    </motion.div>
                    <motion.div 
                      className="text-sm sm:text-base lg:text-lg text-white"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                    >
                      {stat.label}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="py-16 sm:py-24 lg:py-32 px-4 relative overflow-hidden" style={{ background: '#050a0f' }}>

            <div className="max-w-5xl mx-auto relative z-10">
              <motion.div 
                className="text-center mb-12 sm:mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <motion.h2 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Our Vision
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

              {/* Mobile: Horizontal Scroll */}
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
                        PlayCircle represents our evolution to a comprehensive multi-sport platform connecting players across all sports.
                      </p>
                      <p>
                        We're building the world's largest sports community, connecting players across multiple disciplines and creating opportunities for growth, competition, and friendship.
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
                        From soccer fields to tennis courts, from padel matches to football games, PlayCircle will be your gateway to the entire sports world.
                      </p>
                      <p>
                        Join us as we revolutionize how people discover, connect, and play sports together.
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
                      PlayCircle represents our evolution to a comprehensive multi-sport platform connecting players across all sports.
                    </p>
                    <p>
                      We're building the world's largest sports community, connecting players across multiple disciplines and creating opportunities for growth, competition, and friendship.
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
                      From soccer fields to tennis courts, from padel matches to football games, PlayCircle will be your gateway to the entire sports world.
                    </p>
                    <p>
                      Join us as we revolutionize how people discover, connect, and play sports together.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Upcoming Features */}
          <section className="py-16 sm:py-24 lg:py-32 px-4 relative overflow-hidden" style={{ background: '#050a0f' }}>
            <motion.div
              className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
              style={{ background: '#456882' }}
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ 
                opacity: 0.05,
                scale: 1,
                x: [0, -30, 0, 30, 0],
                y: [0, 40, 0, -40, 0]
              }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{
                opacity: { duration: 2 },
                scale: { duration: 2 },
                x: {
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                },
                y: {
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }
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
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  What's Coming
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

              {/* Mobile: Horizontal Scroll Carousel */}
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar">
                <div className="flex gap-4 min-w-max">
                  {upcomingFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="text-center rounded-3xl p-6 backdrop-blur-md w-[75vw] sm:w-80 snap-center flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.12) 0%, rgba(13, 18, 22, 0.8) 100%)',
                        border: '1px solid rgba(69, 104, 130, 0.25)',
                        boxShadow: '0 0 30px rgba(69, 104, 130, 0.08)'
                      }}
                    >
                      <div
                        className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(69, 104, 130, 0.2)', color: '#456882' }}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: Grid */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {upcomingFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="text-center rounded-3xl p-6 lg:p-8 backdrop-blur-md"
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
                      className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-6 lg:mb-8 rounded-full flex items-center justify-center"
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
                      {feature.icon}
                    </motion.div>
                    <motion.h3 
                      className="text-lg lg:text-xl font-semibold text-white mb-3 lg:mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-400 leading-relaxed text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                    >
                      {feature.description}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Roadmap Section */}
          <section className="py-16 sm:py-24 lg:py-32 px-4 relative overflow-hidden" style={{ background: '#050a0f' }}>
            <motion.div
              className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
              style={{ background: '#456882' }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ 
                opacity: 0.05,
                scale: 1,
                x: [0, 50, 0, -50, 0],
                y: [0, -30, 0, 30, 0]
              }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{
                opacity: { duration: 2.5 },
                scale: { duration: 2.5 },
                x: {
                  duration: 22,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.5
                },
                y: {
                  duration: 22,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.5
                }
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
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Development Roadmap
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
              <div className="space-y-6 sm:space-y-8">
                {roadmap.map((phase, index) => (
                  <motion.div
                    key={index}
                    className="rounded-3xl p-6 sm:p-8 backdrop-blur-md"
                    style={{
                      background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.12) 0%, rgba(13, 18, 22, 0.8) 100%)',
                      border: '1px solid rgba(69, 104, 130, 0.25)',
                      boxShadow: '0 0 30px rgba(69, 104, 130, 0.08)',
                      opacity: phase.status === 'planned' ? 0.7 : 1
                    }}
                    initial={{ opacity: 0, x: -30, y: 20 }}
                    whileInView={{ opacity: phase.status === 'planned' ? 0.7 : 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -5,
                      boxShadow: '0 0 50px rgba(69, 104, 130, 0.15)'
                    }}
                  >
                    <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
                      <div className="flex-shrink-0">
                        <div
                          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-white font-semibold text-base sm:text-lg"
                          style={{
                            backgroundColor: phase.status === 'completed' || phase.status === 'in-progress' ? '#456882' : 'rgba(69, 104, 130, 0.3)'
                          }}
                        >
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-semibold text-white">
                            {phase.phase}
                          </h3>
                          <span
                            className="text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-white font-medium"
                            style={{
                              backgroundColor: phase.status === 'completed' || phase.status === 'in-progress' ? '#456882' : 'rgba(69, 104, 130, 0.3)'
                            }}
                          >
                            {phase.status === 'completed' ? 'Completed' : phase.status === 'in-progress' ? 'In Progress' : 'Planned'}
                          </span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                          {phase.title}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                          {phase.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {phase.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-gray-300"
                              style={{ backgroundColor: 'rgba(69, 104, 130, 0.15)' }}
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 sm:py-24 lg:py-32 px-4" style={{ background: '#050a0f' }}>
            <div className="max-w-5xl mx-auto text-center">
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                Join the Journey
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
                Be among the first to experience PlayCircle and help shape the future of sports connection.
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
                  Get Early Access
                </motion.a>
                <motion.a
                  href="/contact"
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
                  Learn More
                </motion.a>
              </motion.div>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  )
}