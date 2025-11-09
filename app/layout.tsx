import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://sereneeaglefinancialstrategies.com"),
  title: {
    default: "Serene Eagle Financial Strategies | Insurance & Financial Planning",
    template: "%s | Serene Eagle Financial Strategies",
  },
  description:
    "Independent insurance-only practice helping you protect your financial future through life insurance, disability insurance, annuities, and long-term care solutions.",
  openGraph: {
    title: "Serene Eagle Financial Strategies",
    description:
      "Independent insurance-only practice helping you protect your financial future through life insurance, disability insurance, annuities, and long-term care solutions.",
    url: "https://sereneeaglefinancialstrategies.com",
    siteName: "Serene Eagle Financial Strategies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serene Eagle Financial Strategies",
    description:
      "Independent insurance-only practice helping you protect your financial future through life insurance, disability insurance, annuities, and long-term care solutions.",
  },
  icons: {
    icon: [
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
