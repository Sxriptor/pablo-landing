import { Search, Calendar, Users } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      title: "Find Your Game",
      description:
        "Explore hundreds of games at top facilities, with convenient times and skill levels that fit your preference.",
      image: "/padel-app-game-search-interface.jpg",
    },
    {
      icon: Calendar,
      title: "Reserve your spot",
      description: "View game details, invite friends and reserve with other players on the roster.",
      image: "/padel-app-booking-interface.jpg",
    },
    {
      icon: Users,
      title: "Show Up & Play",
      description:
        "Check-in at the facility, play the beautiful game and make new connections with people who share your passion.",
      image: "/padel-players-on-court.jpg",
    },
  ]

  return (
    <section className="py-20 px-4" style={{ background: '#060606' }}>
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-primary text-sm font-semibold mb-2">How it works</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">From Download to Kickoff in 3 Simple Steps</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="space-y-6 p-6 rounded-2xl backdrop-blur" style={{ background: 'linear-gradient(135deg, rgba(13, 18, 22, 0.6) 0%, rgba(69, 104, 130, 0.3) 100%)', border: '1px solid rgba(69, 104, 130, 0.3)' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(69, 104, 130, 0.3)' }}>
                <step.icon className="w-6 h-6" style={{ color: '#456882' }} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-pretty">{step.description}</p>
              </div>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(69, 104, 130, 0.3)' }}>
                <img
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
