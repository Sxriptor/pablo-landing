"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

import { useState, useRef } from "react"

const testimonials = [
  {
    name: "Paul S",
    initials: "PS",
    role: "PlayCircle User",
    rating: 5,
    text: "Just moved to the area and couldn't find games. Downloaded PlayCircle and was playing within hours! Amazing support team. I'm hooked!",
    image: "/padel-player-testimonial.jpg",
    layout: "right" // image on right
  },
  {
    name: "Maria G",
    initials: "MG",
    role: "PlayCircle User",
    rating: 5,
    text: "PlayCircle completely changed how I play sports. The app is so easy to use and I've met amazing people through the games. The facilities are top-notch and the community is incredibly welcoming!",
    image: "/female-padel-player.png",
    layout: "left" // image on left
  },
  {
    name: "James T",
    initials: "JT",
    role: "PlayCircle User",
    rating: 5,
    text: "As someone who travels for work, PlayCircle has been a game-changer. I can find quality games in any city I visit. The skill matching is spot-on and booking is seamless. Best sports app ever!",
    image: "/padel-player-action.jpg",
    layout: "right" // image on right
  },
  {
    name: "Sarah K",
    initials: "SK",
    role: "PlayCircle User",
    rating: 5,
    text: "The community aspect of PlayCircle sets it apart. I've improved my game and made lifelong friends. The variety of sports and skill levels means there's always a perfect match for me!",
    image: "/tennis-player-female.jpg",
    layout: "left" // image on left
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const current = testimonials[currentIndex]

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
      className="p-6 backdrop-blur h-[500px] flex flex-col overflow-hidden relative rounded-xl border shadow-sm"
      style={{ 
        background: 'linear-gradient(135deg, rgba(13, 18, 22, 0.6) 0%, rgba(69, 104, 130, 0.3) 100%)', 
        borderColor: 'rgba(69, 104, 130, 0.3)',
        isolation: 'isolate'
      }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: current.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
      
      {/* Text content - takes up available space */}
      <div className="flex-1 mb-6 overflow-hidden">
        <p className="text-lg leading-relaxed text-pretty line-clamp-6">{current.text}</p>
      </div>
      
      {/* Profile section - fixed at bottom */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/50 to-primary flex-shrink-0" />
        <div className="min-w-0">
          <p className="font-semibold truncate">{current.name}</p>
          <p className="text-sm text-muted-foreground truncate">{current.role}</p>
        </div>
      </div>
    </div>
  )

  const ImageCard = () => (
    <div className="rounded-2xl overflow-hidden border h-[500px]" style={{ borderColor: 'rgba(69, 104, 130, 0.3)' }}>
      <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/50 to-primary mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">
              {current.initials}
            </span>
          </div>
          <p className="text-white font-semibold text-lg">{current.name}</p>
          <p className="text-slate-300">{current.role}</p>
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-20 px-4" style={{ background: '#050a0f' }}>
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">What Our Players Are Saying</h2>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
            Join a Game
          </Button>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/30 backdrop-blur-sm border border-primary/30 flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ borderColor: 'rgba(69, 104, 130, 0.3)' }}
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/30 backdrop-blur-sm border border-primary/30 flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ borderColor: 'rgba(69, 104, 130, 0.3)' }}
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Testimonial Content with Mobile Swipe Support */}
          <div 
            ref={containerRef}
            className="grid lg:grid-cols-2 gap-8 items-center"
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

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-primary scale-110' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
