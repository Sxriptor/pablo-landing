import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CtaSection } from "@/components/cta-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WelcomeSection />
        <HowItWorksSection />
        <CtaSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
