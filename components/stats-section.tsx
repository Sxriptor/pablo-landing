"use client"

import { Users, MapPin, Trophy, Calendar, TrendingUp, Heart } from "lucide-react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"

function CountUpAnimation({ value }: { value: string }) {
  const nodeRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(nodeRef, { once: true, amount: 0.3 })
  const [displayValue, setDisplayValue] = useState(value) // Show actual value immediately
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 25,
    stiffness: 40
  })

  useEffect(() => {
    if (isInView) {
      let target = 0

      // Parse different value formats
      if (value.includes("/")) {
        // Rating format like "4.9/5"
        target = parseFloat(value.split("/")[0])
      } else if (value.includes(",")) {
        // Comma-separated numbers like "5,000+"
        const numericPart = value.replace(/[^\d]/g, "")
        target = parseInt(numericPart, 10)
      } else {
        // Simple numbers like "50+"
        const numericPart = value.replace(/[^\d]/g, "")
        target = parseInt(numericPart, 10)
      }

      // Start animation from 0 to target
      motionValue.set(0)
      setTimeout(() => motionValue.set(target), 100)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (isInView) {
        let animatedValue = ""

        if (value.includes("/")) {
          // Rating format: show decimal
          const suffix = "/" + value.split("/")[1]
          animatedValue = latest.toFixed(1) + suffix
        } else if (value.includes(",")) {
          // Large numbers with commas
          const roundedValue = Math.floor(latest)
          animatedValue = roundedValue.toLocaleString()
          if (value.includes("+")) animatedValue += "+"
        } else {
          // Simple numbers
          const roundedValue = Math.floor(latest)
          animatedValue = roundedValue.toString()
          if (value.includes("+")) animatedValue += "+"
        }

        setDisplayValue(animatedValue)
      }
    })

    return unsubscribe
  }, [springValue, value, isInView])

  return (
    <div ref={nodeRef}>
      <div>{displayValue}</div>
    </div>
  )
}

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "5,000+",
      label: "Active Players",
    },
    {
      icon: MapPin,
      value: "50+",
      label: "Partner Venues",
    },
    {
      icon: Calendar,
      value: "10,000+",
      label: "Games Played",
    },
    {
      icon: Trophy,
      value: "4.9/5",
      label: "Average Rating",
    },
  ]

  return (
    <section className="py-20 sm:py-32 lg:py-48 px-4 sm:px-6 lg:px-8" style={{ background: '#050a0f' }}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16 sm:mb-24 lg:mb-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">Join a Growing Community</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            PlayCircle connects thousands of players every day, making sports more accessible and enjoyable for everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-3 sm:space-y-4"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(69, 104, 130, 0.2)', border: '2px solid rgba(69, 104, 130, 0.4)' }}
              >
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" style={{ color: '#456882' }} />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1" style={{ color: '#456882' }}>
                  <CountUpAnimation value={stat.value} />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Highlights - Better responsive layout */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <motion.div
            className="text-center p-5 sm:p-6 rounded-lg"
            style={{ background: 'rgba(69, 104, 130, 0.1)' }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 mr-2" style={{ color: '#456882' }} />
              <span className="text-base sm:text-lg font-semibold" style={{ color: '#456882' }}>Growing Fast</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Our community grows by 200+ new players every week, creating more opportunities to play and connect.
            </p>
          </motion.div>

          <motion.div
            className="text-center p-5 sm:p-6 rounded-lg"
            style={{ background: 'rgba(69, 104, 130, 0.1)' }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 mr-2" style={{ color: '#456882' }} />
              <span className="text-base sm:text-lg font-semibold" style={{ color: '#456882' }}>Loved by Players</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              "PlayCircle transformed how I find games. I've made amazing friends and improved my skills!"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
