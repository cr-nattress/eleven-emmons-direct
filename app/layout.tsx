import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@/lib/analytics'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: '11 Emmons Road - Luxury Vacation Rental | Crested Butte, CO',
  description:
    'Book your stay at 11 Emmons Road, Unit 324 in Crested Butte, Colorado. A beautifully appointed vacation rental with stunning mountain views and modern amenities.',
  keywords: [
    'Crested Butte',
    'vacation rental',
    'Colorado',
    'mountain rental',
    'direct booking',
    'ski resort',
  ],
  authors: [{ name: '11 Emmons Road' }],
  openGraph: {
    title: '11 Emmons Road - Crested Butte Vacation Rental',
    description:
      'Book direct and save. Beautiful vacation rental in the heart of Crested Butte.',
    url: 'https://11emmons.netlify.app',
    siteName: '11 Emmons Road',
    images: [
      {
        url: '/images/airbnb-2-1.png',
        width: 1200,
        height: 630,
        alt: '11 Emmons Road - Luxury Vacation Rental in Crested Butte',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '11 Emmons Road - Crested Butte Vacation Rental',
    description:
      'Book direct and save. Beautiful vacation rental in the heart of Crested Butte.',
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
