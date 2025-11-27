import type { Metadata } from 'next'
import { EB_Garamond, Nunito } from 'next/font/google'
import './globals.css'

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-garamond',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
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
      <body className={`${garamond.variable} ${nunito.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
