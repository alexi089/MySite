import type { Metadata } from 'next'
import { Syne, Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Alex Eshaya — Full Stack Developer',
  description: 'Full-stack developer building clean, functional software. Longitude Marine and more — shipped, not just designed.',
  openGraph: {
    title: 'Alex Eshaya — Full Stack Developer',
    description: 'Full-stack developer building clean, functional software.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${cormorant.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
