import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
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
                    Privacy <span style={{ color: '#456882' }}>Policy</span>
                  </h1>
                  <div className="w-16 sm:w-24 h-px mb-6 sm:mb-8" style={{ backgroundColor: '#456882' }}></div>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                    Your privacy is important to us. Learn how we protect and use your information.
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
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Information We Collect</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We collect information you provide directly to us, such as when you create an account, update your profile, make a purchase, participate in a game, or contact us for support.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">Personal Information</h3>
                  <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Profile information (age, location, sports preferences)</li>
                    <li>Payment information for premium features</li>
                    <li>Communication preferences</li>
                  </ul>

                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">Usage Information</h3>
                  <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                    <li>Device information and browser type</li>
                    <li>App usage statistics and feature interactions</li>
                    <li>Location data when using location-based features</li>
                    <li>Game participation and performance data</li>
                  </ul>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">How We Use Your Information</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices, updates, and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Communicate with you about products, services, and events</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                  </ul>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Information Sharing and Disclosure</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">Service Providers</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We may share your information with trusted third-party service providers who assist us in operating our platform, such as payment processors, analytics providers, and hosting services.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">Legal Requirements</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We may disclose your information if required by law or if we believe such action is necessary to comply with legal process or protect the rights, property, or safety of PlayCircle, our users, or others.
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Data Security</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Your Rights and Choices</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                    <li>Access and update your personal information</li>
                    <li>Delete your account and associated data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request data portability</li>
                  </ul>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Children's Privacy</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Changes to This Policy</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date below.
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Contact Us</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="text-gray-300 mb-6">
                    <p>Email: privacy@playcircle.com</p>
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
