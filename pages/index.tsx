import Head from 'next/head'
import Typewriter from '../components/Typewriter'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  // Feature 4: Scroll indicator
  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Feature 10: Dark mode switch (mock)
  const [darkMode, setDarkMode] = useState(true)
  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <>
      <Head>
        <title>Shivang Patel | Portfolio</title>
        <meta name="description" content="Shivang Patel's portfolio website" />
      </Head>

      {/* Feature 1: Floating Scroll Progress Bar */}
      <div
        style={{ width: `${scrollPosition}px` }}
        className="h-1 bg-purple-500 fixed top-0 left-0 z-50 transition-all duration-150"
      />

      {/* Main Container */}
      <main className={`min-h-screen ${darkMode ? 'bg-gradient-to-tr from-gray-900 via-black to-gray-800' : 'bg-white'} text-${darkMode ? 'gray-100' : 'black'} flex flex-col justify-center items-center px-6`}>
        
        {/* Feature 2: Profile Image */}
        <Image
          src="https://media.licdn.com/dms/image/v2/D5603AQFaN6Q_4o7l9A/profile-displayphoto-crop_800_800/B56Zfxi4d0HUAI-/0/1752104154118?e=1756339200&v=beta&t=ubPncsIoH94yLPmyzRiCq_GWEo3HGiFBKPBgnoih-hE"
          alt="Shivang Patel"
          width={120}
          height={120}
          className="rounded-full shadow-lg border-4 border-purple-500 mb-6"
        />

        {/* Header with Typewriter */}
        <h1 className="text-5xl font-bold text-purple-400 mb-4 text-center">
          <Typewriter words={['Shivang Patel', 'Student Athlete.', 'Engineer.', 'Collaborator.']} />
        </h1>

        {/* Feature 3: Subtitle */}
        <h2 className="text-center text-xl text-gray-300 max-w-2xl mb-6 italic">
          Building better futures through code, collaboration, and grit.
        </h2>

        {/* Feature 5: Toggle Theme */}
        <button
          onClick={toggleDarkMode}
          className="mb-6 text-sm px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>

        {/* Feature 6: Contact Section Preview */}
        <Link href="/contact" className="underline hover:text-purple-400 transition mb-6">
          📬 Get in touch
        </Link>

        {/* Feature 7: Animated Icons / Buttons */}
        <div className="flex gap-4 animate-pulse">
          <span className="text-purple-300">🏃‍♂️</span>
          <span className="text-yellow-400">⚙️</span>
          <span className="text-green-300">💡</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col items-center gap-4">
          {/* Feature 8: Download Résumé Button */}
          <a
            href="/resume.pdf"
            download
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition"
          >
            📄 Download Résumé
          </a>

          {/* Feature 9: View Projects/Skills */}
          <Link
            href="/projects"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-xl transition shadow-lg"
          >
            View My Skills & Awards
          </Link>
        </div>



        {/* Feature 12: Testimonials Preview */}
        <div className="mt-10 max-w-xl text-center italic text-gray-400">
          “Shivang is one of the most driven and collaborative teammates I've ever worked with.”
        </div>

        {/* Feature 13: Footer Link */}
        <footer className="mt-16 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Shivang Patel II
        </footer>
      </main>
    </>
  )
}
