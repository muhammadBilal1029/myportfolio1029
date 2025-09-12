import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Muhammad Bilal – Full Stack Developer",
  description: "Portfolio of Muhammad Bilal (Full Stack Developer):MERN stack,React JS,Next Js,Nest Js,Python,Data Cleaning.",
  metadataBase: new URL("https://example.com"),
  openGraph: { title: "Muhammad Bilal – Full Stack Developer", description: "MERN stack,React JS,Next Js,Nest Js,Python,Data Cleaning.", url: "https://example.com", siteName: "Muhammad Bilal Portfolio", images: [{ url: "/og.png", width: 1200, height: 630 }], locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image", title: "Muhammad Bilal – Full Stack Developer", description: "MERN stack,React JS,Next Js,Nest Js,Python,Data Cleaning.", images: ["/og.png"] },
  icons: { icon: "/favicon.ico" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
