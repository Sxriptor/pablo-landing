import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const values = [
    {
      title: "Community First",
      description: "Building connections between players and fostering a vibrant padel community across the globe.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Accessibility",
      description: "Making padel accessible to everyone, everywhere. Breaking down barriers to play.",
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
    <div className="min-h-screen" style={{ background: '#060606' }}>
      <div className="relative">
        <Header />

        <main>
          {/* Hero Section with Background Image */}
          <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center -mt-20 pt-20">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/Backgrounddark1.png')",
                top: '-80px',
                height: 'calc(100% + 80px)'
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(6, 6, 6, 1) 100%)',
                top: '-80px',
                height: 'calc(100% + 80px)'
              }}
            />
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                About Plei
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto">
                We're on a mission to make padel accessible to everyone, everywhere
              </p>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-20 px-4" style={{ background: '#060606' }}>
            <div className="max-w-4xl mx-auto">
              <div
                className="backdrop-blur rounded-3xl p-12 lg:p-16"
                style={{
                  background: 'linear-gradient(135deg, rgba(13, 18, 22, 0.6) 0%, rgba(69, 104, 130, 0.3) 100%)',
                  border: '1px solid rgba(69, 104, 130, 0.3)'
                }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Plei was born from a simple observation: padel is one of the fastest-growing sports in the world, yet finding a game or connecting with other players remained surprisingly difficult.
                  </p>
                  <p>
                    We set out to change that by building a platform that brings players, courts, and communities together in one seamless experience. Whether you're a seasoned pro or picking up a racquet for the first time, Plei makes it easy to find your next game.
                  </p>
                  <p>
                    Today, we're proud to serve thousands of players across multiple cities, partnering with leading facilities and brands to grow the sport we all love.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 px-4" style={{ background: '#060606' }}>
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">
                Our Values
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="backdrop-blur rounded-2xl p-8 hover:bg-[#456882]/20 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(13, 18, 22, 0.6) 0%, rgba(69, 104, 130, 0.3) 100%)',
                      border: '1px solid rgba(69, 104, 130, 0.3)'
                    }}
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(69, 104, 130, 0.3)', color: '#456882' }}>
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission Stats */}
          <section className="py-20 px-4" style={{ background: '#060606' }}>
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {team.map((item, index) => (
                  <div
                    key={index}
                    className="backdrop-blur rounded-xl p-8 text-center hover:bg-[#456882]/20 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(13, 18, 22, 0.6) 0%, rgba(69, 104, 130, 0.3) 100%)',
                      border: '1px solid rgba(69, 104, 130, 0.3)'
                    }}
                  >
                    <div className="text-sm text-gray-400 mb-2">{item.name}</div>
                    <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: '#456882' }}>
                      {item.value}
                    </div>
                    <div className="text-gray-300">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4" style={{ background: '#060606' }}>
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="backdrop-blur rounded-3xl p-12 lg:p-16 hover:bg-[#456882]/20 transition-all"
                style={{
                  background: 'linear-gradient(135deg, rgba(13, 18, 22, 0.6) 0%, rgba(69, 104, 130, 0.3) 100%)',
                  border: '1px solid rgba(69, 104, 130, 0.3)'
                }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Join the Movement
                </h2>
                <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                  Be part of the community that's transforming how people play padel around the world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/"
                    className="inline-block rounded-full px-10 py-4 text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                    style={{
                      backgroundColor: '#456882',
                      color: 'white'
                    }}
                  >
                    Download App
                  </a>
                  <a
                    href="/partners"
                    className="inline-block rounded-full px-10 py-4 text-lg font-semibold transition-all border"
                    style={{
                      borderColor: '#456882',
                      color: '#456882'
                    }}
                  >
                    Become a Partner
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  )
}
