import "@/styles/globals.css";

import { env } from "@/env";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Script from "next/script";
import type { PropsWithChildren } from "react";

import { Header } from "@/components/header";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

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
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://cdn.seline.so/seline.js"
          data-token="db550307002b6d5"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={cn(
          "dark min-h-screen bg-background font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <div className="container flex min-h-screen max-w-xl flex-col p-6 px-7">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
