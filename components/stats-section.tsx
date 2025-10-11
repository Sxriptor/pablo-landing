"use client"

import { Users, MapPin, Trophy, Calendar, TrendingUp, Heart } from "lucide-react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

function CountUpAnimation({ value }: { value: string }) {
  const nodeRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { 
    damping: 30,
    stiffness: 50,
    duration: 2000
  })
  const displayRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (isInView) {
      // Parse the numeric value
      let target = 0
      let suffix = ""
      let prefix = ""
      
      // Handle different formats
      if (value.includes("/")) {
        // Rating format like "4.9/5"
        const parts = value.split("/")
        target = parseFloat(parts[0])
        suffix = "/" + parts[1]
      } else {
        // Remove commas and extract number
        const matches = value.match(/([\d,\.]+)(.*)/)
        if (matches) {
          target = parseFloat(matches[1].replace(/,/g, ""))
          suffix = matches[2]
        }
      }

      motionValue.set(target)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    let lastUpdateTime = 0
    const updateThrottle = 16 // ~60fps
    
    const unsubscribe = springValue.on("change", (latest) => {
      const now = Date.now()
      if (now - lastUpdateTime < updateThrottle) return
      lastUpdateTime = now
      
      // Use RAF for smooth updates
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      
      rafRef.current = requestAnimationFrame(() => {
        if (displayRef.current) {
          let displayValue = ""
          
          // Format based on original value
          if (value.includes("/")) {
            // Rating format
            const suffix = value.split("/")[1]
            displayValue = latest.toFixed(1) + "/" + suffix
          } else if (value.includes(",")) {
            // Comma-separated numbers
            const roundedValue = Math.floor(latest)
            displayValue = roundedValue.toLocaleString()
            // Add suffix (like "+")
            const suffix = value.match(/[^\d,]+$/)?.[0] || ""
            displayValue += suffix
          } else {
            // Simple numbers
            const roundedValue = Math.floor(latest)
            displayValue = roundedValue.toString()
            const suffix = value.match(/[^\d]+$/)?.[0] || ""
            displayValue += suffix
          }
          
          displayRef.current.textContent = displayValue
        }
      })
    })

    return () => {
      unsubscribe()
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [springValue, value])

  return (
    <div ref={nodeRef} style={{ willChange: 'contents' }}>
      <div ref={displayRef} style={{ backfaceVisibility: 'hidden' }}>0</div>
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
    <section className="py-48 px-4" style={{ background: '#050a0f' }}>
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Join a Growing Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            PlayCircle connects thousands of players every day, making sports more accessible and enjoyable for everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center text-center space-y-4"
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
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(69, 104, 130, 0.2)', border: '2px solid rgba(69, 104, 130, 0.4)' }}
              >
                <stat.icon className="w-8 h-8" style={{ color: '#456882' }} />
              </div>
              <div>
                <div className="text-4xl font-bold mb-1" style={{ color: '#456882' }}>
                  <CountUpAnimation value={stat.value} />
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Highlights */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            className="text-center p-6 rounded-lg" 
            style={{ background: 'rgba(69, 104, 130, 0.1)' }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 mr-2" style={{ color: '#456882' }} />
              <span className="text-lg font-semibold" style={{ color: '#456882' }}>Growing Fast</span>
            </div>
            <p className="text-muted-foreground">
              Our community grows by 200+ new players every week, creating more opportunities to play and connect.
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center p-6 rounded-lg" 
            style={{ background: 'rgba(69, 104, 130, 0.1)' }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 mr-2" style={{ color: '#456882' }} />
              <span className="text-lg font-semibold" style={{ color: '#456882' }}>Loved by Players</span>
            </div>
            <p className="text-muted-foreground">
              "PlayCircle transformed how I find games. I've made amazing friends and improved my skills!"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
