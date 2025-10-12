"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Users, Clock, Trophy, Calendar, Zap, MessageCircle, Send } from "lucide-react"

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
          className="md:-mr-12 lg:-mr-16 xl:-mr-20"
          style={{ 
            transform: 'translateY(-12px) rotate(-12deg)',
            zIndex: 10
          }}
          animateY={[-6, 0, -6]}
        >
          <GameDiscoveryScreen />
        </MockupFrame>

        {/* Center Phone - Profile/Stats (larger, centered) */}
        <MockupFrame
          delay={0.1}
          className="md:scale-110 lg:scale-125"
          style={{ 
            transform: 'translateY(0px) scale(1.15)',
            zIndex: 20
          }}
          animateY={[-8, 0, -8]}
          animateScale={[1.15, 1.18, 1.15]}
        >
          <ProfileStatsScreen />
        </MockupFrame>

        {/* Right Phone - Leaderboard */}
        <MockupFrame
          delay={0.3}
          className="md:-ml-12 lg:-ml-16 xl:-ml-20"
          style={{ 
            transform: 'translateY(16px) rotate(12deg)',
            zIndex: 10
          }}
          animateY={[4, 0, 4]}
        >
          <LeaderboardScreen />
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
  style = {},
  animateY = [0, -6, 0],
  animateScale
}: { 
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
  animateY?: number[]
  animateScale?: number[]
}) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      style={{ ...style, willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
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
 * Game Discovery Screen Content
 */
function GameDiscoveryScreen() {
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

      {/* Header */}
      <div className="absolute top-8 left-3 right-3 z-20">
        <div className="flex items-center gap-2 mb-3">
          <motion.button 
            className="w-8 h-8 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-3 h-3 bg-emerald-400 rounded-sm" />
          </motion.button>
          
          <div className="flex-1 relative">
            <div className="backdrop-blur-xl bg-white/10 rounded-xl border border-white/20 px-3 py-2 flex items-center gap-2">
              <div className="w-3 h-3 text-white/60">🔍</div>
              <span className="text-white/60 text-[10px]">Search games</span>
            </div>
          </div>
        </div>

        {/* Date selector */}
        <div className="flex gap-1 mb-2">
          <div className="px-2 py-1 rounded-full text-[9px] font-semibold bg-white text-slate-900">
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
            gradient="from-emerald-500/30 to-teal-500/30"
          />
          <GameCard 
            title="Eastside League"
            time="Today 9:00pm"
            duration="90m"
            players="3/4"
            price="$20"
            type="COMP"
            gradient="from-emerald-500/20 to-teal-500/20"
          />
        </div>
      </div>
    </>
  )
}

/**
 * Profile/Stats Screen Content
 */
function ProfileStatsScreen() {
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
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-slate-900" />

      {/* Profile header */}
      <div className="absolute top-8 left-3 right-3 z-20">
        <div className="flex items-center gap-2 mb-4">
          <motion.div 
            className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center border-2 border-white/20 shadow-xl"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <div className="w-4 h-4 bg-slate-800 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>
          </motion.div>
          
          <div className="flex-1">
            <h2 className="text-white text-xs font-bold">Alex Johnson</h2>
            <p className="text-white/70 text-[8px]">@alexj_sports</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-1 mb-3">
          <ActionButton icon={<Users className="w-2.5 h-2.5" />} label="Friends" color="from-green-500 to-emerald-600" />
          <ActionButton icon={<MessageCircle className="w-2.5 h-2.5" />} label="Message" color="from-blue-500 to-blue-600" />
          <ActionButton icon={<Send className="w-2.5 h-2.5" />} label="Invite" color="from-purple-500 to-pink-500" />
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
        <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl border border-emerald-500/30 p-3 shadow-2xl h-full">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <Trophy className="w-2.5 h-2.5 text-white" />
            </div>
            <div>
              <h3 className="text-white text-xs font-bold">Performance</h3>
              <p className="text-white/70 text-[7px]">This Month</p>
            </div>
          </div>

          <div className="mb-3">
            <div className="text-white text-xl font-bold mb-0.5">12</div>
            <div className="text-white/70 text-[8px]">matches played</div>
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
 * Leaderboard Screen Content
 */
function LeaderboardScreen() {
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
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/20 via-orange-500/10 to-slate-900" />

      {/* Header */}
      <div className="absolute top-8 left-2 right-2 z-20">
        <div className="flex items-center gap-1 mb-3">
          <motion.button 
            className="w-6 h-6 rounded-full bg-yellow-500/20 backdrop-blur-xl border border-yellow-500/30 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-sm" />
          </motion.button>
          
          <div className="flex gap-0.5 flex-wrap">
            <div className="px-1.5 py-0.5 rounded-full bg-yellow-500/20 backdrop-blur-xl border border-yellow-500/30 text-white text-[7px] font-semibold">
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
        <div className="backdrop-blur-xl bg-white/10 rounded-xl border border-white/20 p-3">
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
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white text-[10px] font-bold">
          {rank}
        </div>
        <span className="text-white text-xs font-semibold">{name}</span>
      </div>
      <span className="text-emerald-400 text-xs font-bold">{score}</span>
    </div>
  )
}
