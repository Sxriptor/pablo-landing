import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SimpleCtaSection() {
  return (
    <section className="py-20 px-4" style={{ background: '#050a0f' }}>
      <div className="container mx-auto">
        <div
          className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.15) 0%, rgba(13, 18, 22, 0.8) 100%)',
            border: '1px solid rgba(69, 104, 130, 0.3)'
          }}
        >
          {/* Decorative circles */}
          <div
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20"
            style={{ background: '#456882' }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full opacity-20"
            style={{ background: '#456882' }}
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Play?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of players already connecting through PlayCenter. Download the app and find your next game today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a href="#" className="inline-block">
                <div
                  className="rounded-lg px-6 py-3 flex items-center gap-3 transition-all hover:scale-105"
                  style={{
                    background: '#456882',
                    border: '1px solid rgba(69, 104, 130, 0.5)'
                  }}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-90">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </div>
              </a>
              <a href="#" className="inline-block">
                <div
                  className="rounded-lg px-6 py-3 flex items-center gap-3 transition-all hover:scale-105"
                  style={{
                    background: '#456882',
                    border: '1px solid rgba(69, 104, 130, 0.5)'
                  }}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-90">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
