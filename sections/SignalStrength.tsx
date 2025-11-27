'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const networks = [
  { name: 'HomeNetwork', strength: 'excellent' as const },
  { name: 'OfficeWiFi', strength: 'good' as const },
  { name: 'CoffeeShop', strength: 'weak' as const },
  { name: 'NeighborNet', strength: 'good' as const },
  { name: 'PublicWiFi', strength: 'weak' as const },
]

const strengthConfig = {
  excellent: {
    bars: 4,
    label: 'Excellent for streaming',
    color: '#2563eb',
  },
  good: {
    bars: 3,
    label: 'Good for browsing',
    color: '#2563eb',
  },
  weak: {
    bars: 2,
    label: 'Weak connection',
    color: '#6b7280',
  },
}

export default function SignalStrength() {
  const [hoveredNetwork, setHoveredNetwork] = useState<string | null>(null)
  const activeConfig =
    hoveredNetwork &&
    strengthConfig[
      networks.find((n) => n.name === hoveredNetwork)?.strength || 'good'
    ]

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-black"
        >
          <span className="text-black">Signal Strength</span>{' '}
          <span className="text-primary">You Can Feel</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Network List */}
          <div className="space-y-4">
            {networks.map((network, index) => {
              const config = strengthConfig[network.strength]
              const isHovered = hoveredNetwork === network.name

              return (
                <motion.div
                  key={network.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredNetwork(network.name)}
                  onMouseLeave={() => setHoveredNetwork(null)}
                  className={`p-4 rounded-lg border transition-all cursor-pointer ${
                    isHovered
                      ? 'border-primary bg-gray-light'
                      : 'border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-dark font-medium">
                      {network.name}
                    </span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 rounded-t"
                          style={{
                            height: `${8 + i * 4}px`,
                            backgroundColor:
                              i < config.bars ? config.color : '#e5e7eb',
                          }}
                          animate={{
                            opacity: isHovered && i < config.bars ? [1, 0.5, 1] : 1,
                          }}
                          transition={{
                            duration: 1,
                            repeat: isHovered ? Infinity : 0,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right: Wi-Fi Symbol Visualization */}
          <div className="flex flex-col items-center justify-center">
            <motion.div
              className="relative"
              animate={
                activeConfig
                  ? {
                      scale: [1, 1.1, 1],
                    }
                  : {}
              }
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* Wi-Fi Symbol */}
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                className="transform -rotate-90"
              >
                {[...Array(4)].map((_, i) => {
                  const radius = 40 + i * 25
                  const isActive =
                    activeConfig && i < activeConfig.bars
                      ? true
                      : !activeConfig && i < 3

                  return (
                    <motion.path
                      key={i}
                      d={`M 100 ${100 - radius} A ${radius} ${radius} 0 0 1 ${
                        100 + radius * Math.cos(Math.PI / 6)
                      } ${100 - radius * Math.sin(Math.PI / 6)}`}
                      fill="none"
                      stroke={
                        isActive
                          ? activeConfig
                            ? activeConfig.color
                            : '#2563eb'
                          : '#e5e7eb'
                      }
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: isActive ? 1 : 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    />
                  )
                })}
                {/* Center dot */}
                <circle
                  cx="100"
                  cy="100"
                  r="4"
                  fill={activeConfig ? activeConfig.color : '#2563eb'}
                />
              </svg>
            </motion.div>

            {/* Label */}
            {activeConfig && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 text-xl font-semibold text-black"
              >
                {activeConfig.label}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
