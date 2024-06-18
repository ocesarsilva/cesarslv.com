import "@/styles/globals.css"

import { type PropsWithChildren } from "react"
import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import { env } from "@/env"

import { siteConfig } from "@/lib/config"
import { cn } from "@/lib/utils"
import { Header } from "@/components/header"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["nextjs", "react", "react server components"],
  authors: [
    {
      name: "cesarslv",
      url: "https://cesarslv.com",
    },
  ],
  creator: "cesarslv",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="container flex min-h-screen max-w-2xl flex-col p-6 px-7">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
