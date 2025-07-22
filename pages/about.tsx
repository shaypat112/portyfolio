// pages/about.tsx
import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About Me | Portyfolio</title>
        <meta name="description" content="About me page" />
      </Head>

      {/* Navbar */}
      <nav className="bg-black border-b border-gray-800 p-4 fixed w-full top-0 z-50">
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

      {/* Main Content with Gradient and Abstract Shapes */}
      <main className="bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-white pt-28 px-6 md:px-20 min-h-screen relative overflow-hidden">
        <div className="relative w-full h-full">
          {/* Blurred purple circle */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-700 rounded-full opacity-20 filter blur-3xl -z-10"></div>

          {/* Blurred pink circle */}
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600 rounded-full opacity-15 filter blur-4xl -z-10"></div>

          {/* About Section */}
          <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center relative z-10">
            {/* Left: Profile Photo */}
            <div className="md:w-1/2">
              <img
                src="/shivang.jpg"
                alt="Shivang Patel"
                className="rounded-2xl shadow-xl object-cover w-full max-h-[450px]"
              />
            </div>

            {/* Right: About Text */}
            <div className="md:w-1/2">
              <h1 className="text-4xl font-extrabold text-purple-500 mb-6">
                Hey, I'm Shivang 👋
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I'm a student developer who loves building web apps, learning new
                frameworks, and solving real-world problems through code. From
                React and TypeScript to Prisma and Python, I enjoy working across
                the full stack.
                <br />
                <br />
                I’m currently running my own coding club, building projects,
                exploring tech internships, and helping others learn to code.
              </p>
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
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
