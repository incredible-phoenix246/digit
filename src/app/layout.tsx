import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/nav/header'
import Footer from '@/components/nav/footer'
import { Toaster } from '@/components/ui/sonner'
import { ChatWidget } from '@/components/chat-widget'

const spacegrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Digitspot Solutions Limited',
    template: '%s - Digitspot',
  },
  description:
    'Digitspot Solutions Limited: Get the best of business transformation through bespoke technology and cloud computing solutions',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'flex-1 antialiased',
          spacegrotesk.className,
          spacegrotesk.variable
        )}
      >
        <main className="mx-auto max-w-[1500px]">
          <Header />
          {children}
          <Footer />
          <ChatWidget />
          <Toaster richColors />
        </main>
      </body>
    </html>
  )
}
