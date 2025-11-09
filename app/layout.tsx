// src/app/layout.tsx

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './src/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammed Favas - MERN Developer',
  description: 'Portfolio of Muhammed Favas, a MERN Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* 2. ADD THE NAVBAR HERE */}
        {children}
      </body>
    </html>
  )
}