import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PartnersPage() {
  const stats = [
    { number: "1M+", label: "Player Reservations" },
    { number: "500+", label: "Partner Courts" },
    { number: "50K+", label: "Active Players" },
    { number: "100+", label: "Cities" },
  ]

  const partnershipTypes = [
    {
      title: "Sponsorships",
      description: "Align your brand with the fastest-growing sports community. Reach engaged players through our platform and events.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      title: "Events",
      description: "Host tournaments and community events. Connect with players through organized competitions and social gatherings.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Digital Campaigns",
      description: "Leverage our digital platform to reach thousands of active players with targeted campaigns and promotions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  const trustedPartners = [
    { name: "Wilson" },
    { name: "Head" },
    { name: "Babolat" },
    { name: "Dunlop" },
    { name: "Prince" },
    { name: "Yonex" },
    { name: "Nox" },
    { name: "Bullpadel" },
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
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight">
                  Partner with <span style={{ color: '#456882' }}>PlayCenter</span>
                </h1>
                <div className="w-24 h-px mx-auto mb-8" style={{ backgroundColor: '#456882' }}></div>
                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Join us in building the world's largest sports community
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
        <section className="py-32 px-4 relative overflow-hidden" style={{ background: '#050a0f' }}>
          <div
            className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ background: '#456882' }}
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                By the Numbers
              </h2>
              <div className="w-16 h-px mx-auto" style={{ backgroundColor: '#456882' }}></div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center rounded-3xl p-10 backdrop-blur-md hover:scale-105 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.12) 0%, rgba(13, 18, 22, 0.8) 100%)',
                    border: '1px solid rgba(69, 104, 130, 0.25)',
                    boxShadow: '0 0 30px rgba(69, 104, 130, 0.08)'
                  }}
                >
                  <div className="text-5xl lg:text-6xl font-bold mb-4 leading-tight" style={{ color: '#456882' }}>
                    {stat.number}
                  </div>
                  <div className="text-base text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="py-32 px-4 relative overflow-hidden" style={{ background: '#050a0f' }}>
          <div
            className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ background: '#456882' }}
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Partnership Opportunities
              </h2>
              <div className="w-16 h-px mx-auto" style={{ backgroundColor: '#456882' }}></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
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
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {type.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted Partners */}
        <section className="py-32 px-4 relative overflow-hidden" style={{ background: '#050a0f' }}>
          <div
            className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ background: '#456882' }}
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Trusted by Leading Brands
              </h2>
              <div className="w-16 h-px mx-auto" style={{ backgroundColor: '#456882' }}></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustedPartners.map((partner, index) => (
                <div
                  key={index}
                  className="text-center rounded-2xl p-8 backdrop-blur-md hover:scale-105 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.1) 0%, rgba(13, 18, 22, 0.7) 100%)',
                    border: '1px solid rgba(69, 104, 130, 0.2)',
                    boxShadow: '0 0 20px rgba(69, 104, 130, 0.05)'
                  }}
                >
                  <div className="h-20 flex items-center justify-center">
                    <h3 className="text-xl font-semibold text-white">
                      {partner.name}
                    </h3>
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
              Ready to Partner?
            </h2>
            <div className="w-24 h-px mx-auto mb-12" style={{ backgroundColor: '#456882' }}></div>
            <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can work together to grow sports and reach engaged players worldwide.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-full px-12 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#456882',
                color: 'white'
              }}
            >
              Get in Touch
            </a>
          </div>
        </section>
        </main>
      </div>

      <Footer />
    </div>
  )
}
