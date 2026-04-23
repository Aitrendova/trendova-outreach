import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trendova — وكيل ذكاء اصطناعي لأعمالك',
  description: 'وكيل AI يرد على عملائك، يكتب محتواك، ويشتغل 24/7 بالعربي',
  openGraph: {
    title: 'Trendova 🌀',
    description: 'وكيل ذكاء اصطناعي لأعمالك — يرد على عملائك، يكتب محتواك، ويشتغل 24/7',
    locale: 'ar_SA',
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
