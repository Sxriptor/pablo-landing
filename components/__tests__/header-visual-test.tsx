"use client"

import { Header } from '../header'
import { useState } from 'react'

const backgroundOptions = [
  {
    name: 'White Background',
    style: { backgroundColor: '#ffffff' },
    description: 'Pure white background to test dark text visibility'
  },
  {
    name: 'Light Gray Background',
    style: { backgroundColor: '#f5f5f5' },
    description: 'Light gray background to test contrast'
  },
  {
    name: 'Black Background',
    style: { backgroundColor: '#000000' },
    description: 'Pure black background to test light text visibility'
  },
  {
    name: 'Dark Gray Background',
    style: { backgroundColor: '#1a1a1a' },
    description: 'Dark gray background to test contrast'
  },
  {
    name: 'Light Image Background',
    style: { 
      backgroundImage: 'url(/soccer-field-aerial-view-night.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'brightness(1.5) contrast(0.8)'
    },
    description: 'Light/bright image background'
  },
  {
    name: 'Dark Image Background',
    style: { 
      backgroundImage: 'url(/soccer-field-aerial-view-night.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'brightness(0.3) contrast(1.2)'
    },
    description: 'Dark image background'
  },
  {
    name: 'Complex/Busy Background',
    style: { 
      backgroundImage: 'url(/soccer-players-action-shot.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    description: 'Complex background with lots of detail'
  },
  {
    name: 'High Contrast Pattern',
    style: { 
      backgroundImage: 'linear-gradient(45deg, #000 25%, #fff 25%, #fff 50%, #000 50%, #000 75%, #fff 75%, #fff)',
      backgroundSize: '40px 40px'
    },
    description: 'High contrast checkerboard pattern'
  },
  {
    name: 'Gradient Background',
    style: { 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    description: 'Gradient background to test mid-tone visibility'
  },
  {
    name: 'Video Background Simulation',
    style: { 
      backgroundImage: 'url(/soccer-app-mobile-interface.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      animation: 'backgroundShift 10s ease-in-out infinite'
    },
    description: 'Simulates changing video background'
  }
]

export function HeaderVisualTest() {
  const [currentBackground, setCurrentBackground] = useState(0)
  const [showTestInfo, setShowTestInfo] = useState(true)

  return (
    <div className="min-h-screen relative">
      {/* Background Animation Keyframes */}
      <style jsx>{`
        @keyframes backgroundShift {
          0%, 100% { filter: brightness(0.8) contrast(1.1); }
          25% { filter: brightness(1.2) contrast(0.9); }
          50% { filter: brightness(0.6) contrast(1.3); }
          75% { filter: brightness(1.0) contrast(1.0); }
        }
      `}</style>

      {/* Dynamic Background */}
      <div 
        className="fixed inset-0 transition-all duration-1000 ease-in-out"
        style={backgroundOptions[currentBackground].style}
      />

      {/* Header Component */}
      <Header />

      {/* Test Controls */}
      {showTestInfo && (
        <div className="fixed bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 z-[100]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">Header Transparency Visual Test</h3>
              <button
                onClick={() => setShowTestInfo(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="text-white/80 text-sm">
              <strong>Current:</strong> {backgroundOptions[currentBackground].name}
              <br />
              <span className="text-white/60">{backgroundOptions[currentBackground].description}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {backgroundOptions.map((bg, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBackground(index)}
                  className={`px-3 py-1 rounded text-xs transition-all ${
                    currentBackground === index
                      ? 'bg-white text-black'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {bg.name}
                </button>
              ))}
            </div>

            <div className="text-white/60 text-xs">
              <strong>Test Checklist:</strong>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Logo and text remain clearly visible</li>
                <li>Navigation links are readable</li>
                <li>Hover effects work properly</li>
                <li>Mobile menu button is visible</li>
                <li>Focus indicators are visible</li>
                <li>Animations work smoothly</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Show/Hide Test Controls Button */}
      {!showTestInfo && (
        <button
          onClick={() => setShowTestInfo(true)}
          className="fixed bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg z-[100] hover:bg-black/90 transition-colors"
        >
          Show Test Controls
        </button>
      )}

      {/* Content Area for Testing */}
      <div className="pt-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Header Transparency Test</h1>
            <p className="text-white/80 text-lg mb-6">
              This page allows you to test the transparent header against various backgrounds
              to ensure optimal visibility and contrast in all scenarios.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-3">Animation Tests</h2>
                <ul className="text-white/80 space-y-2">
                  <li>• Logo spring animation on page load</li>
                  <li>• Text slide-in animation</li>
                  <li>• Navigation fade-in animation</li>
                  <li>• Button hover animations</li>
                  <li>• Mobile menu slide animations</li>
                </ul>
              </div>
              
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-3">Visibility Tests</h2>
                <ul className="text-white/80 space-y-2">
                  <li>• Text shadows provide adequate contrast</li>
                  <li>• Icons remain visible with drop shadows</li>
                  <li>• Focus indicators are clearly visible</li>
                  <li>• Hover effects enhance visibility</li>
                  <li>• Mobile menu maintains functionality</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Responsive Testing</h2>
            <p className="text-white/80 mb-4">
              Resize your browser window to test responsive behavior:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Mobile (&lt; 768px)</h3>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Mobile menu button visible</li>
                  <li>• Desktop nav hidden</li>
                  <li>• Download button hidden</li>
                </ul>
              </div>
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Tablet (768px - 1024px)</h3>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Desktop nav visible</li>
                  <li>• Mobile menu hidden</li>
                  <li>• Download button visible</li>
                </ul>
              </div>
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Desktop (&gt; 1024px)</h3>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Full navigation visible</li>
                  <li>• Optimal spacing</li>
                  <li>• All animations smooth</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Performance Notes</h2>
            <div className="text-white/80 space-y-3">
              <p>
                <strong>Improvements from transparency:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Removed expensive backdrop-filter calculations</li>
                <li>Eliminated scroll-based opacity transitions</li>
                <li>Reduced CSS complexity and repaints</li>
                <li>Maintained 60fps animations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}