import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Recipe Finder",
  description: "Find recipes based on ingredients you have in your kitchen",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex justify-between items-center">
              <a href="/" className="text-xl font-bold">
                Recipe Finder
              </a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}



import './globals.css'