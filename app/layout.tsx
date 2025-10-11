import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PlayCircle - Multi-Sport Game Finder',
  description: 'Find and join sports games near you - Soccer, Football, Tennis, Padel, and more',
  generator: 'PlayCircle - Multi-Sport Platform',
  icons: {
    icon: '/playcirclelogonew.png',
    shortcut: '/playcirclelogonew.png',
    apple: '/playcirclelogonew.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark overscroll-none">
      <body className={`font-sans overscroll-none ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
