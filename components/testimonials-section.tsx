"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

import { useState, useRef, useEffect } from "react"

const testimonials = [
  {
    name: "Paul S",
    initials: "PS",
    role: "PlayCircle User",
    rating: 5,
    text: "Just moved to the area and couldn't find games. Downloaded PlayCircle and was playing within hours! Amazing support team. I'm hooked!",
    image: "/paul.jpeg",
    layout: "right" // image on right
  },
  {
    name: "Maria G",
    initials: "MG",
    role: "PlayCircle User",
    rating: 5,
    text: "PlayCircle completely changed how I play sports. The app is so easy to use and I've met amazing people through the games. The facilities are top-notch and the community is incredibly welcoming!",
    image: "/maria.jpg",
    layout: "left" // image on left
  },
  {
    name: "James T",
    initials: "JT",
    role: "PlayCircle User",
    rating: 5,
    text: "As someone who travels for work, PlayCircle has been a game-changer. I can find quality games in any city I visit. The skill matching is spot-on and booking is seamless. Best sports app ever!",
    image: "/james.jpg",
    layout: "right" // image on right
  },
  {
    name: "Sarah K",
    initials: "SK",
    role: "PlayCircle User",
    rating: 5,
    text: "The community aspect of PlayCircle sets it apart. I've improved my game and made lifelong friends. The variety of sports and skill levels means there's always a perfect match for me!",
    image: "/sarah.jpeg",
    layout: "left" // image on left
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({})
  const containerRef = useRef<HTMLDivElement>(null)
  const current = testimonials[currentIndex]

  // Preload all images
  useEffect(() => {
    const preloadImages = () => {
      testimonials.forEach((testimonial) => {
        if (testimonial.image) {
          const img = new Image()
          img.onload = () => {
            setImagesLoaded(prev => ({
              ...prev,
              [testimonial.name]: true
            }))
          }
          img.onerror = () => {
            setImagesLoaded(prev => ({
              ...prev,
              [testimonial.name]: false
            }))
          }
          img.src = testimonial.image
        }
      })
    }

    preloadImages()
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Touch/swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    e.preventDefault()
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return
    setIsDragging(false)
    
    const endX = e.changedTouches[0].clientX
    const diffX = startX - endX
    const threshold = 50 // minimum swipe distance
    
    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        nextTestimonial() // swipe left = next
      } else {
        prevTestimonial() // swipe right = previous
      }
    }
  }



  const TestimonialCard = () => (
    <div 
      className="p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 backdrop-blur h-[380px] xs:h-[400px] sm:h-[440px] md:h-[480px] lg:h-[520px] xl:h-[540px] flex flex-col overflow-hidden relative rounded-xl border shadow-sm"
      style={{ 
        background: 'linear-gradient(135deg, rgba(13, 18, 22, 0.6) 0%, rgba(69, 104, 130, 0.3) 100%)', 
        borderColor: 'rgba(69, 104, 130, 0.3)',
        isolation: 'isolate'
      }}
    >
      {/* Stars - Mobile-optimized spacing */}
      <div className="flex gap-1 xs:gap-1.5 mb-4 xs:mb-5 sm:mb-6 lg:mb-7 flex-shrink-0">
        {Array.from({ length: current.rating }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 fill-primary text-primary flex-shrink-0" />
        ))}
      </div>
      
      {/* Text content - Mobile-optimized with better overflow handling */}
      <div className="flex-1 mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 overflow-hidden min-h-0">
        <p className="text-sm xs:text-base sm:text-lg lg:text-xl leading-relaxed text-pretty text-white/90 line-clamp-4 xs:line-clamp-5 sm:line-clamp-6 md:line-clamp-7">
          "{current.text}"
        </p>
      </div>
      
      {/* Profile section - Mobile-optimized spacing */}
      <div className="flex items-center gap-2.5 xs:gap-3 sm:gap-4 mt-auto pt-1 xs:pt-2 flex-shrink-0">
        <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-primary/50 to-primary flex-shrink-0 overflow-hidden border-2 border-white/20">
          {(current.name === "Paul S" || current.name === "Maria G" || current.name === "James T" || current.name === "Sarah K") && current.image && imagesLoaded[current.name] ? (
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image fails to load
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                const parent = target.parentElement
                if (parent) {
                  parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-primary/50 to-primary flex items-center justify-center"><span class="text-xs font-bold text-white">${current.initials}</span></div>`
                }
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/50 to-primary flex items-center justify-center">
              <span className="text-xs xs:text-sm sm:text-base font-bold text-white">{current.initials}</span>
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold truncate text-sm xs:text-base sm:text-lg text-white">{current.name}</p>
          <p className="text-xs xs:text-sm sm:text-base text-muted-foreground truncate">{current.role}</p>
        </div>
      </div>
    </div>
  )

  const ImageCard = () => {
    // Use actual image for all testimonials now that we have all photos
    const hasImage = (current.name === "Paul S" || current.name === "Maria G" || current.name === "James T" || current.name === "Sarah K") && current.image
    const isImageLoaded = imagesLoaded[current.name]
    
    return (
      <div className="rounded-2xl overflow-hidden border h-[380px] xs:h-[400px] sm:h-[440px] md:h-[480px] lg:h-[520px] xl:h-[540px] relative" style={{ borderColor: 'rgba(69, 104, 130, 0.3)' }}>
        {hasImage && isImageLoaded !== false ? (
          <>
            {/* Blurred background image with fallback */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 transition-opacity duration-300"
              style={{
                backgroundImage: `url(${current.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: 'blur(12px) brightness(0.4)',
                transform: 'scale(1.1)',
                opacity: isImageLoaded ? 1 : 0
              }}
            />
            
            {/* Loading state background */}
            {!isImageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800" />
            )}
            
            {/* Lighter gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
            
            {/* Content */}
            <div className="relative w-full h-full flex items-center justify-center p-4 xs:p-5 sm:p-6 z-20">
              <div className="text-center">
                {/* Profile image in circle */}
                <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full mx-auto mb-3 xs:mb-4 sm:mb-5 lg:mb-6 overflow-hidden border-3 border-white/30 shadow-xl bg-white/10">
                  {isImageLoaded ? (
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-full h-full object-cover transition-opacity duration-300"
                      style={{ opacity: isImageLoaded ? 1 : 0 }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/50 to-primary flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{current.initials}</span>
                    </div>
                  )}
                </div>
                <p className="text-white font-semibold text-base xs:text-lg sm:text-xl lg:text-2xl mb-1 xs:mb-2 drop-shadow-lg">{current.name}</p>
                <p className="text-white/90 text-sm xs:text-base sm:text-lg drop-shadow-md">{current.role}</p>
              </div>
            </div>
          </>
        ) : (
          // Fallback for testimonials without images or loading failed
          <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center p-4 xs:p-5 sm:p-6">
            <div className="text-center">
              <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full bg-gradient-to-br from-primary/50 to-primary mx-auto mb-3 xs:mb-4 sm:mb-5 lg:mb-6 flex items-center justify-center">
                <span className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                  {current.initials}
                </span>
              </div>
              <p className="text-white font-semibold text-base xs:text-lg sm:text-xl lg:text-2xl mb-1 xs:mb-2">{current.name}</p>
              <p className="text-slate-300 text-sm xs:text-base sm:text-lg">{current.role}</p>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#050a0f' }}>
      {/* Hidden image preloader */}
      <div className="hidden">
        {testimonials.map((testimonial, index) => (
          testimonial.image && (
            <img
              key={index}
              src={testimonial.image}
              alt={`Preload ${testimonial.name}`}
              onLoad={() => setImagesLoaded(prev => ({ ...prev, [testimonial.name]: true }))}
              onError={() => setImagesLoaded(prev => ({ ...prev, [testimonial.name]: false }))}
            />
          )
        ))}
      </div>
      
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-balance">What Our Players Are Saying</h2>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 sm:px-6 text-sm sm:text-base">
            Join a Game
          </Button>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          {/* Navigation Arrows - Fixed z-index and positioning */}
          <button
            onClick={prevTestimonial}
            className="absolute left-1 xs:left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full bg-primary/30 hover:bg-primary/50 backdrop-blur-sm border border-primary/40 flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
            style={{ borderColor: 'rgba(69, 104, 130, 0.4)' }}
            type="button"
          >
            <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-primary" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-1 xs:right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full bg-primary/30 hover:bg-primary/50 backdrop-blur-sm border border-primary/40 flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
            style={{ borderColor: 'rgba(69, 104, 130, 0.4)' }}
            type="button"
          >
            <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-primary" />
          </button>

          {/* Testimonial Content with Mobile Swipe Support - Mobile-optimized spacing */}
          <div 
            ref={containerRef}
            className="grid lg:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 items-center px-1 xs:px-2 sm:px-0"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Mobile: Only show testimonial card */}
            <div className="lg:hidden">
              <TestimonialCard />
            </div>
            
            {/* Desktop: Show alternating layout */}
            <div className="hidden lg:contents">
              {current.layout === "right" ? (
                <>
                  <TestimonialCard />
                  <ImageCard />
                </>
              ) : (
                <>
                  <ImageCard />
                  <TestimonialCard />
                </>
              )}
            </div>
          </div>

          {/* Dots Indicator - Mobile-optimized spacing */}
          <div className="flex justify-center mt-4 xs:mt-5 sm:mt-6 md:mt-7 lg:mt-8 gap-1.5 xs:gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-primary scale-110' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
