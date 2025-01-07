import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { GoogleAnalytics } from "@next/third-parties/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prêmio Abravidro Glass South America",
  description: "Prêmio Abravidro Glass South America.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-2HCBHMTCRL" />
    </html>
  )
}
