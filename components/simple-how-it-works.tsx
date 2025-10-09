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
    <section className="py-20 px-4" style={{ background: '#0a0f14' }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold mb-2" style={{ color: '#456882' }}>HOW IT WORKS</p>
          <h2 className="text-4xl lg:text-5xl font-bold">Get Playing in Minutes</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start md:items-center pb-12 border-b border-border/30 last:border-b-0"
            >
              <div className="flex items-center gap-6 md:w-1/3">
                <span className="text-6xl font-bold opacity-20">{step.number}</span>
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
