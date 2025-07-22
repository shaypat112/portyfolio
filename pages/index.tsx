import Head from 'next/head'
import Typewriter from '../components/Typewriter'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shivang Patel | Portfolio</title>
        <meta name="description" content="Shivang Patel&apos;s portfolio website" />
      </Head>

      <main className="min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-gray-100 flex flex-col justify-center items-center px-6">
        <h1 className="text-5xl font-bold text-purple-400 mb-4 text-center">
          <Typewriter words={['Shivang Patel', 'Student Athlete.', 'Engineer.', 'Collaborator.']} />
        </h1>

        <h2 className="text-center text-lg text-gray-300 max-w-2xl underline mb-8">
          
        </h2>

        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition"
          >
            📄 Download Résumé
          </a>

          <Link
            href="/projects"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-xl transition shadow-lg"
          >
            View My Skills & Awards
          </Link>
        </div>
      </main>
    </>
  )
}
