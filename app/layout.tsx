import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sereneeaglefinancialstrategies.com'),
  title: {
    default: 'Serene Eagle Financial Strategies',
    template: '%s | Serene Eagle Financial Strategies',
  },
  description:
    'Empowering business owners and families with retirement, insurance, and tax-advantaged financial strategies.',
  openGraph: {
    title: 'Serene Eagle Financial Strategies',
    description:
      'Empowering business owners and families with retirement, insurance, and tax-advantaged financial strategies.',
    url: 'https://sereneeaglefinancialstrategies.com',
    siteName: 'Serene Eagle Financial Strategies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serene Eagle Financial Strategies',
    description:
      'Empowering business owners and families with retirement, insurance, and tax-advantaged financial strategies.',
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, 'min-h-screen font-sans antialiased')}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

