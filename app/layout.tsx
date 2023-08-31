import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

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
      <body className="font-primaryb bg-secondary">
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
