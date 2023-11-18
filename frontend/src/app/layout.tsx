'use client'

import { AuthenticationProvider } from '@/providers/AuthProvider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AuthenticationProvider>
      <body className={inter.className}>
        <div className="h-12 flex justify-center items-center">
          <header className="text-lg text-gray-800">Paper Review EMT Project</header>
        </div>
        {children}
        </body>
        </AuthenticationProvider>
    </html>
  )
}
