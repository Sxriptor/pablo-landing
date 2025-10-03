"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Paul S",
    role: "Plei player",
    rating: 5,
    text: "I just moved to the area and was having a hard time trying to find pick up games. I downloaded the app and was literally playing in a game a few hours later! The support team at Plei is awesome. They also helped me find a game for that evening. I look forward to touring the city and playing in the games they have to offer. I'm hooked on Plei. You guys are awesome!",
    image: "/padel-player-testimonial.jpg",
  },
  {
    name: "Maria G",
    role: "Plei player",
    rating: 5,
    text: "Plei has completely changed how I play sports. The app is so easy to use and I've met so many amazing people through the games. The facilities are always top-notch and the community is incredibly welcoming. Highly recommend!",
    image: "/female-padel-player.png",
  },
  {
    name: "James T",
    role: "Plei player",
    rating: 5,
    text: "As someone who travels frequently for work, Plei has been a game-changer. I can find quality games in any city I visit. The skill matching is spot-on and the booking process is seamless. Best sports app I've ever used!",
    image: "/padel-player-action.jpg",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-20 px-4" style={{ background: '#050a0f' }}>
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">What Our Players Are Saying</h2>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
            Join a Game
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <Card className="p-8 backdrop-blur space-y-6" style={{ background: 'linear-gradient(135deg, rgba(13, 18, 22, 0.6) 0%, rgba(69, 104, 130, 0.3) 100%)', borderColor: 'rgba(69, 104, 130, 0.3)' }}>
            <div className="flex gap-1">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg leading-relaxed text-pretty">{current.text}</p>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/50 to-primary" />
                <div>
                  <p className="font-semibold">{current.name}</p>
                  <p className="text-sm text-muted-foreground">{current.role}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="rounded-full bg-transparent" onClick={prev}>
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full bg-transparent" onClick={next}>
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>

          <div className="rounded-2xl overflow-hidden">
            <img
              src={current.image || "/placeholder.svg"}
              alt={current.name}
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
