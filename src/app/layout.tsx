import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'SebyNela - AI Daily Reports for Childcare',
  description: 'Generate personalized childcare reports in 30 seconds',
  metadataBase: new URL('https://sebynela.com'),
  openGraph: {
    title: 'SebyNela',
    description: 'AI-powered childcare reports',
    url: 'https://sebynela.com',
    siteName: 'SebyNela',
    images: ['/og-image.png'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
