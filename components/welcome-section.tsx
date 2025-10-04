import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function WelcomeSection() {
  return (
    <section className="py-20 px-4" style={{ background: '#050a0f' }}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="max-w-md space-y-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Welcome to the Future of Sports</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Playcircle is more than just an app—it's a movement for everyone, everywhere. Whether you're looking to join a
                game, host matches, or connect with others who share your passion. Playcircle makes it effortless.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden relative h-[600px]">
              <video
                src="/welcome-video.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(13, 18, 22, 0.6) 0%, rgba(69, 104, 130, 0.3) 100%)' }} />
            </div>
          </div>

          <div className="space-y-4">
            <Card className="p-6 backdrop-blur border-border/30 hover:bg-[#456882]/20 transition-colors group cursor-pointer" style={{ background: 'linear-gradient(135deg, rgba(13, 18, 22, 0.6) 0%, rgba(69, 104, 130, 0.3) 100%)', borderColor: 'rgba(69, 104, 130, 0.3)' }}>
              <h3 className="text-xl font-bold mb-2">For Players</h3>
              <p className="text-muted-foreground mb-4 text-sm">Find and join games near you.</p>
              <Button variant="link" className="p-0 group-hover:gap-2 transition-all" style={{ color: '#456882' }}>
                App <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>

            <Card className="p-6 backdrop-blur border-border/30 hover:bg-[#456882]/20 transition-colors group cursor-pointer" style={{ background: 'linear-gradient(135deg, rgba(13, 18, 22, 0.6) 0%, rgba(69, 104, 130, 0.3) 100%)', borderColor: 'rgba(69, 104, 130, 0.3)' }}>
              <h3 className="text-xl font-bold mb-2">For Partners</h3>
              <p className="text-muted-foreground mb-4 text-sm">Fill your pitches with local players.</p>
              <Button variant="link" className="p-0 group-hover:gap-2 transition-all" style={{ color: '#456882' }}>
                Grow With Playcircle <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>

            <Card className="p-6 backdrop-blur border-border/30 hover:bg-[#456882]/20 transition-colors group cursor-pointer" style={{ background: 'linear-gradient(135deg, rgba(13, 18, 22, 0.6) 0%, rgba(69, 104, 130, 0.3) 100%)', borderColor: 'rgba(69, 104, 130, 0.3)' }}>
              <h3 className="text-xl font-bold mb-2">For Enthusiasts</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Be part of a community that shares the love of this beautiful game.
              </p>
              <Button variant="link" className="p-0 group-hover:gap-2 transition-all" style={{ color: '#456882' }}>
                Join Us <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
