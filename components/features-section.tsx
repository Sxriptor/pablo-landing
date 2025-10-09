import { Bell, Shield, CreditCard, MessageSquare, MapPin, UserCheck } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: MapPin,
      title: "Location-Based Search",
      description: "Find games happening right in your neighborhood or explore new venues across the city.",
    },
    {
      icon: UserCheck,
      title: "Skill Matching",
      description: "Play with people at your level. Our smart matching ensures balanced and enjoyable games.",
    },
    {
      icon: Bell,
      title: "Real-Time Updates",
      description: "Get instant notifications about game changes, new players joining, and venue updates.",
    },
    {
      icon: Shield,
      title: "Verified Players",
      description: "Play with confidence. All players are verified and rated by the community.",
    },
    {
      icon: CreditCard,
      title: "Easy Payments",
      description: "Secure, hassle-free payments directly in the app. Split costs or pay individually.",
    },
    {
      icon: MessageSquare,
      title: "In-App Chat",
      description: "Coordinate with your teammates, discuss game plans, and stay connected.",
    },
  ]

  return (
    <section className="py-20 px-4" style={{ background: '#0a0f14' }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Built for Players, By Players</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to find, book, and enjoy your favorite sports
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl transition-all hover:scale-105"
              style={{
                background: 'rgba(13, 18, 22, 0.4)',
                border: '1px solid rgba(69, 104, 130, 0.2)'
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ background: 'rgba(69, 104, 130, 0.2)' }}
              >
                <feature.icon className="w-6 h-6" style={{ color: '#456882' }} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
