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
          <section className="relative min-h-screen flex items-center">
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
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 w-full">
              <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                    About <span style={{ color: '#456882' }}>PlayCircle</span>
                  </h1>
                  <div className="w-16 sm:w-24 h-px mb-6 sm:mb-8" style={{ backgroundColor: '#456882' }}></div>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                    We're on a mission to make sports accessible to everyone, everywhere
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-16 sm:py-24 lg:py-32 px-4 relative overflow-hidden" style={{ background: '#050a0f' }}>
            {/* Decorative background elements */}
            <div
              className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
              style={{ background: '#456882' }}
            />

            <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Our Story
                </h2>
                <div className="w-12 sm:w-16 h-px mx-auto" style={{ backgroundColor: '#456882' }}></div>
              </div>

              {/* Mobile: Horizontal Scroll, Desktop: Grid */}
              <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar">
                <div className="flex gap-6 min-w-max">
                  <div
                    className="rounded-3xl p-8 sm:p-10 backdrop-blur-md w-[85vw] sm:w-96 snap-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.15) 0%, rgba(13, 18, 22, 0.8) 100%)',
                      border: '1px solid rgba(69, 104, 130, 0.3)',
                      boxShadow: '0 0 40px rgba(69, 104, 130, 0.1)'
                    }}
                  >
                    <div className="text-6xl sm:text-7xl font-bold mb-6 opacity-30" style={{ color: '#456882' }}>
                      01
                    </div>
                    <div className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                      <p>
                        PlayCircle was born from a simple observation: sports like soccer, tennis, padel, and more are growing rapidly, yet finding a game or connecting with other players remained surprisingly difficult.
                      </p>
                      <p>
                        We set out to change that by building a platform that brings players, facilities, and communities together in one seamless experience.
                      </p>
                    </div>
                  </div>
                  <div
                    className="rounded-3xl p-8 sm:p-10 backdrop-blur-md w-[85vw] sm:w-96 snap-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.15) 0%, rgba(13, 18, 22, 0.8) 100%)',
                      border: '1px solid rgba(69, 104, 130, 0.3)',
                      boxShadow: '0 0 40px rgba(69, 104, 130, 0.1)'
                    }}
                  >
                    <div className="text-6xl sm:text-7xl font-bold mb-6 opacity-30" style={{ color: '#456882' }}>
                      02
                    </div>
                    <div className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                      <p>
                        Whether you're a seasoned pro or just getting started with a new sport, PlayCircle makes it easy to find your next game.
                      </p>
                      <p>
                        Today, we're proud to serve thousands of players across multiple cities, partnering with leading facilities and brands to grow the sport we all love.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop: Grid */}
              <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-stretch">
                <div
                  className="rounded-3xl p-10 backdrop-blur-md hover:scale-[1.02] transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.15) 0%, rgba(13, 18, 22, 0.8) 100%)',
                    border: '1px solid rgba(69, 104, 130, 0.3)',
                    boxShadow: '0 0 40px rgba(69, 104, 130, 0.1)'
                  }}
                >
                  <div className="text-7xl font-bold mb-6 opacity-30" style={{ color: '#456882' }}>
                    01
                  </div>
                  <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                    <p>
                      PlayCircle was born from a simple observation: sports like soccer, tennis, padel, and more are growing rapidly, yet finding a game or connecting with other players remained surprisingly difficult.
                    </p>
                    <p>
                      We set out to change that by building a platform that brings players, facilities, and communities together in one seamless experience.
                    </p>
                  </div>
                </div>
                <div
                  className="rounded-3xl p-10 backdrop-blur-md hover:scale-[1.02] transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.15) 0%, rgba(13, 18, 22, 0.8) 100%)',
                    border: '1px solid rgba(69, 104, 130, 0.3)',
                    boxShadow: '0 0 40px rgba(69, 104, 130, 0.1)'
                  }}
                >
                  <div className="text-7xl font-bold mb-6 opacity-30" style={{ color: '#456882' }}>
                    02
                  </div>
                  <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                    <p>
                      Whether you're a seasoned pro or just getting started with a new sport, PlayCircle makes it easy to find your next game.
                    </p>
                    <p>
                      Today, we're proud to serve thousands of players across multiple cities, partnering with leading facilities and brands to grow the sport we all love.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16 sm:py-24 lg:py-32 px-4 relative overflow-hidden" style={{ background: '#050a0f' }}>
            <div
              className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
              style={{ background: '#456882' }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Our Values
                </h2>
                <div className="w-12 sm:w-16 h-px mx-auto" style={{ backgroundColor: '#456882' }}></div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="text-center rounded-3xl p-6 sm:p-8 backdrop-blur-md hover:scale-105 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.12) 0%, rgba(13, 18, 22, 0.8) 100%)',
                      border: '1px solid rgba(69, 104, 130, 0.25)',
                      boxShadow: '0 0 30px rgba(69, 104, 130, 0.08)'
                    }}
                  >
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(69, 104, 130, 0.2)', color: '#456882' }}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">
                      {value.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 sm:py-24 lg:py-32 px-4" style={{ background: '#050a0f' }}>
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                Join the Movement
              </h2>
              <div className="w-16 sm:w-24 h-px mx-auto mb-8 sm:mb-12" style={{ backgroundColor: '#456882' }}></div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-4">
                Be part of the community that's transforming how people play sports around the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                <a
                  href="/"
                  className="inline-block rounded-full px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: '#456882',
                    color: 'white'
                  }}
                >
                  Download App
                </a>
                <a
                  href="/partners"
                  className="inline-block rounded-full px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 border-2"
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
