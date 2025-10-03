import { Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-12 px-2 lg:px-12 overflow-hidden h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Backgrounddark1.png')",
        }}
      />
      {/* Background gradient overlay - fade to black at bottom */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 1) 100%)'
      }} />

      <div className="relative z-10 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-end h-full">
          <div className="space-y-4 flex flex-col justify-end">
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-balance">
              <span style={{ color: '#456882' }}>Play Padel</span>
              <br />
              <span 
                className="whitespace-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center lg:text-left block lg:inline"
                style={{ color: 'white' }}
              >
                Anytime, Anywhere
              </span>
            </h1>
            <p className="text-lg text-white max-w-md text-pretty">
              Find a game near you, connect with players, and experience of the sport of Padel like never before.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="inline-block">
                <div className="bg-card border border-border rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-card/80 transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </div>
              </a>
              <a href="#" className="inline-block">
                <div className="bg-card border border-border rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-card/80 transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-primary border-2 border-background"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  <span className="ml-1 font-semibold">4.9/5</span>
                </div>
                <p className="text-sm text-muted-foreground">Join 5000+ players just like you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
