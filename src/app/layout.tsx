import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LocomotiveProvider from '@/components/LocomotiveProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dang Thanh Quang - AI Engineer Portfolio',
  description: 'AI Engineer specializing in Machine Learning, NLP, and Mobile Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LocomotiveProvider>
          {children}
        </LocomotiveProvider>
      </body>
    </html>
  )
}