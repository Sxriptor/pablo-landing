import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function MeetPlayCenterPage() {
  const upcomingFeatures = [
    {
      title: "Multi-Sport Platform",
      description: "Support multiple sports including soccer, football, tennis, pickleball, padel, badminton, and more.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Global Court Network",
      description: "Connect with courts and facilities worldwide, from local clubs to premium venues.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "AI-Powered Matching",
      description: "Smart algorithms to match players based on skill level, location, and playing style.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Tournament Management",
      description: "Organize and participate in tournaments, leagues, and competitive events.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Social Features",
      description: "Connect with friends, share achievements, and build lasting relationships through sport.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Analytics & Insights",
      description: "Track your progress, analyze your game, and improve with detailed performance metrics.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ]

  const roadmap = [
    {
      phase: "Phase 1",
      title: "Foundation",
      description: "Core platform foundation",
      features: ["Court booking", "Player matching", "Basic tournaments"],
      status: "completed"
    },
    {
      phase: "Phase 2",
      title: "Expansion",
      description: "Multi-sport integration",
      features: ["Soccer fields", "Tennis courts", "Pickleball venues", "Football pitches"],
      status: "in-progress"
    },
    {
      phase: "Phase 3",
      title: "Intelligence",
      description: "AI-powered features",
      features: ["Smart matching", "Performance analytics", "Predictive insights"],
      status: "planned"
    },
    {
      phase: "Phase 4",
      title: "Global",
      description: "Worldwide community",
      features: ["International tournaments", "Global court network", "Multi-language support"],
      status: "planned"
    },
  ]

  const stats = [
    { number: "10K+", label: "Active Players" },
    { number: "500+", label: "Partner Courts" },
    { number: "50+", label: "Cities" },
    { number: "5+", label: "Sports" },
  ]

  return (
    <div className="min-h-screen" style={{ background: '#050a0f' }}>
      <div className="relative">
        <Header />

        <main>
          {/* Hero Section */}
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
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight">
                  Meet <span style={{ color: '#456882' }}>PlayCenter 2.0</span>
                </h1>
                <div className="w-24 h-px mx-auto mb-8" style={{ backgroundColor: '#456882' }}></div>
                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  The future of sports connection. More sports, more courts, more possibilities.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-32 px-4" style={{ background: '#050a0f' }}>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Today's Impact
                </h2>
                <div className="w-16 h-px mx-auto" style={{ backgroundColor: '#456882' }}></div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-6xl lg:text-7xl font-bold mb-4 leading-tight" style={{ color: '#456882' }}>
                      {stat.number}
                    </div>
                    <div className="text-lg text-white">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="py-32 px-4 relative overflow-hidden" style={{ background: '#050a0f' }}>
            <div
              className="absolute top-0 left-1/3 w-96 h-96 rounded-full opacity-5 blur-3xl"
              style={{ background: '#456882' }}
            />

            <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Our Vision
                </h2>
                <div className="w-16 h-px mx-auto" style={{ backgroundColor: '#456882' }}></div>
              </div>
              <div className="grid lg:grid-cols-2 gap-8 items-stretch">
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
                      PlayCenter 2.0 represents our evolution to a comprehensive multi-sport platform connecting players across all sports.
                    </p>
                    <p>
                      We're building the world's largest sports community, connecting players across multiple disciplines and creating opportunities for growth, competition, and friendship.
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
                      From soccer fields to tennis courts, from padel matches to football games, PlayCenter 2.0 will be your gateway to the entire sports world.
                    </p>
                    <p>
                      Join us as we revolutionize how people discover, connect, and play sports together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Upcoming Features */}
          <section className="py-32 px-4 relative overflow-hidden" style={{ background: '#050a0f' }}>
            <div
              className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
              style={{ background: '#456882' }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  What's Coming
                </h2>
                <div className="w-16 h-px mx-auto" style={{ backgroundColor: '#456882' }}></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="text-center rounded-3xl p-8 backdrop-blur-md hover:scale-105 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.12) 0%, rgba(13, 18, 22, 0.8) 100%)',
                      border: '1px solid rgba(69, 104, 130, 0.25)',
                      boxShadow: '0 0 30px rgba(69, 104, 130, 0.08)'
                    }}
                  >
                    <div
                      className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(69, 104, 130, 0.2)', color: '#456882' }}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Roadmap Section */}
          <section className="py-32 px-4 relative overflow-hidden" style={{ background: '#050a0f' }}>
            <div
              className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
              style={{ background: '#456882' }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Development Roadmap
                </h2>
                <div className="w-16 h-px mx-auto" style={{ backgroundColor: '#456882' }}></div>
              </div>
              <div className="space-y-8">
                {roadmap.map((phase, index) => (
                  <div
                    key={index}
                    className="rounded-3xl p-8 backdrop-blur-md hover:scale-[1.02] transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.12) 0%, rgba(13, 18, 22, 0.8) 100%)',
                      border: '1px solid rgba(69, 104, 130, 0.25)',
                      boxShadow: '0 0 30px rgba(69, 104, 130, 0.08)',
                      opacity: phase.status === 'planned' ? 0.7 : 1
                    }}
                  >
                    <div className="flex items-start gap-8">
                      <div className="flex-shrink-0">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center text-white font-semibold text-lg"
                          style={{
                            backgroundColor: phase.status === 'completed' || phase.status === 'in-progress' ? '#456882' : 'rgba(69, 104, 130, 0.3)'
                          }}
                        >
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4 flex-wrap">
                          <h3 className="text-2xl font-semibold text-white">
                            {phase.phase}
                          </h3>
                          <span
                            className="text-sm px-4 py-1.5 rounded-full text-white font-medium"
                            style={{
                              backgroundColor: phase.status === 'completed' || phase.status === 'in-progress' ? '#456882' : 'rgba(69, 104, 130, 0.3)'
                            }}
                          >
                            {phase.status === 'completed' ? 'Completed' : phase.status === 'in-progress' ? 'In Progress' : 'Planned'}
                          </span>
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-4">
                          {phase.title}
                        </h4>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                          {phase.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {phase.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="text-sm px-4 py-2 rounded-full text-gray-300"
                              style={{ backgroundColor: 'rgba(69, 104, 130, 0.15)' }}
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-32 px-4" style={{ background: '#050a0f' }}>
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Join the Journey
              </h2>
              <div className="w-24 h-px mx-auto mb-12" style={{ backgroundColor: '#456882' }}></div>
              <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                Be among the first to experience PlayCenter 2.0 and help shape the future of sports connection.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/"
                  className="inline-block rounded-full px-12 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: '#456882',
                    color: 'white'
                  }}
                >
                  Get Early Access
                </a>
                <a
                  href="/contact"
                  className="inline-block rounded-full px-12 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 border-2"
                  style={{
                    borderColor: '#456882',
                    color: '#456882'
                  }}
                >
                  Learn More
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