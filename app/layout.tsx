import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Marvellous Obatale — Full Stack Developer",
  description:
    "Full-Stack Developer with 2+ years of experience building performant web applications. Specialized in React, Next.js, TypeScript, Node.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Web Development"],
  authors: [{ name: "Marvellous Obatale" }],
  creator: "Marvellous Obatale",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marvellous-portfolio.vercel.app",
    siteName: "Marvellous Obatale",
    title: "Marvellous Obatale — Full Stack Developer",
    description: "Full-Stack Developer with 2+ years of experience building performant web applications.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
