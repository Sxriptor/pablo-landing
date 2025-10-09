import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { SimpleHowItWorks } from "@/components/simple-how-it-works"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { SimpleCtaSection } from "@/components/simple-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen overscroll-none">
      <Header />
      <main className="overscroll-none">
        <HeroSection />
        <StatsSection />
        <SimpleHowItWorks />
        <FeaturesSection />
        <TestimonialsSection />
        <FaqSection />
        <SimpleCtaSection />
      </main>
      <Footer />
    </div>
  )
}
