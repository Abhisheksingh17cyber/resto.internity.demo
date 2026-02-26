import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'INTERNITY | Fine Traditional British Cuisine',
  description:
    'INTERNITY celebrates the rich heritage of British gastronomy, elevating classic dishes with modern precision in an intimate, refined setting.',
  generator: 'v0.app',
  keywords: ['restaurant', 'British cuisine', 'fine dining', 'UK', 'traditional food', 'INTERNITY'],
  openGraph: {
    title: 'INTERNITY | Fine Traditional British Cuisine',
    description:
      'Celebrating the rich heritage of British gastronomy with modern precision.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0D0D0D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-[#0D0D0D] text-[#F5F0E8] overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
