import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import type React from 'react'
import './globals.css'
import { PWAProvider } from '@/components/pwa-provider'
import { ThemeProvider } from '@/components/theme-provider'
import { Web3Provider } from '@/components/web3-provider'
import { Toaster } from '@/components/ui/toaster'
import { WebVitals } from '@/components/web-vitals'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web3 College - SocialFi Platform',
  description: 'A decentralized social learning platform for Web3 education',
  keywords: ['Web3', 'Blockchain', 'Education', 'SocialFi', 'DeFi'],
  authors: [{ name: 'Web3 College Team' }],
  openGraph: {
    title: 'Web3 College - SocialFi Platform',
    description: 'A decentralized social learning platform for Web3 education',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web3 College - SocialFi Platform',
    description: 'A decentralized social learning platform for Web3 education',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Web3 College" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={inter.className}>
        <PWAProvider>
          <Web3Provider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
              <WebVitals />
            </ThemeProvider>
          </Web3Provider>
        </PWAProvider>
      </body>
    </html>
  )
}
