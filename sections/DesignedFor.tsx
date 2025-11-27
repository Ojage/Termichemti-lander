'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function DesignedFor() {
  const terminalRef = useRef<HTMLDivElement>(null)
  const uiRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in')
          }
        })
      },
      { threshold: 0.3 }
    )

    if (terminalRef.current) observer.observe(terminalRef.current)
    if (uiRef.current) observer.observe(uiRef.current)

    return () => {
      if (terminalRef.current) observer.unobserve(terminalRef.current)
      if (uiRef.current) observer.unobserve(uiRef.current)
    }
  }, [])

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-wifi-dark to-wifi-navy/30" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              <span className="text-white">Behind the scenes,</span>{' '}
              <span className="text-wifi-cyan">
                it speaks netsh and nmcli
              </span>{' '}
              <span className="text-white">so you don't have to.</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Termichemti uses your system's own network tools under the hood
              but wraps them in a safe, intuitive interface. No more hunting
              through command-line documentation or remembering obscure flags.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you're on Windows using netsh or Linux with nmcli,
              Termichemti abstracts the complexity while giving you full control
              over your wireless networks.
            </p>
          </motion.div>

          {/* Right: Split View Mockup */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Terminal Mock */}
              <motion.div
                ref={terminalRef}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-wifi-dark border border-red-500/30 rounded-lg p-4 font-mono text-xs"
              >
                <div className="text-red-400 mb-2">$ netsh wlan show profile</div>
                <div className="text-gray-500 space-y-1">
                  <div>All User Profile Information</div>
                  <div>---</div>
                  <div>Profile : HomeNetwork</div>
                  <div>Profile : OfficeWiFi</div>
                  <div>Profile : GuestNetwork</div>
                </div>
                <div className="text-red-400 mt-4">
                  $ netsh wlan show profile name="HomeNetwork" key=clear
                </div>
                <div className="text-gray-500 mt-2">
                  Key Content : ********
                </div>
                <motion.div
                  className="mt-2 text-wifi-cyan"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  {'>'} Copying password...
                </motion.div>
              </motion.div>

              {/* Termichemti UI Mock */}
              <motion.div
                ref={uiRef}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-wifi-navy border border-wifi-cyan/30 rounded-lg p-4"
              >
                <div className="text-wifi-cyan font-semibold mb-3 text-sm">
                  Saved Networks
                </div>
                <div className="space-y-2">
                  {['HomeNetwork', 'OfficeWiFi', 'GuestNetwork'].map(
                    (network, i) => (
                      <motion.div
                        key={network}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="bg-wifi-dark/50 rounded p-2 text-xs flex items-center justify-between"
                      >
                        <span className="text-gray-300">{network}</span>
                        <button className="text-wifi-green text-xs hover:text-wifi-cyan">
                          Copy
                        </button>
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

