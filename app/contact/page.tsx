import { Header } from "@/components/header"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f14] via-[#0d1219] to-[#0a0e14]">
      <Header activeLink="contact" />
      
      <main className="pt-24 pb-16 px-4 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-[1600px] mx-auto">
          {/* Left Column - Media + Copy */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-4 z-10 relative">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                Get in Touch
              </h1>
              <p className="text-base lg:text-lg text-gray-300 max-w-2xl">
                Whether you're looking for support, interested in a partnership, or just want to say hi, we'd love to hear from you. Our team is here to help with any questions about our platform, discuss potential collaborations, or simply connect with fellow paddle enthusiasts. Reach out and let's start a conversation ⚽
              </p>
            </div>
            
            {/* Background Image with Gradient Overlay */}
            <div className="relative mt-8 rounded-2xl overflow-hidden h-[300px] lg:h-[500px] xl:h-[600px]">
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
                  background: 'linear-gradient(135deg, rgba(10, 15, 20, 0.7) 0%, rgba(27, 60, 83, 0.8) 50%, rgba(10, 14, 20, 0.9) 100%)'
                }}
              />
            </div>
          </div>

          {/* Right Column - Form Card */}
          <div className="lg:col-span-6 xl:col-span-5 flex items-center">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

