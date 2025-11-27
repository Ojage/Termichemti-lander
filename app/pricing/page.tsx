'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { CheckIcon } from '@/components/Icons'

const plans = [
  {
    badge: 'Public preview',
    title: 'Individual plan',
    price: '0 FCFA',
    cadence: '/month',
    description: 'Get started with your Termichemti account.',
    ctaLabel: 'Download',
    ctaHref: '/#download',
    features: [
      'View all saved Wi-Fi networks',
      'Reveal and copy passwords',
      'Scan and monitor nearby networks',
      'Cross-platform (Windows & Linux)',
    ],
    highlight: true,
  },
  {
    badge: 'Coming soon',
    title: 'Team plan',
    description: 'Self-serve in minutes for small teams and organizations.',
    ctaLabel: 'Notify me when available',
    ctaHref: '/#contact',
  },
  {
    badge: 'Coming soon',
    title: 'Enterprise plan',
    description: 'Termichemti plans with full enterprise support.',
    ctaLabel: 'Notify me when available',
    ctaHref: '/#contact',
  },
]

export default function PricingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <Navigation />
      <section className="relative pt-20 pb-24 sm:pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                'radial-gradient(rgba(37,99,235,0.18) 1.5px, transparent 1.5px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'radial-gradient(rgba(37,99,235,0.14) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
              transform: 'rotate(6deg)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-white" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-black mb-4 leading-tight">
              Choose the perfect plan
              <br className="hidden sm:block" />
              for your journey
            </h1>
            <p className="text-base sm:text-lg text-gray-dark">
              Termichemti is now available for everyone. Pick the plan that fits you best.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan, index) => {
              const isPrimary = plan.highlight
              const baseCard =
                'flex h-full flex-col rounded-[28px] border border-gray-200 bg-gray-light/80 p-8 shadow-[0_25px_70px_-35px_rgba(0,0,0,0.35)] backdrop-blur-sm'
              return (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  className={isPrimary ? `${baseCard} border-2 border-gray-200` : baseCard}
                >
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-dark">
                      {plan.badge}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-black mb-2">
                      {plan.title}
                    </h2>
                    {plan.price && (
                      <div className="text-4xl sm:text-5xl font-bold text-black">
                        {plan.price}
                        <span className="text-lg font-semibold text-gray-dark ml-2">
                          {plan.cadence}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-dark text-base sm:text-lg mb-6">
                    {plan.description}
                  </p>

                  {plan.features && (
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-gray-dark">
                          <CheckIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto pt-2">
                    <a
                      href={plan.ctaHref}
                      className={
                        isPrimary
                          ? 'inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-gray-900'
                          : 'inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-base font-semibold text-gray-dark transition-colors hover:border-gray-300 hover:bg-gray-light'
                      }
                    >
                      {plan.ctaLabel}
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
