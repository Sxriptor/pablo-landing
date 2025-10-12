"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Calendar, Users, Clock, ChevronRight, Trophy, Star, TrendingUp, Check } from "lucide-react"

const mockGames = [
  {
    sport: "⚽ Soccer",
    location: "Central Park",
    time: "Today, 6:00 PM",
    players: "8/10",
    distance: "0.5 km",
  },
  {
    sport: "🏀 Basketball",
    location: "Downtown Court",
    time: "Tomorrow, 5:30 PM",
    players: "6/8",
    distance: "1.2 km",
  },
  {
    sport: "🎾 Tennis",
    location: "West Side Courts",
    time: "Today, 7:00 PM",
    players: "2/4",
    distance: "2.1 km",
  },
]

const userStats = [
  { label: "Games Played", value: "47", icon: Trophy },
  { label: "Win Rate", value: "73%", icon: TrendingUp },
  { label: "Rating", value: "4.8", icon: Star },
]

const upcomingGames = [
  { sport: "⚽", name: "Sunday Soccer", time: "2h", players: "10" },
  { sport: "🏀", name: "B-Ball Night", time: "5h", players: "8" },
  { sport: "🎾", name: "Tennis Match", time: "1d", players: "4" },
]

export function PhoneMockupTriple() {
  const [currentGame, setCurrentGame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGame((prev) => (prev + 1) % mockGames.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center gap-1 xs:gap-2 sm:gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-6">
      {/* Floating glass card background elements - responsive positioning */}
      <motion.div
        className="absolute top-1/4 -left-8 sm:-left-12 md:-left-16 lg:-left-20 xl:-left-24 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10"
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
        className="absolute bottom-1/4 -right-8 sm:-right-12 md:-right-16 lg:-right-20 xl:-right-24 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/10"
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
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-pink-500/20 to-orange-500/20 backdrop-blur-xl border border-white/10 -z-10"
        initial={{ opacity: 0, scale: 0.5, y: -25 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, 8, 0],
          rotate: [0, 5, 0],
        }}
        style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden', transform: 'translate3d(0,0,0)' }}
        transition={{
          opacity: { duration: 1, ease: "easeOut", delay: 0.4 },
          scale: { duration: 1, ease: "easeOut", delay: 0.4 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
          rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
        }}
      />

      {/* First Phone - Find Games Screen - Responsive sizing */}
      <motion.div
        className="relative z-20"
        initial={{ opacity: 0, x: -50, rotate: -8 }}
        animate={{ opacity: 1, x: 0, rotate: -8 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transform: 'translateY(-15px) rotate(-8deg)', willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
      >
        <motion.div 
          className="relative w-[200px] h-[420px] sm:w-[240px] sm:h-[480px] md:w-[260px] md:h-[520px] lg:w-[280px] lg:h-[560px] xl:w-[300px] xl:h-[600px] 2xl:w-[320px] 2xl:h-[640px] rounded-[2.5rem] lg:rounded-[3rem] bg-black/40 backdrop-blur-2xl border border-white/20 shadow-2xl p-2 lg:p-3"
          animate={{
            y: [0, -6, 0],
          }}
          style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full rounded-[1.5rem] sm:rounded-[2.5rem] bg-gradient-to-br from-slate-900/95 to-slate-800/95 overflow-hidden relative">
            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 h-6 sm:h-8 flex items-center justify-between px-2 sm:px-5 text-white text-[8px] sm:text-[10px] z-20">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3">📶</div>
                <div className="w-2 h-2 sm:w-3 sm:h-3">🔋</div>
              </div>
            </div>

            {/* App header */}
            <div className="absolute top-6 sm:top-8 left-2 sm:left-3 right-2 sm:right-3 z-20 backdrop-blur-xl bg-white/10 rounded-xl sm:rounded-2xl border border-white/20 p-2 sm:p-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-base">Find Games</h3>
                  <p className="text-white/70 text-[10px]">Near you</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                  P
                </div>
              </div>
            </div>

            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-purple-500/10 to-emerald-500/20" />

            {/* Game cards */}
            <div className="absolute top-28 left-3 right-3 bottom-16 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentGame}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-2"
                >
                  {/* Featured card */}
                  <div className="relative backdrop-blur-xl bg-white/10 rounded-xl border border-white/20 p-4 shadow-xl">
                    <div className="absolute top-2 right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      OPEN
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{mockGames[currentGame].sport.split(" ")[0]}</span>
                      <span className="text-white font-bold text-sm">
                        {mockGames[currentGame].sport.split(" ")[1]}
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 text-white/90 text-xs">
                        <MapPin className="w-3 h-3" />
                        <span>{mockGames[currentGame].location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-white/90 text-xs">
                        <Clock className="w-3 h-3" />
                        <span>{mockGames[currentGame].time}</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1.5 text-white/90 text-xs">
                          <Users className="w-3 h-3" />
                          <span>{mockGames[currentGame].players}</span>
                        </div>
                        <span className="text-emerald-400 text-xs font-semibold">
                          {mockGames[currentGame].distance}
                        </span>
                      </div>
                    </div>
                    <button className="w-full mt-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 rounded-lg flex items-center justify-center gap-1 text-xs">
                      Join Game
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Smaller cards */}
                  {mockGames
                    .filter((_, idx) => idx !== currentGame)
                    .slice(0, 2)
                    .map((game, idx) => (
                      <div
                        key={idx}
                        className="backdrop-blur-lg bg-white/5 rounded-lg border border-white/10 p-3"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{game.sport.split(" ")[0]}</span>
                            <div>
                              <p className="text-white text-xs font-semibold">
                                {game.sport.split(" ")[1]}
                              </p>
                              <p className="text-white/60 text-[10px]">{game.location}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-white/90 text-[10px]">{game.players}</p>
                            <p className="text-emerald-400 text-[10px]">{game.distance}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom nav */}
            <div className="absolute bottom-3 left-3 right-3 backdrop-blur-xl bg-white/10 rounded-xl border border-white/20 p-2 flex justify-around">
              <div className="text-center">
                <div className="text-lg">🏠</div>
                <div className="text-white text-[8px]">Home</div>
              </div>
              <div className="text-center opacity-60">
                <div className="text-lg">🔍</div>
                <div className="text-white text-[8px]">Search</div>
              </div>
              <div className="text-center opacity-60">
                <div className="text-lg">📅</div>
                <div className="text-white text-[8px]">Games</div>
              </div>
              <div className="text-center opacity-60">
                <div className="text-lg">👤</div>
                <div className="text-white text-[8px]">Profile</div>
              </div>
            </div>
          </div>

          {/* Phone notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30" />
        </motion.div>

        {/* Glow effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-emerald-500/30 blur-3xl rounded-full scale-110" />
      </motion.div>

      {/* Second Phone - Profile/Stats Screen (center, visible on all screens) - Responsive sizing */}
      <motion.div
        className="relative z-30"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        style={{ transform: 'translateY(0px) scale(1.02)', willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
      >
        <motion.div 
          className="relative w-[200px] h-[420px] sm:w-[240px] sm:h-[500px] md:w-[260px] md:h-[540px] lg:w-[280px] lg:h-[580px] xl:w-[300px] xl:h-[620px] 2xl:w-[320px] 2xl:h-[660px] rounded-[2.5rem] lg:rounded-[3rem] bg-black/40 backdrop-blur-2xl border border-white/20 shadow-2xl p-2 lg:p-3"
          animate={{
            y: [0, -8, 0],
            scale: [1.02, 1.04, 1.02],
          }}
          style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-slate-900/95 to-slate-800/95 overflow-hidden relative">
            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-5 text-white text-[10px] z-20">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-3 h-3">📶</div>
                <div className="w-3 h-3">🔋</div>
              </div>
            </div>

            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-pink-500/10 to-orange-500/20" />

            {/* Profile header */}
            <div className="absolute top-8 left-3 right-3 z-20">
              <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white text-2xl font-bold">
                    JD
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">John Doe</h3>
                    <p className="text-white/70 text-[10px]">⚡ Pro Player</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {userStats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-white font-bold text-lg">{stat.value}</div>
                      <div className="text-white/60 text-[9px]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upcoming games section */}
            <div className="absolute top-52 left-3 right-3 bottom-16">
              <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-3">
                <h4 className="text-white font-bold text-sm mb-3">Upcoming Games</h4>
                <div className="space-y-2">
                  {upcomingGames.map((game, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="backdrop-blur-lg bg-white/5 rounded-lg border border-white/10 p-3 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-xl">
                          {game.sport}
                        </div>
                        <div>
                          <p className="text-white text-xs font-semibold">{game.name}</p>
                          <p className="text-white/60 text-[10px]">{game.players} players</p>
                        </div>
                      </div>
                      <div className="text-emerald-400 text-xs font-bold">in {game.time}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Achievement badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-3 backdrop-blur-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-500/30 p-3 flex items-center gap-2"
              >
                <Trophy className="w-8 h-8 text-yellow-400" />
                <div>
                  <p className="text-white text-xs font-bold">5-Game Streak! 🔥</p>
                  <p className="text-white/70 text-[10px]">Keep it going!</p>
                </div>
              </motion.div>
            </div>

            {/* Bottom nav */}
            <div className="absolute bottom-3 left-3 right-3 backdrop-blur-xl bg-white/10 rounded-xl border border-white/20 p-2 flex justify-around">
              <div className="text-center opacity-60">
                <div className="text-lg">🏠</div>
                <div className="text-white text-[8px]">Home</div>
              </div>
              <div className="text-center opacity-60">
                <div className="text-lg">🔍</div>
                <div className="text-white text-[8px]">Search</div>
              </div>
              <div className="text-center opacity-60">
                <div className="text-lg">📅</div>
                <div className="text-white text-[8px]">Games</div>
              </div>
              <div className="text-center">
                <div className="text-lg">👤</div>
                <div className="text-white text-[8px]">Profile</div>
              </div>
            </div>
          </div>

          {/* Phone notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30" />
        </motion.div>

        {/* Glow effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/40 via-pink-500/40 to-orange-500/40 blur-3xl rounded-full scale-120" />
      </motion.div>

      {/* Third Phone - Game Active Screen - Responsive sizing */}
      <motion.div
        className="relative z-20"
        initial={{ opacity: 0, x: 50, rotate: 6 }}
        animate={{ opacity: 1, x: 0, rotate: 6 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        style={{ transform: 'translateY(20px) rotate(6deg)', willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
      >
        <motion.div 
          className="relative w-[180px] h-[380px] sm:w-[200px] sm:h-[420px] md:w-[220px] md:h-[460px] lg:w-[240px] lg:h-[500px] xl:w-[260px] xl:h-[540px] 2xl:w-[280px] 2xl:h-[580px] rounded-[2.5rem] lg:rounded-[3rem] bg-black/40 backdrop-blur-2xl border border-white/20 shadow-2xl p-2 lg:p-3"
          animate={{
            y: [0, 4, 0],
          }}
          style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        >
          <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-slate-900/95 to-slate-800/95 overflow-hidden relative">
            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-5 text-white text-[10px] z-20">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-3 h-3">📶</div>
                <div className="w-3 h-3">🔋</div>
              </div>
            </div>

            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 via-green-500/10 to-blue-500/20" />

            {/* Game Active Header */}
            <div className="absolute top-8 left-3 right-3 backdrop-blur-xl bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl border border-emerald-500/30 p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    ⚽
                  </motion.div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Game Active</h3>
                    <p className="text-emerald-300 text-[10px] font-semibold">In Progress</p>
                  </div>
                </div>
                <motion.div 
                  className="bg-emerald-500 px-2 py-0.5 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <span className="text-white text-[9px] font-bold">LIVE</span>
                </motion.div>
              </div>
            </div>

            {/* Players List */}
            <div className="absolute top-28 left-3 right-3">
              <h4 className="text-white font-bold text-xs mb-2">Players Joined</h4>
              <div className="space-y-2">
                {[
                  { name: "John D.", avatar: "JD" },
                  { name: "Sarah M.", avatar: "SM" },
                  { name: "Mike R.", avatar: "MR" },
                ].map((player, idx) => (
                  <motion.div
                    key={idx}
                    className="backdrop-blur-lg bg-white/10 rounded-lg border border-white/20 p-2 flex items-center justify-between"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold">{player.avatar}</span>
                      </div>
                      <p className="text-white text-[10px] font-semibold">{player.name}</p>
                    </div>
                    <motion.div 
                      className="bg-emerald-500 rounded-full p-0.5"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7 + idx * 0.1, type: "spring" }}
                    >
                      <Check className="w-2.5 h-2.5 text-white" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-3 backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-center">
                    <p className="text-white/90 text-xs font-bold">10/10</p>
                    <p className="text-white/60 text-[9px]">Players</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white/90 text-xs font-bold">6:00 PM</p>
                    <p className="text-white/60 text-[9px]">Start Time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom nav */}
            <div className="absolute bottom-3 left-3 right-3 backdrop-blur-xl bg-white/10 rounded-xl border border-white/20 p-2 flex justify-around">
              <div className="text-center opacity-60">
                <div className="text-lg">🏠</div>
                <div className="text-white text-[8px]">Home</div>
              </div>
              <div className="text-center opacity-60">
                <div className="text-lg">🔍</div>
                <div className="text-white text-[8px]">Search</div>
              </div>
              <div className="text-center">
                <div className="text-lg">📅</div>
                <div className="text-white text-[8px]">Games</div>
              </div>
              <div className="text-center opacity-60">
                <div className="text-lg">👤</div>
                <div className="text-white text-[8px]">Profile</div>
              </div>
            </div>

            {/* Confetti elements */}
            {[...Array(3)].map((_, idx) => (
              <motion.div
                key={idx}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  background: ['#3b82f6', '#10b981', '#f59e0b'][idx],
                  left: `${20 + idx * 25}%`,
                  top: `${15 + idx * 8}%`,
                }}
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2 + idx * 0.5,
                  repeat: Infinity,
                  delay: idx * 0.2,
                }}
              />
            ))}
          </div>

          {/* Phone notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30" />
        </motion.div>

        {/* Glow effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/30 via-green-500/30 to-cyan-500/30 blur-3xl rounded-full scale-110" />
      </motion.div>

      {/* Floating indicators */}
      <motion.div 
        className="absolute -bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex gap-2 z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 1.2,
          ease: "easeOut"
        }}
      >
        {mockGames.map((_, idx) => (
          <motion.div
            key={idx}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              idx === currentGame ? "bg-white w-4" : "bg-white/30"
            }`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.3, 
              delay: 1.4 + idx * 0.1,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

