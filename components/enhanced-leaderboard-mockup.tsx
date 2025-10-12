"use client"

import { motion } from "framer-motion"
import { Trophy, TrendingUp, Settings, Bell, Menu } from "lucide-react"

const topPlayers = [
  { name: "Maria Garcia", username: "@maria_ace", score: 2640, rank: 2, color: "from-blue-500 to-blue-600", initial: "M" },
  { name: "Carlos Rodriguez", username: "@carlos_padel", score: 2850, rank: 1, color: "from-orange-500 to-red-500", initial: "C" },
  { name: "Juan Martinez", username: "@juan_smash", score: 2420, rank: 3, color: "from-green-500 to-emerald-600", initial: "J" }
]

const leaderboardPlayers = [
  { name: "Sofia Lopez", username: "@sofia_spin", score: 2180, rank: 4, initial: "S", trend: "up" },
  { name: "Diego Santos", username: "@diego_master", score: 1950, rank: 5, initial: "D", trend: "up" },
  { name: "Ana Torres", username: "@ana_volleys", score: 1820, rank: 6, initial: "A", trend: "down" },
  { name: "Luis Hernandez", username: "@luis_power", score: 1690, rank: 7, initial: "L", trend: "up" },
  { name: "Elena Ruiz", username: "@elena_drop", score: 1540, rank: 8, initial: "E", trend: "down" }
]

const sports = ["Pickleball", "Basketball"]

export function EnhancedLeaderboardMockup() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [1, -1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transformOrigin: 'center center' }}
        >
          {/* Phone frame */}
          <div className="relative w-[280px] h-[600px] rounded-[3rem] bg-black/50 backdrop-blur-xl border border-white/20 shadow-2xl p-3 overflow-hidden">
            {/* Inner screen */}
            <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden relative">
              {/* Status bar */}
              <div className="absolute top-0 left-0 right-0 h-11 flex items-center justify-between px-6 text-white text-sm z-20 bg-slate-900/80 backdrop-blur-sm">
                <span className="font-semibold">5:38</span>
                <div className="flex gap-1 items-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/20 via-orange-500/10 to-slate-900" />

              {/* Header */}
              <div className="absolute top-11 left-4 right-4 z-20">
                <div className="flex items-center gap-3 mb-4">
                  <motion.button 
                    className="w-12 h-12 rounded-full bg-yellow-500/20 backdrop-blur-xl border border-yellow-500/30 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Menu className="w-6 h-6 text-yellow-400" />
                  </motion.button>
                  
                  <div className="flex-1 flex gap-2">
                    {sports.map((sport, index) => (
                      <motion.div
                        key={index}
                        className="px-4 py-2 rounded-full bg-yellow-500/20 backdrop-blur-xl border border-yellow-500/30 text-white text-sm font-semibold"
                        whileHover={{ scale: 1.05 }}
                      >
                        {sport}
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.button 
                    className="w-12 h-12 rounded-full bg-yellow-500/20 backdrop-blur-xl border border-yellow-500/30 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Settings className="w-6 h-6 text-yellow-400" />
                  </motion.button>
                  
                  <motion.button 
                    className="w-12 h-12 rounded-full bg-yellow-500/20 backdrop-blur-xl border border-yellow-500/30 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Bell className="w-6 h-6 text-yellow-400" />
                  </motion.button>
                </div>

                {/* Scope tabs */}
                <div className="flex gap-1 mb-6">
                  {["Local", "National", "Global"].map((scope, index) => (
                    <motion.div
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                        index === 0 
                          ? 'bg-emerald-500 text-white' 
                          : 'text-white/70'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {scope}
                      {index === 0 && <div className="text-xs text-emerald-200 mt-0.5">200 mi</div>}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Top 3 podium */}
              <div className="absolute top-44 left-4 right-4 z-20">
                <div className="flex items-end justify-center gap-2 mb-6">
                  {topPlayers.map((player, index) => (
                    <motion.div
                      key={index}
                      className="text-center relative"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                      {/* Trophy for winner */}
                      {player.rank === 1 && (
                        <motion.div 
                          className="absolute -top-8 left-1/2 -translate-x-1/2"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Trophy className="w-8 h-8 text-yellow-400" />
                        </motion.div>
                      )}
                      
                      {/* Avatar */}
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${player.color} flex items-center justify-center text-white text-xl font-bold mb-2 relative`}>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-slate-800 border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                          {player.rank}
                        </div>
                        {player.initial}
                      </div>
                      
                      <div className="text-white text-xs font-semibold">{player.name.split(' ')[0]}</div>
                      <div className="text-white text-xs">{player.username}</div>
                      <div className={`text-lg font-bold ${
                        player.rank === 1 ? 'text-yellow-400' : 
                        player.rank === 2 ? 'text-blue-400' : 'text-green-400'
                      }`}>
                        {player.score}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Leaderboard list */}
              <div className="absolute top-80 left-4 right-4 bottom-4">
                <div className="space-y-2">
                  {leaderboardPlayers.map((player, index) => (
                    <motion.div
                      key={index}
                      className="backdrop-blur-xl bg-emerald-500/20 rounded-xl border border-emerald-500/30 p-3 flex items-center gap-3"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      {/* Rank */}
                      <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                        {player.rank}
                      </div>
                      
                      {/* Avatar */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold">
                        {player.initial}
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1">
                        <div className="text-white font-semibold text-sm">{player.name}</div>
                        <div className="text-white/70 text-xs">{player.username}</div>
                      </div>
                      
                      {/* Score */}
                      <div className="text-right">
                        <div className="text-white font-bold">{player.score}</div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className={`w-3 h-3 ${
                            player.trend === 'up' ? 'text-green-400' : 'text-red-400'
                          } ${player.trend === 'down' ? 'rotate-180' : ''}`} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Phone notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-30 shadow-xl" />
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-yellow-500/30 via-orange-500/30 to-transparent blur-2xl" />
        </motion.div>
      </motion.div>
    </div>
  )
}