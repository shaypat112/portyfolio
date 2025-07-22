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

      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-100 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-purple-400 mb-8 text-center">👨‍💻 About Me</h1>

          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg space-y-6 text-lg leading-relaxed">
            <p>
              Hey there! I'm <span className="text-purple-300 font-semibold">Shivang Patel</span>, a passionate student leader, tech enthusiast, and competitive athlete.
            </p>

            <p>
              I currently serve as the <span className="text-purple-300 font-semibold">President of Project UCode NC</span>, where I lead a team to teach Python, Java, and web development to students across our region.
            </p>

            <p>
              My experiences include internships with <span className="text-purple-300 font-semibold">Ember Learning</span> and <span className="text-purple-300 font-semibold">CYMA</span>, where I contributed to data science and math education projects focused on community outreach.
            </p>

            <p>
              I'm also involved in clubs like <span className="text-purple-300 font-semibold">TSA</span>, <span className="text-purple-300 font-semibold">FBLA</span>, <span className="text-purple-300 font-semibold">NJHS</span>, and <span className="text-purple-300 font-semibold">STEMinate</span>, and earned certifications from <span className="text-purple-300 font-semibold">UNCC Engineering</span> and the <span className="text-purple-300 font-semibold">NCAAT Club</span>.
            </p>

            <p>
              Outside of academics, I’m a proud track athlete — competing at the <span className="text-purple-300 font-semibold">New Balance Nationals</span>, <span className="text-purple-300 font-semibold">Adidas Nationals</span>, and earning multiple <span className="text-purple-300 font-semibold">regional and conference qualifications</span>.
            </p>

            <p>
              Whether it’s coding, leading, or sprinting, I’m always looking to grow and make an impact.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
