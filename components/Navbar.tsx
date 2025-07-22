import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-black border-b border-gray-700 text-gray-200 px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-400">Shivang Patel</h1>
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-purple-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-purple-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-purple-400 transition">
              Awards & Skills
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-purple-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
