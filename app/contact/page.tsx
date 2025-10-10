import { Header } from "@/components/header"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ background: '#050a0f' }}>
      <Header />

      <main className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div
          className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: '#456882' }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: '#456882' }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Let's <span style={{ color: '#456882' }}>Connect</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Have questions? Want to partner with us? We're here to help.
              <br className="hidden sm:block" />
              Reach out and let's make something great together.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12 lg:mb-16">
            {/* Contact Cards */}
            <div
              className="rounded-2xl p-6 backdrop-blur-md text-center group hover:scale-105 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.15) 0%, rgba(13, 18, 22, 0.8) 100%)',
                border: '1px solid rgba(69, 104, 130, 0.3)',
                boxShadow: '0 0 20px rgba(69, 104, 130, 0.1)'
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                style={{ background: 'rgba(69, 104, 130, 0.2)' }}
              >
                <Mail className="w-7 h-7" style={{ color: '#456882' }} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-400 text-sm mb-3">Drop us a line anytime</p>
              <a
                href="mailto:hello@playcenter.com"
                className="text-sm hover:underline"
                style={{ color: '#456882' }}
              >
                hello@playcenter.com
              </a>
            </div>

            <div
              className="rounded-2xl p-6 backdrop-blur-md text-center group hover:scale-105 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.15) 0%, rgba(13, 18, 22, 0.8) 100%)',
                border: '1px solid rgba(69, 104, 130, 0.3)',
                boxShadow: '0 0 20px rgba(69, 104, 130, 0.1)'
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                style={{ background: 'rgba(69, 104, 130, 0.2)' }}
              >
                <Phone className="w-7 h-7" style={{ color: '#456882' }} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-400 text-sm mb-3">Mon-Fri from 9am to 6pm</p>
              <a
                href="tel:+1234567890"
                className="text-sm hover:underline"
                style={{ color: '#456882' }}
              >
                +1 (234) 567-890
              </a>
            </div>

            <div
              className="rounded-2xl p-6 backdrop-blur-md text-center group hover:scale-105 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.15) 0%, rgba(13, 18, 22, 0.8) 100%)',
                border: '1px solid rgba(69, 104, 130, 0.3)',
                boxShadow: '0 0 20px rgba(69, 104, 130, 0.1)'
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                style={{ background: 'rgba(69, 104, 130, 0.2)' }}
              >
                <MapPin className="w-7 h-7" style={{ color: '#456882' }} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-400 text-sm mb-3">Come say hello</p>
              <p className="text-sm" style={{ color: '#456882' }}>
                Miami, FL 33101
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MessageSquare className="w-6 h-6" style={{ color: '#456882' }} />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Send us a message</h2>
              </div>
              <p className="text-gray-400">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

