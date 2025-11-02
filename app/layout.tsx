import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Courier_Prime } from "next/font/google"
import "./globals.css"

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-courier-prime",
})

export const metadata: Metadata = {
  title: "Dharmin V. Patel | Cybersecurity Portfolio",
  description: "Cybersecurity & IT Professional - Portfolio showcasing experience, projects, and skills",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jetBrainsMono.variable} ${courierPrime.variable} antialiased`}>
      <body className="crt-effect terminal-bg">{children}</body>
    </html>
  )
}
