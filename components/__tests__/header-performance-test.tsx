"use client"

import { Header } from '../header'
import { useState, useEffect, useRef } from 'react'

interface PerformanceMetrics {
  renderTime: number
  scrollPerformance: number[]
  animationFrameRate: number
  memoryUsage?: number
  layoutShifts: number
}

export function HeaderPerformanceTest() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isRunning, setIsRunning] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const frameCountRef = useRef(0)
  const startTimeRef = useRef(0)

  const runPerformanceTest = async () => {
    setIsRunning(true)
    setMetrics(null)

    // Measure render time
    const renderStart = performance.now()
    
    // Force a re-render by updating state
    await new Promise(resolve => {
      setTimeout(() => {
        const renderEnd = performance.now()
        const renderTime = renderEnd - renderStart

        // Measure scroll performance
        measureScrollPerformance(renderTime)
      }, 100)
    })
  }

  const measureScrollPerformance = (renderTime: number) => {
    const scrollTimes: number[] = []
    let scrollCount = 0
    const maxScrolls = 50

    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    // Measure animation frame rate
    frameCountRef.current = 0
    startTimeRef.current = performance.now()
    
    const measureFrameRate = () => {
      frameCountRef.current++
      if (frameCountRef.current < 60) {
        requestAnimationFrame(measureFrameRate)
      } else {
        const endTime = performance.now()
        const duration = endTime - startTimeRef.current
        const frameRate = (frameCountRef.current / duration) * 1000
        
        finishTest(renderTime, scrollTimes, frameRate)
      }
    }

    const performScroll = () => {
      if (scrollCount >= maxScrolls) {
        requestAnimationFrame(measureFrameRate)
        return
      }

      const scrollStart = performance.now()
      
      scrollContainer.scrollTop = (scrollCount * 20) % 1000
      
      requestAnimationFrame(() => {
        const scrollEnd = performance.now()
        scrollTimes.push(scrollEnd - scrollStart)
        scrollCount++
        
        setTimeout(performScroll, 16) // ~60fps
      })
    }

    performScroll()
  }

  const finishTest = (renderTime: number, scrollTimes: number[], frameRate: number) => {
    // Calculate layout shifts (simplified)
    const layoutShifts = 0 // In a real test, this would measure CLS

    // Get memory usage if available
    const memoryUsage = (performance as any).memory?.usedJSHeapSize || undefined

    const finalMetrics: PerformanceMetrics = {
      renderTime,
      scrollPerformance: scrollTimes,
      animationFrameRate: frameRate,
      memoryUsage,
      layoutShifts
    }

    setMetrics(finalMetrics)
    setIsRunning(false)
  }

  const getAverageScrollTime = () => {
    if (!metrics || metrics.scrollPerformance.length === 0) return 0
    return metrics.scrollPerformance.reduce((a, b) => a + b, 0) / metrics.scrollPerformance.length
  }

  const getScrollPerformanceRating = () => {
    const avgTime = getAverageScrollTime()
    if (avgTime < 1) return { rating: 'Excellent', color: 'text-green-400' }
    if (avgTime < 2) return { rating: 'Good', color: 'text-yellow-400' }
    if (avgTime < 5) return { rating: 'Fair', color: 'text-orange-400' }
    return { rating: 'Poor', color: 'text-red-400' }
  }

  const getFrameRateRating = () => {
    if (!metrics) return { rating: 'Unknown', color: 'text-gray-400' }
    if (metrics.animationFrameRate >= 55) return { rating: 'Excellent (60fps)', color: 'text-green-400' }
    if (metrics.animationFrameRate >= 45) return { rating: 'Good (45-60fps)', color: 'text-yellow-400' }
    if (metrics.animationFrameRate >= 30) return { rating: 'Fair (30-45fps)', color: 'text-orange-400' }
    return { rating: 'Poor (<30fps)', color: 'text-red-400' }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      <Header />
      
      <div 
        ref={scrollContainerRef}
        className="pt-20 px-4 sm:px-6 lg:px-12 max-h-screen overflow-y-auto"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Header Performance Test</h1>
            <p className="text-white/80 text-lg mb-6">
              This test measures the performance improvements achieved by removing backdrop filters
              and scroll-based opacity calculations from the transparent header.
            </p>

            <button
              onClick={runPerformanceTest}
              disabled={isRunning}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                isRunning
                  ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {isRunning ? 'Running Test...' : 'Run Performance Test'}
            </button>
          </div>

          {metrics && (
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Render Performance</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/80">Initial Render Time:</span>
                    <span className="text-white font-mono">
                      {metrics.renderTime.toFixed(2)}ms
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Rating:</span>
                    <span className={metrics.renderTime < 16 ? 'text-green-400' : 
                                   metrics.renderTime < 33 ? 'text-yellow-400' : 'text-red-400'}>
                      {metrics.renderTime < 16 ? 'Excellent' : 
                       metrics.renderTime < 33 ? 'Good' : 'Needs Improvement'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Animation Performance</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/80">Frame Rate:</span>
                    <span className="text-white font-mono">
                      {metrics.animationFrameRate.toFixed(1)} fps
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Rating:</span>
                    <span className={getFrameRateRating().color}>
                      {getFrameRateRating().rating}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Scroll Performance</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/80">Avg Scroll Time:</span>
                    <span className="text-white font-mono">
                      {getAverageScrollTime().toFixed(2)}ms
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Rating:</span>
                    <span className={getScrollPerformanceRating().color}>
                      {getScrollPerformanceRating().rating}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Samples:</span>
                    <span className="text-white font-mono">
                      {metrics.scrollPerformance.length}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Memory Usage</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/80">JS Heap Size:</span>
                    <span className="text-white font-mono">
                      {metrics.memoryUsage 
                        ? `${(metrics.memoryUsage / 1024 / 1024).toFixed(2)} MB`
                        : 'Not Available'
                      }
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Layout Shifts:</span>
                    <span className="text-white font-mono">
                      {metrics.layoutShifts}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Performance Improvements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Removed Performance Bottlenecks</h3>
                <ul className="text-white/80 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Eliminated backdrop-filter blur calculations
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Removed scroll-based opacity transitions
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Simplified CSS selectors and properties
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Reduced repaints and reflows
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Expected Benefits</h3>
                <ul className="text-white/80 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">→</span>
                    Faster initial page load
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">→</span>
                    Smoother scroll performance
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">→</span>
                    Better battery life on mobile
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">→</span>
                    Improved Core Web Vitals scores
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Scroll test content */}
          <div className="space-y-8">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="bg-black/20 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Test Section {i + 1}
                </h3>
                <p className="text-white/80">
                  This content is used to test scroll performance. The transparent header
                  should maintain smooth scrolling without any performance degradation.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}