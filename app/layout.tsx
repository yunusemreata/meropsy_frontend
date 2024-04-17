import './globals.css'
import type { Metadata } from 'next'

import { ThemeProvider } from "../src/components/theme-provider"



export const metadata: Metadata = {
  title: 'Meropsy Social Manager',
  description: 'Meropsy Social Manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="tr" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
