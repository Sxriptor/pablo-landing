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
      description: "Align your brand with the fastest-growing racquet sport. Reach engaged players through our platform and events.",
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
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f14] via-[#0d1219] to-[#0a0e14]">
      <Header />

      <main className="pt-20">
        {/* Hero Section with Background Image */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/soccer-field-aerial-view-night.jpg')",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(10, 15, 20, 0.85) 0%, rgba(27, 60, 83, 0.75) 50%, rgba(10, 14, 20, 0.85) 100%)'
            }}
          />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Partner with Pablo
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto">
              Join us in building the world's largest padel community
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">
              Partnership Opportunities
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary flex items-center justify-center mb-6 text-primary">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {type.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted Partners */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">
              Trusted by Leading Brands
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {trustedPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex items-center justify-center hover:bg-white/10 transition-all duration-300 h-32"
                >
                  <h3 className="text-2xl font-bold text-white">
                    {partner.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm border border-primary/30 rounded-3xl p-12 lg:p-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Partner?
              </h2>
              <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                Let's discuss how we can work together to grow the sport and reach engaged players worldwide.
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-4 text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
