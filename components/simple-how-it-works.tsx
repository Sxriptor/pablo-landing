import { Download, Search, Play } from "lucide-react"

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
    <section className="py-16 sm:py-20 px-4" style={{ background: '#0a0f14' }}>
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold mb-2" style={{ color: '#456882' }}>HOW IT WORKS</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Get Playing in Minutes</h2>
        </div>

        {/* Mobile: Horizontal Scroll Carousel */}
        <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar">
          <div className="flex gap-6 min-w-max">
            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded-3xl p-8 backdrop-blur-md w-[85vw] sm:w-96 snap-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.15) 0%, rgba(13, 18, 22, 0.8) 100%)',
                  border: '1px solid rgba(69, 104, 130, 0.3)',
                  boxShadow: '0 0 40px rgba(69, 104, 130, 0.1)'
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-bold opacity-20" style={{ color: '#456882' }}>
                    {step.number}
                  </span>
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(69, 104, 130, 0.2)', border: '1px solid rgba(69, 104, 130, 0.4)' }}
                  >
                    <step.icon className="w-8 h-8" style={{ color: '#456882' }} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Vertical List */}
        <div className="hidden lg:block max-w-4xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start md:items-center pb-12 border-b border-border/30 last:border-b-0"
            >
              <div className="flex items-center gap-6 md:w-1/3">
                <span className="text-6xl font-bold opacity-20" style={{ color: '#456882' }}>{step.number}</span>
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(69, 104, 130, 0.15)', border: '1px solid rgba(69, 104, 130, 0.3)' }}
                >
                  <step.icon className="w-7 h-7" style={{ color: '#456882' }} />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
