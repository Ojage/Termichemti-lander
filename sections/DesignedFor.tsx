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
    <section className="relative py-24 overflow-hidden bg-white">
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
              <span className="text-black">Behind the scenes,</span>{' '}
              <span className="text-primary">
                it speaks netsh and nmcli
              </span>{' '}
              <span className="text-black">so you don't have to.</span>
            </h2>
            <p className="text-lg text-gray-dark leading-relaxed">
              Termichemti uses your system's own network tools under the hood
              but wraps them in a safe, intuitive interface. No more hunting
              through command-line documentation or remembering obscure flags.
            </p>
            <p className="text-lg text-gray-dark leading-relaxed">
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
                className="bg-gray-dark border border-gray-300 rounded-lg p-4 font-mono text-xs text-white"
              >
                <div className="text-red-400 mb-2">$ netsh wlan show profile</div>
                <div className="text-gray-400 space-y-1">
                  <div>All User Profile Information</div>
                  <div>---</div>
                  <div>Profile : HomeNetwork</div>
                  <div>Profile : OfficeWiFi</div>
                  <div>Profile : GuestNetwork</div>
                </div>
                <div className="text-red-400 mt-4">
                  $ netsh wlan show profile name="HomeNetwork" key=clear
                </div>
                <div className="text-gray-400 mt-2">
                  Key Content : ********
                </div>
                <motion.div
                  className="mt-2 text-primary"
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
                className="bg-gray-light border border-gray-300 rounded-lg p-4"
              >
                <div className="text-primary font-semibold mb-3 text-sm">
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
                        className="bg-white border border-gray-200 rounded p-2 text-xs flex items-center justify-between"
                      >
                        <span className="text-gray-dark">{network}</span>
                        <button className="text-primary text-xs hover:text-primary-dark">
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
