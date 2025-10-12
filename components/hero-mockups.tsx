"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from "framer-motion"
import { Users, Clock, Trophy, Calendar, Zap, MessageCircle, Send, Search, Menu, Filter, Bell, TrendingUp, MapPin, ChevronRight } from "lucide-react"

/**
 * HeroMockups Component
 * 
 * Three overlapping phone mockups with proper aspect ratio preservation (9:16)
 * Responsive design that works on all screen sizes without distortion
 * 
 * Features:
 * - Maintains 9:16 aspect ratio on all screens
 * - Side-by-side with overlap on desktop
 * - Stacks vertically on mobile
 * - No cropping of content
 * - Subtle animations and transforms
 */

export function HeroMockups() {
  const [currentGame] = useState(0)

  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-1/4 -left-4 xs:-left-6 sm:-left-8 md:-left-12 lg:-left-16 xl:-left-20 w-8 h-8 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 rounded-xl xs:rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10"
        initial={{ opacity: 0, scale: 0.5, x: -40, y: -25 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: [0, 10, 0],
          rotate: [0, 3, 0],
        }}
        style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden', transform: 'translate3d(0,0,0)' }}
        transition={{
          opacity: { duration: 1, ease: "easeOut" },
          scale: { duration: 1, ease: "easeOut" },
          x: { duration: 1, ease: "easeOut" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-4 xs:-right-6 sm:-right-8 md:-right-12 lg:-right-16 xl:-right-20 w-10 h-10 xs:w-14 xs:h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-xl xs:rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/10"
        initial={{ opacity: 0, scale: 0.5, x: 40, y: 25 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: [0, -12, 0],
          rotate: [0, -3, 0],
        }}
        style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden', transform: 'translate3d(0,0,0)' }}
        transition={{
          opacity: { duration: 1, ease: "easeOut", delay: 0.2 },
          scale: { duration: 1, ease: "easeOut", delay: 0.2 },
          x: { duration: 1, ease: "easeOut", delay: 0.2 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
          rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
        }}
      />

      {/* Container for three mockups with proper aspect ratio */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 w-full max-w-[1600px] mx-auto px-4 py-12">
        
        {/* Left Phone - Game Discovery */}
        <MockupFrame
          delay={0}
          className="md:-mr-12 lg:-mr-16 xl:-mr-20 md:-rotate-12 md:-translate-y-3"
          zIndex={10}
          animateY={[-6, 0, -6]}
        >
          <GameDiscoveryScreenGreen />
        </MockupFrame>

        {/* Center Phone - Interactive Multi-Screen (larger, centered) */}
        <MockupFrame
          delay={0.1}
          className="md:scale-110 lg:scale-125"
          zIndex={20}
          animateY={[-8, 0, -8]}
          animateScale={[1.15, 1.18, 1.15]}
        >
          <InteractiveCenterScreen />
        </MockupFrame>

        {/* Right Phone - Leaderboard */}
        <MockupFrame
          delay={0.3}
          className="md:-ml-12 lg:-ml-16 xl:-ml-20 md:rotate-12 md:translate-y-4"
          zIndex={10}
          animateY={[4, 0, 4]}
        >
          <LeaderboardScreenSimpleGreen />
        </MockupFrame>
      </div>
    </div>
  )
}

/**
 * MockupFrame - Wrapper component that maintains 9:16 aspect ratio
 */
function MockupFrame({ 
  children, 
  delay = 0, 
  className = "",
  animateY = [0, -6, 0],
  animateScale,
  zIndex = 10
}: { 
  children: React.ReactNode
  delay?: number
  className?: string
  animateY?: number[]
  animateScale?: number[]
  zIndex?: number
}) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: 1, 
        y: 0
      }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      style={{ 
        zIndex,
        willChange: 'transform, opacity', 
        backfaceVisibility: 'hidden' 
      }}
    >
      <motion.div
        // Aspect ratio container - maintains 9:16 phone proportions
        className="relative w-full"
        style={{ 
          aspectRatio: '9 / 16',
          maxWidth: '400px',
          minWidth: '280px',
          width: '100%'
        }}
        animate={{
          y: animateY,
          ...(animateScale && { scale: animateScale })
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Phone frame */}
        <div className="absolute inset-0 rounded-2xl lg:rounded-[2rem] bg-black/40 backdrop-blur-2xl border border-white/20 shadow-2xl p-2 lg:p-3">
          {/* Inner screen - maintains aspect ratio */}
          <div className="w-full h-full rounded-xl lg:rounded-[1.75rem] bg-gradient-to-br from-slate-900/95 to-slate-800/95 overflow-hidden relative">
            {children}
          </div>

          {/* Phone notch */}
          <div className="absolute top-2 lg:top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 lg:w-28 h-4 sm:h-5 lg:h-6 bg-black rounded-full z-30" />
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/30 via-teal-500/30 to-cyan-500/30 blur-3xl rounded-full scale-110" />
      </motion.div>
    </motion.div>
  )
}

/**
 * Game Discovery Screen Content - Green Theme
 */
function GameDiscoveryScreenGreen() {
  return (
    <>
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-5 text-white text-[10px] z-20">
        <span>9:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-3">📶</div>
          <div className="w-3 h-3">🔋</div>
        </div>
      </div>

      {/* Background gradient - Green theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 via-green-500/10 to-slate-900" />

      {/* Header */}
      <div className="absolute top-8 left-3 right-3 z-20">
        <div className="flex items-center gap-2 mb-3">
          <motion.button 
            className="w-8 h-8 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <Menu className="w-4 h-4 text-emerald-400" />
          </motion.button>
          
          <div className="flex-1 relative">
            <div className="backdrop-blur-xl bg-white/10 rounded-xl border border-white/20 px-3 py-2 flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-white/60" />
              <span className="text-white/60 text-[10px]">Search games</span>
            </div>
          </div>
        </div>

        {/* Date selector */}
        <div className="flex gap-1 mb-2">
          <div className="px-2 py-1 rounded-full text-[9px] font-semibold bg-emerald-500 text-white">
            Sun 12
          </div>
          <div className="px-2 py-1 rounded-full text-[9px] font-semibold bg-emerald-500/20 text-white backdrop-blur-xl border border-emerald-500/30">
            Mon 13
          </div>
          <div className="px-2 py-1 rounded-full text-[9px] font-semibold bg-emerald-500/20 text-white backdrop-blur-xl border border-emerald-500/30">
            Tue 14
          </div>
        </div>
      </div>

      {/* Game cards */}
      <div className="absolute top-32 left-3 right-3 bottom-16 overflow-hidden">
        <h2 className="text-white text-sm font-bold mb-3">Available Games</h2>
        
        <div className="space-y-2">
          <GameCard 
            title="Downtown Padel"
            time="Today 10:00am"
            duration="90m"
            players="3/4"
            price="$12"
            type="CASUAL"
            gradient="from-emerald-500/30 to-green-500/30"
          />
          <GameCard 
            title="Eastside League"
            time="Today 9:00pm"
            duration="90m"
            players="3/4"
            price="$20"
            type="COMP"
            gradient="from-emerald-500/20 to-green-500/20"
          />
        </div>
      </div>
    </>
  )
}

/**
 * Interactive Center Screen with Multiple Pages
 */
function InteractiveCenterScreen() {
  const [currentScreen, setCurrentScreen] = useState(1) // Start with second screen (Active Game)
  const x = useMotionValue(0)
  const screens = 4 // Total number of screens

  // Auto-rotate screens every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 50
    if (info.offset.x > threshold && currentScreen > 0) {
      setCurrentScreen(currentScreen - 1)
    } else if (info.offset.x < -threshold && currentScreen < screens - 1) {
      setCurrentScreen(currentScreen + 1)
    }
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentScreen}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute inset-0"
        >
          {currentScreen === 0 && <ProfileStatsScreenGreen />}
          {currentScreen === 1 && <ActiveGameScreenGreen />}
          {currentScreen === 2 && <MessagesScreenGreen />}
          {currentScreen === 3 && <NotificationsScreenGreen />}
        </motion.div>
      </AnimatePresence>

      {/* Screen indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
        {Array.from({ length: screens }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentScreen(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentScreen ? 'w-6 bg-emerald-400' : 'w-1.5 bg-white/30'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  )
}

/**
 * Notifications Screen - Green Theme
 */
function NotificationsScreenGreen() {
  const notifications = [
    { 
      type: "game", 
      title: "Game Starting Soon", 
      message: "Your padel match starts in 45 minutes", 
      time: "5m ago",
      icon: "🎾",
      color: "from-emerald-500 to-green-600"
    },
    { 
      type: "invite", 
      title: "New Game Invite", 
      message: "Maria invited you to join a game", 
      time: "1h ago",
      icon: "📩",
      color: "from-blue-500 to-blue-600"
    },
    { 
      type: "achievement", 
      title: "Achievement Unlocked!", 
      message: "You've played 10 games this month", 
      time: "2h ago",
      icon: "🏆",
      color: "from-yellow-500 to-orange-500"
    },
    { 
      type: "message", 
      title: "New Message", 
      message: "Carlos: Great game today!", 
      time: "3h ago",
      icon: "💬",
      color: "from-purple-500 to-pink-500"
    },
    { 
      type: "reminder", 
      title: "Payment Reminder", 
      message: "Complete payment for tomorrow's game", 
      time: "5h ago",
      icon: "💳",
      color: "from-emerald-500 to-teal-600"
    }
  ]

  return (
    <>
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-5 text-white text-[10px] z-20">
        <span>9:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-3">📶</div>
          <div className="w-3 h-3">🔋</div>
        </div>
      </div>

      {/* Background gradient - Green theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 via-green-500/10 to-slate-900" />

      {/* Header */}
      <div className="absolute top-8 left-3 right-3 z-20">
        <div className="flex items-center justify-between mb-4">
          <motion.button 
            className="w-8 h-8 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <Menu className="w-4 h-4 text-emerald-400" />
          </motion.button>
          
          <h2 className="text-white text-sm font-bold">Notifications</h2>
          
          <motion.button 
            className="w-8 h-8 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <Filter className="w-4 h-4 text-emerald-400" />
          </motion.button>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-1 mb-3">
          {["All", "Games", "Social"].map((tab, index) => (
            <div
              key={index}
              className={`px-3 py-1 rounded-full text-[9px] font-semibold ${
                index === 0 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-emerald-500/20 text-white/70 border border-emerald-500/30'
              }`}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      {/* Notifications list - Fixed bottom cutoff */}
      <div className="absolute top-32 left-3 right-3 bottom-4 overflow-hidden pb-12">
        <div className="space-y-2">
          {notifications.map((notif, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-xl bg-emerald-500/10 rounded-xl border border-emerald-500/20 p-2.5 flex items-start gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(16, 185, 129, 0.15)" }}
            >
              <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${notif.color} flex items-center justify-center text-lg flex-shrink-0`}>
                {notif.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-0.5">
                  <h3 className="text-white text-[10px] font-bold leading-tight">
                    {notif.title}
                  </h3>
                  <span className="text-emerald-300 text-[8px] flex-shrink-0 ml-1">{notif.time}</span>
                </div>
                <p className="text-white/70 text-[9px] leading-tight">
                  {notif.message}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

/**
 * Enhanced Game Discovery Screen
 */
function GameDiscoveryScreenEnhanced() {
  const games = [
    {
      title: "Downtown Padel Courts",
      time: "Today 10:00am",
      duration: "90m",
      players: "3/4",
      price: "$12",
      level: "CASUAL"
    },
    {
      title: "Eastside Padel League",
      time: "Today 9:00pm",
      duration: "90m",
      players: "3/4",
      price: "$20",
      level: "COMP"
    }
  ]

  const days = [
    { day: "Sun", date: "12", active: true },
    { day: "Mon", date: "13", active: false },
    { day: "Tue", date: "14", active: false },
    { day: "Wed", date: "15", active: false }
  ]

  return (
    <>
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-5 text-white text-[10px] z-20">
        <span>9:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-3">📶</div>
          <div className="w-3 h-3">🔋</div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 via-teal-500/10 to-slate-900" />

      {/* Header with search */}
      <div className="absolute top-8 left-3 right-3 z-20">
        <div className="flex items-center gap-2 mb-3">
          <motion.button 
            className="w-8 h-8 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <Menu className="w-4 h-4 text-emerald-400" />
          </motion.button>
          
          <div className="flex-1 relative">
            <div className="backdrop-blur-xl bg-white/10 rounded-xl border border-white/20 px-3 py-2 flex items-center gap-2">
              <Search className="w-3 h-3 text-white/60" />
              <span className="text-white/60 text-[10px]">Search games</span>
            </div>
          </div>
          
          <motion.button 
            className="w-8 h-8 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <Filter className="w-4 h-4 text-emerald-400" />
          </motion.button>
        </div>

        {/* Date selector */}
        <div className="flex gap-1 mb-2">
          {days.map((day, index) => (
            <div
              key={index}
              className={`px-2 py-1 rounded-full text-[9px] font-semibold ${
                day.active 
                  ? 'bg-white text-slate-900' 
                  : 'bg-emerald-500/20 text-white backdrop-blur-xl border border-emerald-500/30'
              }`}
            >
              {day.day} {day.date}
            </div>
          ))}
        </div>
      </div>

      {/* Game cards */}
      <div className="absolute top-32 left-3 right-3 bottom-16 overflow-hidden">
        <h2 className="text-white text-sm font-bold mb-3">Available Games</h2>
        
        <div className="space-y-2">
          {games.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>
      </div>
    </>
  )
}

/**
 * Profile/Stats Screen Content - Green Theme
 */
function ProfileStatsScreenGreen() {
  return (
    <>
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-5 text-white text-[10px] z-20">
        <span>9:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-3">📶</div>
          <div className="w-3 h-3">🔋</div>
        </div>
      </div>

      {/* Background gradient - Green theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-green-500/20 to-slate-900" />

      {/* Profile header */}
      <div className="absolute top-8 left-3 right-3 z-20">
        <div className="flex items-center gap-2 mb-4">
          <motion.div 
            className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center border-2 border-gray-500/30 shadow-xl"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-700 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-300 rounded-full" />
              </div>
            </div>
          </motion.div>
          
          <div className="flex-1">
            <h2 className="text-white text-xs font-bold">Alex Johnson</h2>
            <p className="text-emerald-300 text-[8px]">@alexj_sports</p>
          </div>
        </div>

        {/* Action buttons - Green theme */}
        <div className="flex gap-1 mb-3">
          <ActionButton icon={<Users className="w-2.5 h-2.5" />} label="Friends" color="from-emerald-500 to-green-600" />
          <ActionButton icon={<MessageCircle className="w-2.5 h-2.5" />} label="Message" color="from-green-600 to-emerald-700" />
          <ActionButton icon={<Send className="w-2.5 h-2.5" />} label="Invite" color="from-teal-500 to-emerald-600" />
        </div>
      </div>

      {/* Performance section */}
      <motion.div 
        className="absolute top-36 left-3 right-3 bottom-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl border border-emerald-500/30 p-3 shadow-2xl h-full">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
              <Trophy className="w-2.5 h-2.5 text-white" />
            </div>
            <div>
              <h3 className="text-white text-xs font-bold">Performance</h3>
              <p className="text-emerald-300 text-[7px]">This Month</p>
            </div>
          </div>

          <div className="mb-3">
            <div className="text-white text-xl font-bold mb-0.5">12</div>
            <div className="text-emerald-300 text-[8px]">matches played</div>
          </div>

          {/* Stats */}
          <div className="flex justify-between mb-3">
            {[
              { label: "Wins", value: "58%" },
              { label: "Attendance", value: "85%" },
              { label: "Skill", value: "42%" }
            ].map((stat, index) => (
              <StatCircle key={index} {...stat} delay={0.6 + index * 0.1} />
            ))}
          </div>

          {/* Weekly stats */}
          <div className="flex gap-1.5">
            <WeeklyStat icon={<Calendar className="w-3 h-3 text-emerald-400" />} value="8" label="this week" delay={1} />
            <WeeklyStat icon={<Zap className="w-3 h-3 text-emerald-400" />} value="3" label="win streak" delay={1.1} />
          </div>
        </div>
      </motion.div>
    </>
  )
}

/**
 * Active Game Screen - Green Theme (Redesigned)
 */
function ActiveGameScreenGreen() {
  return (
    <>
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-5 text-white text-[10px] z-20">
        <span>9:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-3">📶</div>
          <div className="w-3 h-3">🔋</div>
        </div>
      </div>

      {/* Background gradient - Green theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 via-green-500/10 to-slate-900" />

      {/* Header */}
      <div className="absolute top-8 left-3 right-3 z-20">
        <div className="flex items-center justify-between mb-4">
          <motion.button 
            className="w-8 h-8 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <Menu className="w-4 h-4 text-emerald-400" />
          </motion.button>
          
          <div className="text-center">
            <h2 className="text-white text-sm font-bold">Active Game</h2>
            <p className="text-emerald-300 text-[8px]">Downtown Padel Courts</p>
          </div>
          
          <motion.button 
            className="w-8 h-8 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <Bell className="w-4 h-4 text-emerald-400" />
          </motion.button>
        </div>
      </div>

      {/* Game info card - Fixed overlay issue */}
      <div className="absolute top-24 left-3 right-3 z-20">
        <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl border border-emerald-500/30 p-3 shadow-xl">
          {/* Title and status */}
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="text-white font-bold text-sm mb-1">Padel Match</h3>
              <div className="flex items-center gap-1.5 text-white/90 text-[10px]">
                <Clock className="w-3 h-3" />
                <span>Starting in 45 min</span>
              </div>
            </div>
            <div className="px-2 py-0.5 rounded-full text-[8px] font-bold bg-emerald-500/30 text-emerald-200 border border-emerald-400/30 flex-shrink-0">
              CONFIRMED
            </div>
          </div>
          
          {/* Location */}
          <div className="flex items-center gap-1.5 text-white/90 text-[10px] mb-2 pb-2 border-b border-white/10">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            <span className="truncate">123 Main St, Downtown</span>
          </div>

          {/* Players */}
          <div className="mb-2">
            <p className="text-emerald-300 text-[9px] mb-1.5 font-semibold">Players (4/4)</p>
            <div className="flex gap-2">
              {['M', 'S', 'J', 'A'].map((initial, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white font-bold text-xs shadow-lg">
                  {initial}
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons - Fixed spacing */}
          <div className="flex gap-2 mt-2">
            <motion.button
              className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold py-1.5 rounded-lg text-[10px] shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book & Pay
            </motion.button>
            <motion.button
              className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold py-1.5 rounded-lg text-[10px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Chat
            </motion.button>
          </div>
        </div>
      </div>

      {/* Game Details Section - Moved up slightly */}
      <div className="absolute top-[305px] left-3 right-3 bottom-16">
        <div className="space-y-2">
          <div className="backdrop-blur-xl bg-emerald-500/10 rounded-lg border border-emerald-500/20 p-2.5">
            <div className="flex items-center justify-between mb-1">
              <span className="text-emerald-300 text-[9px] font-semibold">Court Type</span>
              <span className="text-white text-[10px] font-bold">Indoor Padel</span>
            </div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-emerald-300 text-[9px] font-semibold">Duration</span>
              <span className="text-white text-[10px] font-bold">90 minutes</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-emerald-300 text-[9px] font-semibold">Price per player</span>
              <span className="text-white text-[10px] font-bold">$15.00</span>
            </div>
          </div>
          
          <div className="backdrop-blur-xl bg-emerald-500/10 rounded-lg border border-emerald-500/20 p-2.5">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 flex items-center justify-center">
                <Zap className="w-3 h-3 text-emerald-400" />
              </div>
              <span className="text-white text-[10px] font-semibold">Equipment Included</span>
            </div>
            <p className="text-white/70 text-[9px] leading-tight">Rackets and balls provided</p>
          </div>
        </div>
      </div>
    </>
  )
}

/**
 * Messages Screen - Green Theme (Actual Conversation View)
 */
function MessagesScreenGreen() {
  const conversation = [
    { text: "Hey! Are you free for a game tomorrow?", sender: "them", time: "10:23 AM" },
    { text: "Yeah! What time works for you?", sender: "me", time: "10:25 AM" },
    { text: "How about 6pm at Downtown Courts?", sender: "them", time: "10:26 AM" },
    { text: "Perfect! I'll book the court 🎾", sender: "me", time: "10:28 AM" }
  ]

  return (
    <>
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-5 text-white text-[10px] z-20">
        <span>9:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-3">📶</div>
          <div className="w-3 h-3">🔋</div>
        </div>
      </div>

      {/* Background gradient - Green theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 via-green-500/10 to-slate-900" />

      {/* Header - Chat with Maria */}
      <div className="absolute top-8 left-3 right-3 z-20">
        <div className="flex items-center gap-2 mb-4 backdrop-blur-xl bg-emerald-500/10 rounded-xl border border-emerald-500/20 p-2">
          <motion.button 
            className="w-7 h-7 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-center flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <ChevronRight className="w-3.5 h-3.5 text-emerald-400 rotate-180" />
          </motion.button>
          
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
            M
          </div>
          
          <div className="flex-1 min-w-0">
            <h2 className="text-white text-xs font-bold">Maria G.</h2>
            <p className="text-emerald-300 text-[8px]">Active now</p>
          </div>
          
          <motion.button 
            className="w-7 h-7 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-center flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <Users className="w-3.5 h-3.5 text-emerald-400" />
          </motion.button>
        </div>
      </div>

      {/* Conversation messages */}
      <div className="absolute top-28 left-3 right-3 bottom-20 overflow-hidden">
        <div className="space-y-2">
          {conversation.map((msg, index) => (
            <motion.div
              key={index}
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`max-w-[75%] ${msg.sender === 'me' ? 'order-2' : 'order-1'}`}>
                <div className={`backdrop-blur-xl rounded-2xl p-2.5 ${
                  msg.sender === 'me' 
                    ? 'bg-gradient-to-br from-emerald-500 to-green-600 rounded-br-sm' 
                    : 'bg-white/10 border border-white/20 rounded-bl-sm'
                }`}>
                  <p className="text-white text-[10px] leading-relaxed">{msg.text}</p>
                </div>
                <p className={`text-[7px] text-white/50 mt-0.5 ${msg.sender === 'me' ? 'text-right' : 'text-left'}`}>
                  {msg.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Message input */}
      <div className="absolute bottom-4 left-3 right-3 z-20">
        <div className="backdrop-blur-xl bg-white/10 rounded-xl border border-white/20 px-3 py-2 flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Type a message..." 
            className="flex-1 bg-transparent text-white text-[10px] placeholder:text-white/40 outline-none"
            disabled
          />
          <motion.button 
            className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-3.5 h-3.5 text-white" />
          </motion.button>
        </div>
      </div>
    </>
  )
}

/**
 * Leaderboard Screen Content (Right Phone) - Green Theme
 */
function LeaderboardScreenSimpleGreen() {
  return (
    <>
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-5 text-white text-[10px] z-20">
        <span>9:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-3">📶</div>
          <div className="w-3 h-3">🔋</div>
        </div>
      </div>

      {/* Background gradient - Green theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 via-green-500/10 to-slate-900" />

      {/* Header */}
      <div className="absolute top-8 left-2 right-2 z-20">
        <div className="flex items-center gap-1 mb-3">
          <motion.button 
            className="w-6 h-6 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <Menu className="w-3 h-3 text-emerald-400" />
          </motion.button>
          
          <div className="flex gap-0.5 flex-wrap">
            <div className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 text-white text-[7px] font-semibold">
              🏓 Pickleball
            </div>
          </div>
        </div>

        {/* Scope tabs */}
        <div className="flex gap-0.5 mb-3 justify-center">
          <div className="px-2 py-0.5 rounded-full text-[8px] font-semibold border border-emerald-500 text-emerald-400 bg-emerald-500/10">
            Local
          </div>
          <div className="px-2 py-0.5 rounded-full text-[8px] font-semibold text-white/70">
            National
          </div>
          <div className="px-2 py-0.5 rounded-full text-[8px] font-semibold text-white/70">
            Global
          </div>
        </div>
      </div>

      {/* Leaderboard content */}
      <div className="absolute top-28 left-3 right-3 bottom-16 overflow-hidden">
        <div className="backdrop-blur-xl bg-emerald-500/10 rounded-xl border border-emerald-500/20 p-3">
          <h3 className="text-white text-xs font-bold mb-2">Top Players</h3>
          <div className="space-y-2">
            <LeaderboardEntry rank={1} name="Maria G." score="2,450" />
            <LeaderboardEntry rank={2} name="John D." score="2,380" />
            <LeaderboardEntry rank={3} name="Sarah K." score="2,310" />
          </div>
        </div>
      </div>
    </>
  )
}

// Helper Components
function GameCard({ title, time, duration, players, price, type, gradient }: any) {
  return (
    <motion.div
      className={`backdrop-blur-xl bg-gradient-to-r ${gradient} rounded-xl border border-emerald-500/40 p-3 shadow-xl relative overflow-hidden`}
      whileHover={{ scale: 1.02, y: -1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 to-teal-600/80" />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-bold text-sm mb-1 truncate">{title}</h3>
            <div className="flex items-center gap-1 text-white/90 text-xs mb-1">
              <Clock className="w-2.5 h-2.5 flex-shrink-0" />
              <span className="truncate">{time}</span>
            </div>
          </div>
          <div className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-blue-500/30 text-blue-200 border border-blue-400/30 flex-shrink-0 ml-1">
            {type}
          </div>
        </div>
        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center gap-3 text-white/90 text-xs">
            <div className="flex items-center gap-0.5">
              <Clock className="w-2.5 h-2.5" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-0.5">
              <Users className="w-2.5 h-2.5" />
              <span>{players}</span>
            </div>
          </div>
          <div className="text-white font-bold text-sm">{price}</div>
        </div>
      </div>
    </motion.div>
  )
}

function ActionButton({ icon, label, color }: any) {
  return (
    <motion.button
      className={`flex-1 bg-gradient-to-r ${color} text-white font-semibold py-1 px-1.5 rounded-lg flex items-center justify-center gap-0.5 shadow-lg`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <span className="text-[8px]">{label}</span>
    </motion.button>
  )
}

function StatCircle({ label, value, delay }: any) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="relative w-8 h-8 mb-1">
        <div className="absolute inset-0 rounded-full bg-white/10" />
        <div className="absolute inset-0.5 rounded-full bg-slate-800 flex items-center justify-center">
          <span className="text-white text-[7px] font-bold">{value}</span>
        </div>
      </div>
      <div className="text-white/70 text-[7px] leading-tight">{label}</div>
    </motion.div>
  )
}

function WeeklyStat({ icon, value, label, delay }: any) {
  return (
    <motion.div
      className="flex-1 backdrop-blur-lg bg-white/10 rounded-lg border border-white/20 p-1.5 text-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex items-center justify-center mb-0.5">{icon}</div>
      <div className="text-white text-sm font-bold mb-0.5">{value}</div>
      <div className="text-white/70 text-[7px] leading-tight">{label}</div>
    </motion.div>
  )
}

function LeaderboardEntry({ rank, name, score }: any) {
  return (
    <div className="flex items-center justify-between py-1.5 border-b border-white/10 last:border-0">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white text-[10px] font-bold">
          {rank}
        </div>
        <span className="text-white text-xs font-semibold">{name}</span>
      </div>
      <span className="text-emerald-400 text-xs font-bold">{score}</span>
    </div>
  )
}
