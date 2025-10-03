"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/40 backdrop-blur-sm border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="w-full px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5 text-primary-foreground"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v20M2 12h20" />
              </svg>
            </div>
            <span className="text-xl text-white font-bold">Pablo</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
            <a href="/meet-padlo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Meet Pablo
            </a>
            <a href="/partners" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Partners
            </a>
          </nav>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">Open App</Button>
      </div>
    </header>
  )
}
