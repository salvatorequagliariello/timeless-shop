import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ToastProvider from '@/providers.tsx/toast-provider'

export const metadata: Metadata = {
  title: 'TIMELESS Watches',
  description: 'TIMELESS Watches Offical E-Shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-primaryb bg-secondary mx-auto">
        <ToastProvider />
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
