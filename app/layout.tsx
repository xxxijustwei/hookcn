import type { Metadata, Viewport } from "next"
import { ThemeProvider } from "next-themes"

import { META_THEME_COLORS, siteConfig } from "@/config/site"
import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"

import "@/styles/globals.css"

import { Toaster } from "@/components/ui/sonner"
import { ActiveThemeProvider } from "@/components/active-theme"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "strlrd-29",
      url: "https://ouassim.tech",
    },
  ],
  creator: "strlrd-29",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@strlrd29",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="10114de9-fbcb-417d-89a2-7ff4ac30db2d"
        ></script>
      </head>
      <body
        className={cn(
          "min-h-svh overflow-x-hidden bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          <ActiveThemeProvider>
            <TooltipProvider>
              <div className="relative flex min-h-svh flex-col bg-background">
                {children}
              </div>
            </TooltipProvider>
          </ActiveThemeProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
