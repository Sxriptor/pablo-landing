"use client"

import { Download, Search, Play } from "lucide-react"
import { IPhoneDownloadMockup } from "./iphone-download-mockup"
import { IPhoneGameSearchMockup } from "./iphone-game-search-mockup"
import { IPhoneGameActiveMockup } from "./iphone-game-active-mockup"
import { motion } from "framer-motion"

export function SimpleHowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Download,
      title: "Download the App",
      description: "Get started in seconds with our easy-to-use mobile app available on iOS and Android.",
    },
    {
      number: "02",
      icon: Search,
      title: "Find Your Game",
      description: "Browse games near you filtered by sport, skill level, time, and location.",
    },
    {
      number: "03",
      icon: Play,
      title: "Play & Connect",
      description: "Book your spot, show up, and enjoy playing sports with your new community.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 px-4 overflow-hidden" style={{ background: '#0a0f14' }}>
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-xs sm:text-sm font-semibold mb-2" 
            style={{ color: '#456882', display: 'inline-block', willChange: 'transform', backfaceVisibility: 'hidden' }}
            animate={{ 
              y: [0, -2, 0, 2, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            HOW IT WORKS
          </motion.p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Get Playing in Minutes</h2>
        </motion.div>

        {/* Mobile: Horizontal Scroll Carousel - Better responsive sizing */}
        <div className="lg:hidden overflow-x-auto overflow-y-visible pb-4 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar">
          <div className="flex gap-4 sm:gap-6 min-w-max">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-md w-[80vw] sm:w-[75vw] md:w-96 snap-center flex-shrink-0 overflow-visible"
                style={{
                  background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.15) 0%, rgba(13, 18, 22, 0.8) 100%)',
                  border: '1px solid rgba(69, 104, 130, 0.3)',
                  boxShadow: '0 0 40px rgba(69, 104, 130, 0.1)'
                }}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.span 
                    className="text-5xl font-bold opacity-20" 
                    style={{ color: '#456882', display: 'inline-block', willChange: 'transform', backfaceVisibility: 'hidden' }}
                    animate={{ 
                      y: [0, -3, 0, 3, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  >
                    {step.number}
                  </motion.span>
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(69, 104, 130, 0.2)', border: '1px solid rgba(69, 104, 130, 0.4)' }}
                  >
                    <step.icon className="w-8 h-8" style={{ color: '#456882' }} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{step.description}</p>
                
                {/* iPhone mockup for step 01 on mobile */}
                {index === 0 && (
                  <div className="mt-6">
                    <IPhoneDownloadMockup />
                  </div>
                )}
                {/* iPhone mockup for step 02 on mobile */}
                {index === 1 && (
                  <div className="mt-6">
                    <IPhoneGameSearchMockup />
                  </div>
                )}
                {/* iPhone mockup for step 03 on mobile */}
                {index === 2 && (
                  <div className="mt-6">
                    <IPhoneGameActiveMockup />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: Vertical List - Better responsive layout */}
        <div className="hidden lg:block max-w-7xl mx-auto space-y-8 lg:space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12 items-start lg:items-center pb-8 lg:pb-12 border-b border-border/30 last:border-b-0"
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -50 : 50,
                scale: 0.95
              }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1,
                ease: "easeOut"
              }}
            >
              <div className="flex items-center gap-4 lg:gap-6 lg:w-1/4 xl:w-1/3">
                <motion.span 
                  className="text-4xl lg:text-5xl xl:text-6xl font-bold opacity-20" 
                  style={{ color: '#456882', display: 'inline-block', willChange: 'transform', backfaceVisibility: 'hidden' }}
                  animate={{ 
                    y: [0, -4, 0, 4, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.7
                  }}
                >
                  {step.number}
                </motion.span>
                <div
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(69, 104, 130, 0.15)', border: '1px solid rgba(69, 104, 130, 0.3)' }}
                >
                  <step.icon className="w-6 h-6 lg:w-7 lg:h-7" style={{ color: '#456882' }} />
                </div>
              </div>
              <div className="lg:w-1/3 xl:w-1/4">
                <h3 className="text-xl lg:text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm lg:text-base">{step.description}</p>
              </div>
              {/* iPhone mockup for step 01 - Better responsive sizing */}
              {index === 0 && (
                <div className="lg:w-5/12 xl:w-2/5 flex justify-center scale-75 lg:scale-85 xl:scale-100">
                  <IPhoneDownloadMockup />
                </div>
              )}
              {/* iPhone mockup for step 02 - Better responsive sizing */}
              {index === 1 && (
                <div className="lg:w-5/12 xl:w-2/5 flex justify-center scale-75 lg:scale-85 xl:scale-100">
                  <IPhoneGameSearchMockup />
                </div>
              )}
              {/* iPhone mockup for step 03 - Better responsive sizing */}
              {index === 2 && (
                <div className="lg:w-5/12 xl:w-2/5 flex justify-center scale-75 lg:scale-85 xl:scale-100">
                  <IPhoneGameActiveMockup />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
