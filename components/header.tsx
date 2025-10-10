"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress from 0 to 1 over the first 200px
      const progress = Math.min(window.scrollY / 200, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: `rgba(3, 7, 11, ${scrollProgress * 0.4})`,
          backdropFilter: `blur(${scrollProgress * 12}px)`,
          borderBottom: `1px solid rgba(39, 39, 42, ${scrollProgress * 0.5})`,
        }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">
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
              <span className="text-lg sm:text-xl text-white font-bold">PlayCircle</span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <a href="/meet-playcircle" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Meet PlayCircle
              </a>
              <a href="/partners" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Partners
              </a>
            </nav>
          </div>

          {/* Desktop: Open App Button */}
          <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
            Open App
          </Button>

          {/* Mobile: Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-50 md:hidden transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(13, 18, 22, 0.98) 0%, rgba(69, 104, 130, 0.95) 100%)',
          backdropFilter: 'blur(20px)',
          borderLeft: '1px solid rgba(69, 104, 130, 0.3)',
          boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span className="text-lg font-bold text-white">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white hover:text-gray-300 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 p-6">
            <a
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-white hover:text-[#456882] transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
            >
              Home
            </a>
            <a
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-white hover:text-[#456882] transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
            >
              About
            </a>
            <a
              href="/meet-playcircle"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-white hover:text-[#456882] transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
            >
              Meet PlayCircle
            </a>
            <a
              href="/partners"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-white hover:text-[#456882] transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
            >
              Partners
            </a>
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-white hover:text-[#456882] transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
            >
              Contact
            </a>
          </nav>

          {/* Open App Button at Bottom */}
          <div className="mt-auto p-6 border-t border-white/10">
            <Button
              className="w-full rounded-full py-3 font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: '#456882',
                color: 'white'
              }}
            >
              Open App
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
