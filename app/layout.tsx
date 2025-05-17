import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Meet Sangani - MERN Stack Developer Portfolio",
  description: "Portfolio of Meet Sangani, a MERN Stack Developer specializing in web and mobile application development with 6+ months of experience.",
  keywords: ["MERN Stack", "Web Developer", "React Developer", "Node.js", "MongoDB", "Express.js", "Portfolio", "Meet Sangani"],
  authors: [{ name: "Meet Sangani" }],
  creator: "Meet Sangani",
  generator: 'v0.dev',
  openGraph: {
    title: "Meet Sangani - MERN Stack Developer",
    description: "Portfolio showcasing my skills, projects, and services as a MERN Stack Developer",
    url: "https://meetsangani.com",
    siteName: "Meet Sangani Portfolio",
    locale: "en_US",
    type: "website",
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
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
