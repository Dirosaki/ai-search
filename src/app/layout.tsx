import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Modal } from '@/components/ui/modal'

import '@/styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Busca com IA',
  description: 'Uma página de busca que utiliza IA para encontrar resultados',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="dark" lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Modal />
      </body>
    </html>
  )
}
