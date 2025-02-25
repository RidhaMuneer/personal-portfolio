import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import CustomCursor from "@/components/CustomCursor"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ridha Al-Furaiji",
  description: "Personal portfolio of Ridha Al-Furaiji, a software engineer and full stack web developer"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <CustomCursor />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

