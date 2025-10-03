import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const values = [
    {
      title: "Community First",
      description: "Building connections between players and fostering a vibrant sports community across the globe.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Accessibility",
      description: "Making sports accessible to everyone, everywhere. Breaking down barriers to play.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description: "Constantly evolving our platform to provide the best experience for players and partners.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ]

  const team = [
    {
      name: "Founded",
      value: "2024",
      description: "Year we started"
    },
    {
      name: "Mission",
      value: "Connect",
      description: "Players worldwide"
    },
    {
      name: "Vision",
      value: "Grow",
      description: "The sport globally"
    },
  ]

  return (
    <div className="min-h-screen" style={{ background: '#050a0f' }}>
      <div className="relative">
        <Header />

        <main>
          {/* Hero Section with Background Image */}
          <section className="relative h-screen flex items-center justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/Backgrounddark1.png')"
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%)'
              }}
            />
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
              <div className="mb-8">
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 tracking-tight">
                  About <span style={{ color: '#456882' }}>Padlo</span>
                </h1>
                <div className="w-24 h-px mx-auto mb-8" style={{ backgroundColor: '#456882' }}></div>
                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                  We're on a mission to make sports accessible to everyone, everywhere
                </p>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-32 px-4" style={{ background: '#050a0f' }}>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
                  Our Story
                </h2>
                <div className="w-16 h-px mx-auto" style={{ backgroundColor: '#456882' }}></div>
              </div>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="text-6xl lg:text-7xl font-light text-white opacity-20" style={{ color: '#456882' }}>
                    "01"
                  </div>
                  <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                    <p className="font-light">
                      Padlo was born from a simple observation: sports like soccer, tennis, padel, and more are growing rapidly, yet finding a game or connecting with other players remained surprisingly difficult.
                    </p>
                    <p className="font-light">
                      We set out to change that by building a platform that brings players, facilities, and communities together in one seamless experience.
                    </p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="text-6xl lg:text-7xl font-light text-white opacity-20" style={{ color: '#456882' }}>
                    "02"
                  </div>
                  <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                    <p className="font-light">
                      Whether you're a seasoned pro or just getting started with a new sport, Padlo makes it easy to find your next game.
                    </p>
                    <p className="font-light">
                      Today, we're proud to serve thousands of players across multiple cities, partnering with leading facilities and brands to grow the sport we all love.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-32 px-4" style={{ background: '#050a0f' }}>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
                  Our Values
                </h2>
                <div className="w-16 h-px mx-auto" style={{ backgroundColor: '#456882' }}></div>
              </div>
              <div className="grid md:grid-cols-3 gap-12">
                {values.map((value, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ background: 'rgba(69, 104, 130, 0.1)', color: '#456882' }}>
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-light text-white mb-6 tracking-wide">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-light">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission Stats */}
          <section className="py-32 px-4" style={{ background: '#050a0f' }}>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
                  By the Numbers
                </h2>
                <div className="w-16 h-px mx-auto" style={{ backgroundColor: '#456882' }}></div>
              </div>
              <div className="grid md:grid-cols-3 gap-16">
                {team.map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-6xl lg:text-7xl font-light mb-4 tracking-tight" style={{ color: '#456882' }}>
                      {item.value}
                    </div>
                    <div className="text-lg font-light text-white mb-2 tracking-wide">
                      {item.name}
                    </div>
                    <div className="text-gray-400 font-light">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-32 px-4" style={{ background: '#050a0f' }}>
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight">
                Join the Movement
              </h2>
              <div className="w-24 h-px mx-auto mb-12" style={{ backgroundColor: '#456882' }}></div>
              <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
                Be part of the community that's transforming how people play sports around the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/"
                  className="inline-block rounded-full px-12 py-4 text-lg font-light transition-all duration-300 hover:scale-105 tracking-wide"
                  style={{
                    backgroundColor: '#456882',
                    color: 'white'
                  }}
                >
                  Download App
                </a>
                <a
                  href="/partners"
                  className="inline-block rounded-full px-12 py-4 text-lg font-light transition-all duration-300 hover:scale-105 tracking-wide border-2"
                  style={{
                    borderColor: '#456882',
                    color: '#456882'
                  }}
                >
                  Become a Partner
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  )
}
