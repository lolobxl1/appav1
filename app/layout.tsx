import type { Metadata } from 'next'
import { DM_Sans, Space_Mono } from 'next/font/google'
import { LanguageProvider } from '@/lib/language-context'

import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-space-mono' })

export const metadata: Metadata = {
  title: 'APPA - Association des Parents | Parents Association',
  description: "Association des Parents de l'ecole internationale Le Verseau - Promoting student well-being and community at Le Verseau International School.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${dmSans.variable} ${spaceMono.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
