import type { Metadata } from "next"
import { Montserrat, Nanum_Myeongjo } from "next/font/google";
import "./globals.css"

// Configure the fonts using next/font/google
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat', // Creates a CSS variable for Tailwind
  display: 'swap',
});

const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: "700", // Only loads the bold weight we need
  variable: '--font-nanum-myeongjo', // Creates a CSS variable for Tailwind
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
       
      <body>{children}</body>
    </html>
  )
}
