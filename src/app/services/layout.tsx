export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen px-2 md:px-4">{children}</div>
}

export type Params = Promise<{ [key: string]: string }>
