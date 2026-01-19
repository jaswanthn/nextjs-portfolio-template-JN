import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-bold">404 - Not Found</h2>
      <p className="mt-4 text-lg">Could not find requested resource</p>
      <Link href="/" className="bg-primary text-primary-content mt-6 rounded-lg px-6 py-3 transition-colors hover:opacity-90">
        Return Home
      </Link>
    </div>
  )
}
