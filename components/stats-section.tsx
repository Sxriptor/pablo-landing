import { Users, MapPin, Trophy, Calendar, TrendingUp, Heart } from "lucide-react"

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
        <div className="text-center mb-32">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Join a Growing Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            PlayCircle connects thousands of players every day, making sports more accessible and enjoyable for everyone.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(69, 104, 130, 0.2)', border: '2px solid rgba(69, 104, 130, 0.4)' }}
              >
                <stat.icon className="w-8 h-8" style={{ color: '#456882' }} />
              </div>
              <div>
                <div className="text-4xl font-bold mb-1" style={{ color: '#456882' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Highlights */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-lg" style={{ background: 'rgba(69, 104, 130, 0.1)' }}>
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 mr-2" style={{ color: '#456882' }} />
              <span className="text-lg font-semibold" style={{ color: '#456882' }}>Growing Fast</span>
            </div>
            <p className="text-muted-foreground">
              Our community grows by 200+ new players every week, creating more opportunities to play and connect.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg" style={{ background: 'rgba(69, 104, 130, 0.1)' }}>
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 mr-2" style={{ color: '#456882' }} />
              <span className="text-lg font-semibold" style={{ color: '#456882' }}>Loved by Players</span>
            </div>
            <p className="text-muted-foreground">
              "PlayCircle transformed how I find games. I've made amazing friends and improved my skills!"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
