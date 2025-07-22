import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <>
      <Head>
        <title>About Me | Shivang Patel</title>
        <meta name="description" content="Learn more about Shivang Patel." />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gray-900 text-gray-100 px-6 py-16 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        <section className="flex-shrink-0">
          <img
            src="/profile-photo.jpg"
            alt="Shivang Patel"
            className="rounded-full w-56 h-56 object-cover shadow-2xl border-4 border-purple-600"
          />
        </section>

        <section className="max-w-xl space-y-6">
          <h1 className="text-5xl font-extrabold text-purple-400">About Me</h1>

          <p className="text-lg leading-relaxed">
            Hi! I&apos;m <strong>Shivang Patel</strong>, a passionate high school student and developer who loves coding, data science, and leadership.
          </p>

          <p className="text-lg leading-relaxed">
            Currently, I&apos;m the <strong>President of Project UCode NC</strong>, where I lead coding workshops and mentor aspiring programmers.
          </p>

          <p className="text-lg leading-relaxed">
            Outside of coding, I&apos;m a competitive track athlete and a proud member of NJHS and several STEM clubs.
          </p>

          <p className="text-lg leading-relaxed">
            I&apos;m always eager to learn new technologies and collaborate on projects that can make a difference.
          </p>
        </section>
      </main>
    </>
  )
}
