import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4">
      <h1 className="mb-4 text-4xl font-bold">Article Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md text-center">
        The blog post you&apos;re looking for doesn&apos;t exist or may have
        been moved.
      </p>
      <Link href="/blog">
        <Button>Return to Blog</Button>
      </Link>
    </div>
  )
}
