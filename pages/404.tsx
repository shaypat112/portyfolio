import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-gray-100 px-6">
      <h1 className="text-9xl font-bold mb-6 text-purple-500">404</h1>
      <p className="text-2xl mb-6 text-center max-w-md">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition"
      >
        Go Back Home
      </Link>
    </div>
  )
}
