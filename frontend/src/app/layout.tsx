import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EMT Project',
  description: 'EMT Project 22/23',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-12 flex justify-center items-center">
          <header className="text-lg text-gray-800">Paper Review EMT Project</header>
        </div>
        {children}
        </body>
    </html>
  )
}
