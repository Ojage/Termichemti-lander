import Navigation from '@/components/Navigation'
import Hero from '@/sections/Hero'
import Features from '@/sections/Features'
import DesignedFor from '@/sections/DesignedFor'
import SignalStrength from '@/sections/SignalStrength'
import HowItWorks from '@/sections/HowItWorks'
import ForUsers from '@/sections/ForUsers'
import TechStack from '@/sections/TechStack'
import Download from '@/sections/Download'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Features />
      <DesignedFor />
      <SignalStrength />
      <HowItWorks />
      <ForUsers />
      <TechStack />
      <Download />
      <Footer />
    </main>
  )
}

