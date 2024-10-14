import React from 'react'
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import Providers from '@/components/layout/providers'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'
import '@rainbow-me/rainbowkit/styles.css'

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BTCSOL Frontend',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={
          sora.className + ' font-orbitron text-text m-0 bg-background p-0'
        }
      >
        <Providers>
          <div className="flex min-h-screen flex-col justify-between">
            <Header />
            <main className="flex w-full flex-col items-center">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
