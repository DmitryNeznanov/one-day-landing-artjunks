import type { Metadata } from "next"
import { Libre_Caslon_Display, Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700"],
})
const caslon = Libre_Caslon_Display({
  subsets: ["latin"],
  variable: "--font-caslon",
  weight: "400",
})

export const metadata: Metadata = {
  title: "ARTJUNKS",
  description: "ARTJUNKS page",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${caslon.variable} `}>
        <div className="flex flex-col justify-between min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
