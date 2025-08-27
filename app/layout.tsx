import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Nanum_Myeongjo } from "next/font/google";
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat', // Create a CSS variable for this font
  display: 'swap',
});

const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: "700", // Only load the bold weight we need for the hero title
  variable: '--font-nanum-myeongjo', // Create a CSS variable
  display: 'swap',
});

export const metadata: Metadata = {
  title: "DOMUS RESIDENTIAL - Property Services",
  description: "Trusted property management and residential services",
  icons: {
    icon: '/Domus-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${nanumMyeongjo.variable}`}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Nanum+Myeongjo:wght@700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
      <body>{children}</body>
    </html>
  )
}
