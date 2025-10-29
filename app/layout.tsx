import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@/lib/analytics'
import SkipLink from '@/components/SkipLink'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://11emmons.netlify.app'),
  title: 'Ski In Ski Out Crested Butte | 11 Emmons | Save 15%',
  description:
    'True ski-in/ski-out rental just 50 feet from Red Lady Express lift. 4.98★ rating, 88 reviews. Book direct and save 15% on your Crested Butte ski vacation.',
  keywords: [
    'ski in ski out Crested Butte',
    'ski in ski out rental',
    'Crested Butte ski rental',
    'Red Lady Express lift',
    'vacation rental',
    'Colorado',
    'direct booking',
    'ski resort',
  ],
  authors: [{ name: '11 Emmons Road' }],
  openGraph: {
    title: 'Ski In Ski Out Crested Butte | 11 Emmons Road',
    description:
      'True ski-in/ski-out luxury just 50 feet from Red Lady Express lift. 4.98★ rating. Book direct and save 15%.',
    url: 'https://11emmons.netlify.app',
    siteName: '11 Emmons Road',
    images: [
      {
        url: '/images/airbnb-2-1.png',
        width: 1200,
        height: 630,
        alt: 'Ski In Ski Out Crested Butte - 11 Emmons Road just 50 feet from lifts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ski In Ski Out Crested Butte | 11 Emmons Road',
    description:
      'True ski-in/ski-out luxury just 50 feet from Red Lady Express lift. 4.98★ rating. Book direct and save 15%.',
    images: ['/images/airbnb-2-1.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <SkipLink />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
