import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-black bg-opacity-70 text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition">
          Shivang Patel
        </Link>
        <div className="space-x-6 text-lg font-medium">
          <Link href="/" className="hover:text-purple-300 transition">Home</Link>
          <Link href="/about" className="hover:text-purple-300 transition">About</Link>
          <Link href="/projects" className="hover:text-purple-300 transition">Projects</Link>
          <Link href="/contact" className="hover:text-purple-300 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
