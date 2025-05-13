import type React from 'react'

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen px-2 md:px-4">{children}</div>
}
