import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function WelcomeSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Welcome to the Future of Soccer</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Plei is more than just an app—it's a movement for everyone, everywhere. Whether you're looking to join a
            game, host matches, or connect with others who share your passion. Plei makes it effortless.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
              <img src="/soccer-field-aerial-view-night.jpg" alt="Soccer field" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <Button
                size="icon"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary hover:bg-primary/90 group-hover:scale-110 transition-transform"
              >
                <Play className="w-8 h-8 fill-primary-foreground text-primary-foreground ml-1" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:bg-card/80 transition-colors group cursor-pointer">
              <h3 className="text-xl font-bold mb-2">For Players</h3>
              <p className="text-muted-foreground mb-4 text-sm">Find and join games near you.</p>
              <Button variant="link" className="text-primary p-0 group-hover:gap-2 transition-all">
                App <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:bg-card/80 transition-colors group cursor-pointer">
              <h3 className="text-xl font-bold mb-2">For Partners</h3>
              <p className="text-muted-foreground mb-4 text-sm">Fill your pitches with local players.</p>
              <Button variant="link" className="text-primary p-0 group-hover:gap-2 transition-all">
                Grow With Plei <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:bg-card/80 transition-colors group cursor-pointer">
              <h3 className="text-xl font-bold mb-2">For Enthusiasts</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Be part of a community that shares the love of this beautiful game.
              </p>
              <Button variant="link" className="text-primary p-0 group-hover:gap-2 transition-all">
                Join Us <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
