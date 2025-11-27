import type { Metadata } from 'next'
import { Josefin_Sans, Nunito } from 'next/font/google'
import './globals.css'

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Termichemti - Your Wi-Fi, Unlocked',
  description: 'A desktop companion that reveals your saved Wi-Fi passwords, scans nearby networks, and helps you connect smarter on Windows and Linux.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${josefinSans.variable} ${nunito.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}

