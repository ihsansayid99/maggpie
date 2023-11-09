import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ContextProvider from './context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maggpie',
  description: 'Maggpie Website or App Development. Based in BDG Indonesia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  )
}
