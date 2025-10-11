"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


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
        className="fixed top-0 left-0 right-0 w-full z-50"
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between relative">
          <div className="flex items-center gap-2 sm:gap-8 flex-1 min-w-0">
            <a href="/" className="flex items-center gap-2 whitespace-nowrap flex-shrink-0">
              <motion.div
                className={`w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 ${mobileMenuOpen ? 'blur-sm' : ''}`}
                style={{
                  filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8)) drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.9))'
                }}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 200,
                  delay: 0.1
                }}
              >
                <img
                  src="/playcirclelogonew.png"
                  alt="PlayCircle Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.span
                className={`text-lg sm:text-xl text-white font-bold transition-all duration-300 ${mobileMenuOpen ? 'blur-sm' : ''
                  }`}
                style={{
                  fontWeight: 700,
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 1px 1px 2px rgba(0, 0, 0, 0.9), 0 0 8px rgba(255, 255, 255, 0.2)'
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3
                }}
              >
                PlayCircle
              </motion.span>
            </a>
            <motion.nav
              className="hidden md:flex items-center gap-2 p-2 rounded-full flex-shrink-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5
              }}
            >
              <a
                href="/about"
                className="text-sm text-white/80 hover:text-white transition-all duration-200 px-4 py-2 rounded-full whitespace-nowrap focus:outline-none"
                style={{
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
                  fontWeight: 500
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 10px rgba(255, 255, 255, 0.3)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.8)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 15px rgba(255, 255, 255, 0.5)'
                  e.currentTarget.style.outline = '2px solid rgba(255, 255, 255, 0.6)'
                  e.currentTarget.style.outlineOffset = '2px'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.8)'
                  e.currentTarget.style.outline = 'none'
                }}
              >
                About
              </a>
              <a
                href="/contact"
                className="text-sm text-white/80 hover:text-white transition-all duration-200 px-4 py-2 rounded-full whitespace-nowrap focus:outline-none"
                style={{
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
                  fontWeight: 500
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 10px rgba(255, 255, 255, 0.3)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.8)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 15px rgba(255, 255, 255, 0.5)'
                  e.currentTarget.style.outline = '2px solid rgba(255, 255, 255, 0.6)'
                  e.currentTarget.style.outlineOffset = '2px'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.8)'
                  e.currentTarget.style.outline = 'none'
                }}
              >
                Contact
              </a>
              <a
                href="/meet-playcircle"
                className="text-sm text-white/80 hover:text-white transition-all duration-200 px-4 py-2 rounded-full whitespace-nowrap focus:outline-none"
                style={{
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
                  fontWeight: 500
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 10px rgba(255, 255, 255, 0.3)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.8)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 15px rgba(255, 255, 255, 0.5)'
                  e.currentTarget.style.outline = '2px solid rgba(255, 255, 255, 0.6)'
                  e.currentTarget.style.outlineOffset = '2px'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.8)'
                  e.currentTarget.style.outline = 'none'
                }}
              >
                Meet PlayCircle
              </a>
              <a
                href="/partners"
                className="text-sm text-white/80 hover:text-white transition-all duration-200 px-4 py-2 rounded-full whitespace-nowrap focus:outline-none"
                style={{
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
                  fontWeight: 500
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 10px rgba(255, 255, 255, 0.3)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.8)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 15px rgba(255, 255, 255, 0.5)'
                  e.currentTarget.style.outline = '2px solid rgba(255, 255, 255, 0.6)'
                  e.currentTarget.style.outlineOffset = '2px'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.8)'
                  e.currentTarget.style.outline = 'none'
                }}
              >
                Partners
              </a>
            </motion.nav>
          </div>

          {/* Desktop: Download App Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.7,
              type: "spring"
            }}
          >
            <Button 
              className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 transition-all duration-200"
              style={{
                filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(3px 3px 8px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 12px rgba(255, 255, 255, 0.2))'
                e.currentTarget.style.transform = 'translateY(-1px) scale(1.02)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))'
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
              }}
              onFocus={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(3px 3px 8px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 16px rgba(255, 255, 255, 0.3))'
                e.currentTarget.style.outline = '2px solid rgba(255, 255, 255, 0.6)'
                e.currentTarget.style.outlineOffset = '2px'
              }}
              onBlur={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))'
                e.currentTarget.style.outline = 'none'
              }}
            >
              Download App
            </Button>
          </motion.div>

          {/* Mobile: Hamburger Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-gray-300 transition-all duration-200 relative z-[60] flex-shrink-0"
            aria-label="Toggle menu"
            style={{
              filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8)) drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.9))',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)'
            }}
            initial={{ opacity: 0, rotate: -90, scale: 0 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              type: "spring",
              stiffness: 200
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))'
              e.currentTarget.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8)) drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.9))'
              e.currentTarget.style.transform = 'scale(1)'
            }}
            onFocus={(e) => {
              e.currentTarget.style.filter = 'drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 12px rgba(255, 255, 255, 0.6))'
              e.currentTarget.style.outline = '2px solid rgba(255, 255, 255, 0.6)'
              e.currentTarget.style.outlineOffset = '2px'
            }}
            onBlur={(e) => {
              e.currentTarget.style.filter = 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8)) drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.9))'
              e.currentTarget.style.outline = 'none'
            }}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setMobileMenuOpen(false)}
        style={{
          touchAction: 'none'
        }}
      />

      {/* Mobile Menu Sidebar */}
      {mobileMenuOpen && (
        <div
          className="absolute top-0 right-0 h-full w-64 sm:w-72 z-50 md:hidden animate-in slide-in-from-right duration-300"
          style={{
            background: 'rgba(13, 18, 22, 0.15)',
            backdropFilter: 'blur(25px)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '-20px 0 60px rgba(0, 0, 0, 0.3), inset 1px 0 0 rgba(255, 255, 255, 0.05)'
          }}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20 backdrop-blur-sm">
              <span className="text-lg font-bold text-white">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white hover:text-gray-300 transition-all duration-200"
                aria-label="Close menu"
                style={{
                  filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8)) drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.9))'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))'
                  e.currentTarget.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8)) drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.9))'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 12px rgba(255, 255, 255, 0.6))'
                  e.currentTarget.style.outline = '2px solid rgba(255, 255, 255, 0.6)'
                  e.currentTarget.style.outlineOffset = '2px'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8)) drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.9))'
                  e.currentTarget.style.outline = 'none'
                }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-2 p-6">
              <a
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-white hover:text-white transition-all duration-200 py-3 px-4 rounded-lg whitespace-nowrap focus:outline-none"
                style={{
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
                  fontWeight: 500
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 10px rgba(255, 255, 255, 0.3)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.8)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 15px rgba(255, 255, 255, 0.5)'
                  e.currentTarget.style.outline = '2px solid rgba(255, 255, 255, 0.6)'
                  e.currentTarget.style.outlineOffset = '2px'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.8)'
                  e.currentTarget.style.outline = 'none'
                }}
              >
                Home
              </a>
              <a
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-white hover:text-white transition-all duration-200 py-3 px-4 rounded-lg whitespace-nowrap focus:outline-none"
                style={{
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
                  fontWeight: 500
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 10px rgba(255, 255, 255, 0.3)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.8)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 15px rgba(255, 255, 255, 0.5)'
                  e.currentTarget.style.outline = '2px solid rgba(255, 255, 255, 0.6)'
                  e.currentTarget.style.outlineOffset = '2px'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.8)'
                  e.currentTarget.style.outline = 'none'
                }}
              >
                About
              </a>
              <a
                href="/meet-playcircle"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-white hover:text-white transition-all duration-200 py-3 px-4 rounded-lg whitespace-nowrap focus:outline-none"
                style={{
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
                  fontWeight: 500
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 10px rgba(255, 255, 255, 0.3)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.8)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 15px rgba(255, 255, 255, 0.5)'
                  e.currentTarget.style.outline = '2px solid rgba(255, 255, 255, 0.6)'
                  e.currentTarget.style.outlineOffset = '2px'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.8)'
                  e.currentTarget.style.outline = 'none'
                }}
              >
                Meet PlayCircle
              </a>
              <a
                href="/partners"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-white hover:text-white transition-all duration-200 py-3 px-4 rounded-lg whitespace-nowrap focus:outline-none"
                style={{
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
                  fontWeight: 500
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 10px rgba(255, 255, 255, 0.3)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.8)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 15px rgba(255, 255, 255, 0.5)'
                  e.currentTarget.style.outline = '2px solid rgba(255, 255, 255, 0.6)'
                  e.currentTarget.style.outlineOffset = '2px'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.8)'
                  e.currentTarget.style.outline = 'none'
                }}
              >
                Partners
              </a>
              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-white hover:text-white transition-all duration-200 py-3 px-4 rounded-lg whitespace-nowrap focus:outline-none"
                style={{
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
                  fontWeight: 500
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 10px rgba(255, 255, 255, 0.3)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.8)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 15px rgba(255, 255, 255, 0.5)'
                  e.currentTarget.style.outline = '2px solid rgba(255, 255, 255, 0.6)'
                  e.currentTarget.style.outlineOffset = '2px'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.8)'
                  e.currentTarget.style.outline = 'none'
                }}
              >
                Contact
              </a>
            </nav>

            {/* Open App Button at Bottom */}
            <div className="mt-auto p-6 border-t border-white/20 backdrop-blur-sm">
              <Button
                className="w-full rounded-full py-3 font-semibold transition-all duration-300"
                style={{
                  background: '#456882',
                  color: 'white',
                  filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(3px 3px 8px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 12px rgba(255, 255, 255, 0.2))'
                  e.currentTarget.style.transform = 'translateY(-1px) scale(1.02)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))'
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(3px 3px 8px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 16px rgba(255, 255, 255, 0.3))'
                  e.currentTarget.style.outline = '2px solid rgba(255, 255, 255, 0.6)'
                  e.currentTarget.style.outlineOffset = '2px'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))'
                  e.currentTarget.style.outline = 'none'
                }}
              >
                Open App
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
