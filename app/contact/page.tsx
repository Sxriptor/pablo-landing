import { Header } from "@/components/header"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ background: '#050a0f' }}>
      <Header />
      
      <main className="h-screen flex items-center justify-center px-4 lg:px-12 pt-32 sm:pt-28 lg:pt-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-[1600px] mx-auto w-full">
          {/* Left Column - Media + Copy */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col space-y-4">
            <div className="space-y-3 z-10 relative">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
                Get in <span style={{ color: '#456882' }}>Touch</span>
              </h1>
              <div className="w-12 h-px" style={{ backgroundColor: '#456882' }}></div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
                Whether you're looking for support, interested in a partnership, or just want to say hi, we'd love to hear from you. Our team is here to help with any questions about our platform, discuss potential collaborations, or simply connect with fellow sports enthusiasts.
              </p>
            </div>

            {/* Background Image with Gradient Overlay */}
            <div className="relative mt-6 rounded-2xl overflow-hidden flex-1 min-h-[250px] sm:min-h-[300px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/soccer-field-aerial-view-night.jpg')",
                }}
              />
              {/* Dark blue gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(5, 10, 15, 0.7) 0%, rgba(27, 60, 83, 0.8) 50%, rgba(5, 10, 15, 0.9) 100%)'
                }}
              />
            </div>
          </div>

          {/* Right Column - Form Card */}
          <div className="lg:col-span-6 xl:col-span-5 flex items-stretch">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

