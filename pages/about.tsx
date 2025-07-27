// pages/about.tsx
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
  // Feature 4: Scroll animation for title
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Feature 6: Fun fact toggler
  const [showFact, setShowFact] = useState(false);
  const toggleFact = () => setShowFact(!showFact);

  return (
    <>
      <Head>
        <title>About Me | Portyfolio</title>
        <meta name="description" content="About me page" />
      </Head>

      {/* Navbar */}
      <nav className={`bg-black border-b border-gray-800 p-4 fixed w-full top-0 z-50 transition-all ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-white font-bold text-xl cursor-pointer">
              Portyfolio
            </span>
          </Link>
          <div className="space-x-6 text-gray-300 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-white pt-28 px-6 md:px-20 min-h-screen relative overflow-hidden">

        {/* Feature 1: Background Star Particles (mock) */}
        <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-5 z-0" />

        {/* Feature 2: Animated Abstract Circles */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-700 rounded-full opacity-20 filter blur-3xl animate-pulse -z-10"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600 rounded-full opacity-15 filter blur-4xl animate-ping -z-10"></div>

        {/* About Section */}
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center relative z-10">
          {/* Left: Profile Photo */}
          <div className="md:w-1/2">
            <img
              src="/shivang.jpg"
              alt="Shivang Patel"
              className="rounded-2xl shadow-xl object-cover w-full max-h-[450px] hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right: About Text */}
          <div className="md:w-1/2">
            {/* Feature 3: Animated Gradient Title */}
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
              Hey, I am Shivang 👋
            </h1>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I am a student developer who loves building web apps, learning new
              frameworks, and solving real-world problems through code. From
              React and TypeScript to Prisma and Python, I enjoy working across
              the full stack.
              <br />
              <br />
              I’m currently running my own coding club, building projects,
              exploring tech internships, and helping others learn to code.
            </p>

            {/* Feature 5: Toggle Fun Fact Button */}
            <button
              onClick={toggleFact}
              className="mb-4 px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition text-sm"
            >
              {showFact ? "Hide Fun Fact" : "Show Fun Fact"}
            </button>

            {/* Feature 6: Fun Fact Display */}
            {showFact && (
              <div className="mb-6 text-sm bg-purple-900/20 p-4 rounded-lg border border-purple-700 text-purple-300">
                💡 Fun Fact: I teach kids in Africa how to code python and other languages!
              </div>
            )}

            {/* Buttons */}
            <div className="flex space-x-6">
              <Link
                href="/resume.pdf"
                className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-lg font-semibold"
              >
                View Résumé
              </Link>
              <Link
                href="/contact"
                className="border border-purple-500 hover:bg-purple-500 transition px-6 py-3 rounded-lg font-semibold"
              >
                Contact Me
              </Link>
            </div>

            {/* Feature 7: Skills Grid */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-purple-300">
              <span>⚛️ React</span>
              <span>🧠 TypeScript</span>
              <span>🌐 Next.js</span>
              <span>🎨 Tailwind CSS</span>
              <span>💾 Prisma</span>
              <span>🐍 Python</span>
            </div>
          </div>
        </section>

        {/* Feature 8: Testimonials */}
        <section className="mt-20 max-w-3xl mx-auto text-center italic text-gray-400">
          “Shivang has a passion for tech and leadership makes him stand out — he truly inspires others.”
        </section>

        {/* Feature 9: Floating Footer */}
        <footer className="mt-24 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Shivang Patel — Built using Next.js + Tailwind.
        </footer>
      </main>
    </>
  );
}
