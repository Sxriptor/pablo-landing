"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Calendar, Users, Clock, ChevronRight } from "lucide-react"

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

export function PhoneMockup() {
  const [currentGame, setCurrentGame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGame((prev) => (prev + 1) % mockGames.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Floating glass card background elements */}
      <motion.div
        className="absolute top-1/4 -left-10 w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10"
        initial={{ opacity: 0, scale: 0.8, x: -50 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: [0, 20, 0],
          rotate: [0, 5, 0],
        }}
        style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
        transition={{
          opacity: { duration: 0.8, ease: "easeOut" },
          scale: { duration: 0.8, ease: "easeOut" },
          x: { duration: 0.8, ease: "easeOut" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
          rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-10 w-40 h-40 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/10"
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: [0, -25, 0],
          rotate: [0, -5, 0],
        }}
        style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
        transition={{
          opacity: { duration: 0.8, ease: "easeOut", delay: 0.2 },
          scale: { duration: 0.8, ease: "easeOut", delay: 0.2 },
          x: { duration: 0.8, ease: "easeOut", delay: 0.2 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
          rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
      />

      {/* Main phone mockup */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Phone frame with glass effect */}
        <div className="relative w-[280px] h-[580px] sm:w-[320px] sm:h-[640px] rounded-[3rem] bg-black/40 backdrop-blur-2xl border border-white/20 shadow-2xl p-3">
          {/* Inner screen */}
          <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-slate-900/95 to-slate-800/95 overflow-hidden relative">
            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 h-10 flex items-center justify-between px-6 text-white text-xs z-20">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-4">📶</div>
                <div className="w-4 h-4">🔋</div>
              </div>
            </div>

            {/* App header with glass effect */}
            <div className="absolute top-10 left-4 right-4 z-20 backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-lg">Find Games</h3>
                  <p className="text-white/70 text-xs">Near you</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                  P
                </div>
              </div>
            </div>

            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-purple-500/10 to-emerald-500/20" />

            {/* Game cards with animation */}
            <div className="absolute top-36 left-4 right-4 bottom-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentGame}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-3"
                >
                  {/* Featured card with glass effect */}
                  <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-5 shadow-xl">
                    <div className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      OPEN
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-3xl">{mockGames[currentGame].sport.split(" ")[0]}</span>
                      <span className="text-white font-bold text-lg">
                        {mockGames[currentGame].sport.split(" ")[1]}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-white/90 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{mockGames[currentGame].location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/90 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{mockGames[currentGame].time}</span>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2 text-white/90 text-sm">
                          <Users className="w-4 h-4" />
                          <span>{mockGames[currentGame].players} Players</span>
                        </div>
                        <span className="text-emerald-400 text-sm font-semibold">
                          {mockGames[currentGame].distance}
                        </span>
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all">
                      Join Game
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Additional smaller cards */}
                  {mockGames
                    .filter((_, idx) => idx !== currentGame)
                    .slice(0, 2)
                    .map((game, idx) => (
                      <div
                        key={idx}
                        className="backdrop-blur-lg bg-white/5 rounded-xl border border-white/10 p-4"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{game.sport.split(" ")[0]}</span>
                            <div>
                              <p className="text-white text-sm font-semibold">
                                {game.sport.split(" ")[1]}
                              </p>
                              <p className="text-white/60 text-xs">{game.location}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-white/90 text-xs">{game.players}</p>
                            <p className="text-emerald-400 text-xs">{game.distance}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom navigation bar */}
            <div className="absolute bottom-4 left-4 right-4 backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-3 flex justify-around items-center">
              <div className="text-center">
                <div className="text-xl">🏠</div>
                <div className="text-white text-xs mt-1">Home</div>
              </div>
              <div className="text-center">
                <div className="text-xl">🔍</div>
                <div className="text-white/60 text-xs mt-1">Search</div>
              </div>
              <div className="text-center">
                <div className="text-xl">📅</div>
                <div className="text-white/60 text-xs mt-1">Games</div>
              </div>
              <div className="text-center">
                <div className="text-xl">👤</div>
                <div className="text-white/60 text-xs mt-1">Profile</div>
              </div>
            </div>
          </div>

          {/* Phone notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-30" />
        </div>

        {/* Glow effect behind phone */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-emerald-500/30 blur-3xl rounded-full scale-110" />
      </motion.div>

      {/* Floating indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {mockGames.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentGame ? "bg-white w-6" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

