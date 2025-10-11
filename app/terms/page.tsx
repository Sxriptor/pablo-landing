import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: '#050a0f' }}>
      <div className="relative">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center pt-20">
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
              <div className="max-w-4xl mx-auto">
                <div className="max-w-3xl">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                    Terms of <span style={{ color: '#456882' }}>Service</span>
                  </h1>
                  <div className="w-16 sm:w-24 h-px mb-6 sm:mb-8" style={{ backgroundColor: '#456882' }}></div>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                    Please read these terms carefully before using PlayCircle services.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16 sm:py-24 lg:py-32 px-4 relative overflow-hidden" style={{ background: '#050a0f' }}>
            <div className="max-w-4xl mx-auto relative z-10">
              <div className="space-y-8 sm:space-y-12">
                <div className="prose prose-lg prose-invert max-w-none">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Acceptance of Terms</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    By accessing and using PlayCircle's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Description of Service</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    PlayCircle is a platform that connects sports enthusiasts with games, facilities, and other players. Our services include:
                  </p>
                  <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                    <li>Game discovery and booking</li>
                    <li>Player profile management</li>
                    <li>Facility partnerships</li>
                    <li>Community features and social interactions</li>
                    <li>Mobile and web applications</li>
                  </ul>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">User Accounts</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    To use certain features of our service, you must register for an account. You agree to:
                  </p>
                  <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                    <li>Provide accurate and complete information during registration</li>
                    <li>Maintain the security of your password and account</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized use</li>
                  </ul>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">User Conduct</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You agree not to use the service to:
                  </p>
                  <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                    <li>Violate any local, state, national, or international law or regulation</li>
                    <li>Transmit any harmful, threatening, abusive, or defamatory material</li>
                    <li>Interfere with or disrupt the service or servers</li>
                    <li>Attempt to gain unauthorized access to other accounts or systems</li>
                    <li>Use the service for any commercial purpose without authorization</li>
                  </ul>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Intellectual Property</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    The service and its original content, features, and functionality are and will remain the exclusive property of PlayCircle and its licensors. The service is protected by copyright, trademark, and other laws.
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Payment and Billing</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Some features of our service require payment. By purchasing premium features, you agree to:
                  </p>
                  <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                    <li>Pay all fees associated with your account</li>
                    <li>Provide valid payment information</li>
                    <li>Automatic renewal of subscriptions unless cancelled</li>
                    <li>Our right to change pricing with notice</li>
                  </ul>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Disclaimers and Limitation of Liability</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    The information on this service is provided on an 'as is' basis. To the fullest extent permitted by law, PlayCircle:
                  </p>
                  <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                    <li>Excludes all representations and warranties</li>
                    <li>Is not liable for any indirect or consequential losses</li>
                    <li>Limits liability to the amount paid for the service</li>
                    <li>Does not guarantee continuous, uninterrupted access</li>
                  </ul>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Indemnification</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You agree to indemnify and hold harmless PlayCircle and its affiliates from any claims, damages, losses, costs, and expenses arising from your use of the service or violation of these terms.
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Termination</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We may terminate or suspend your account and access to the service immediately, without prior notice, for any reason whatsoever, including breach of these terms.
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Governing Law</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    These terms shall be interpreted and governed by the laws of [Your Jurisdiction], without regard to conflict of law provisions. Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights.
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Changes to Terms</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We reserve the right to modify or replace these terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Contact Information</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="text-gray-300 mb-6">
                    <p>Email: legal@playcircle.com</p>
                    <p>Address: PlayCircle Inc., [Your Address]</p>
                  </div>

                  <div className="text-sm text-gray-400 mt-12 pt-8 border-t border-gray-700">
                    <p>Last Updated: {new Date().toLocaleDateString()}</p>
                  </div>
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
