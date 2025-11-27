'use client'

import { useEffect, useRef, useState } from 'react'
import { WiFiPhysicsEngine } from '@/lib/physics'
import { motion } from 'framer-motion'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const engineRef = useRef<WiFiPhysicsEngine | null>(null)
  const animationFrameRef = useRef<number>()
  const [hintVisible, setHintVisible] = useState(true)

  useEffect(() => {
    if (!canvasRef.current) return

    // Initialize physics engine
    const engine = new WiFiPhysicsEngine(canvasRef.current)
    engineRef.current = engine

    // Animation loop
    const animate = () => {
      engine.update()
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    animate()

    // Hide hint after 5 seconds
    const hintTimer = setTimeout(() => setHintVisible(false), 5000)

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect()
      if (rect) {
        engine.setMousePosition(e.clientX - rect.left, e.clientY - rect.top)
      }
    }

    // Click handler
    const handleClick = (e: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect()
      if (rect) {
        const clicked = engine.handleClick(
          e.clientX - rect.left,
          e.clientY - rect.top
        )
        if (clicked) {
          // Could show a tooltip or feature here
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    canvasRef.current.addEventListener('click', handleClick)

    // Initial scripted motion - give objects initial velocities
    setTimeout(() => {
      engine.setInitialVelocities()
    }, 100)

    return () => {
      clearTimeout(hintTimer)
      window.removeEventListener('mousemove', handleMouseMove)
      canvasRef.current?.removeEventListener('click', handleClick)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      engine.destroy()
    }
  }, [])

  const scrollToFeatures = () => {
    const element = document.querySelector('#features')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToDownload = () => {
    const element = document.querySelector('#download')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-wifi-dark via-wifi-navy to-wifi-dark" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
            >
              <span className="text-white">Meet</span>{' '}
              <span className="text-wifi-cyan">Termichemti</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            >
              A desktop companion that reveals your saved Wi-Fi passwords, scans
              nearby networks, and helps you connect smarter on Windows and
              Linux.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={scrollToDownload}
                className="px-8 py-4 bg-wifi-cyan text-wifi-dark font-semibold rounded-full text-lg hover:bg-wifi-green transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download for Windows
              </motion.button>
              <motion.button
                onClick={scrollToFeatures}
                className="px-8 py-4 border-2 border-wifi-cyan text-wifi-cyan font-semibold rounded-full text-lg hover:bg-wifi-cyan/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See features
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Interactive Canvas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-wifi-cyan/20"
          >
            <canvas
              ref={canvasRef}
              className="w-full h-full cursor-crosshair"
              aria-label="Interactive Wi-Fi network visualization"
            />
            {hintVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-wifi-cyan/70 bg-wifi-navy/80 px-4 py-2 rounded-full backdrop-blur-sm"
              >
                Move your mouse to disturb the network
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-wifi-cyan/50"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

