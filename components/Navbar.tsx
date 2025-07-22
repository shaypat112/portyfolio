import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  return (
    <nav className="bg-gray-900 text-gray-100 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto sticky top-0 z-50 shadow-md">
      <div className="text-2xl font-bold text-purple-400 cursor-pointer select-none">
        <Link href="/">
          <span>Shivang</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-lg">
        <li className="hover:text-purple-400 transition">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-purple-400 transition">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-purple-400 transition">
          <Link href="/projects">Skills & Awards</Link>
        </li>
        <li className="hover:text-purple-400 transition">
          <Link href="/work">Projects</Link>
        </li>
        <li className="hover:text-purple-400 transition">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden cursor-pointer z-50" onClick={toggleNav}>
        {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900 flex flex-col justify-center items-center space-y-8 text-2xl transition-transform duration-300 ${
          navOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={toggleNav}
      >
        <li className="hover:text-purple-400 transition">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-purple-400 transition">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-purple-400 transition">
          <Link href="/projects">Skills & Awards</Link>
        </li>
        <li className="hover:text-purple-400 transition">
          <Link href="/work">Projects</Link>
        </li>
        <li className="hover:text-purple-400 transition">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

