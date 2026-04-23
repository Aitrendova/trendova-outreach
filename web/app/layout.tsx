import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://web-production-e0b22.up.railway.app'),
  title: 'Trendova — وكيل ذكاء اصطناعي لأعمالك',
  description: 'وكيل AI يرد على عملائك، يكتب محتواك، ويشتغل 24/7 بالعربي',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Trendova 🌀',
    description: 'وكيل ذكاء اصطناعي لأعمالك — يرد على عملائك، يكتب محتواك، ويشتغل 24/7',
    locale: 'ar_SA',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 1200,
        alt: 'Trendova',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trendova 🌀',
    description: 'وكيل ذكاء اصطناعي لأعمالك — يرد على عملائك، يكتب محتواك، ويشتغل 24/7',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
