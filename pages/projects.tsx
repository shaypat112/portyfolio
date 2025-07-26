// pages/awards-skills.tsx
import Head from 'next/head'
import Link from 'next/link'
import { FaMedal, FaLaptopCode, FaCertificate, FaLanguage, FaTools, FaRocket } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function AwardsSkills() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      <Head>
        <title>Awards & Skills | Shivang Patel</title>
        <meta name="description" content="Achievements, certifications, and skills of Shivang Patel." />
      </Head>

      <main className="min-h-screen px-6 py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
        <h1 className="text-4xl font-bold mb-12 text-center text-purple-400">🏆 Awards & Skills</h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={cardVariants}>
            <Card title="Athletic & Academic Awards" icon={<FaMedal className="text-yellow-400 text-3xl" />}>
              <li>New Balance & Adidas Track Qualifier</li>
              <li>2× Conference Champion • 2× Regional Qualifier</li>
              <li>National Junior Honor Society (NJHS)</li>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card title="Certifications" icon={<FaCertificate className="text-blue-400 text-3xl" />}>
              <li>NCAAT Club Certification</li>
              <li>UNCC Engineering Program Certificate</li>
              <li>CYMA Data Science Internship</li>
              <li>Ember Learning Internship</li>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card title="Core Skills" icon={<FaTools className="text-green-400 text-3xl" />}>
              <li>Leadership & Teamwork</li>
              <li>Public Speaking & Communication</li>
              <li>Collaboration & Adaptability</li>
              <li>Social Media Management</li>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card title="Technical Skills" icon={<FaLaptopCode className="text-pink-400 text-3xl" />}>
              <li>JavaScript, Python, TypeScript</li>
              <li>React, Next.js, GitHub, Vercel</li>
              <li>Tailwind CSS, HTML, CSS</li>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card title="Project UCode NC" icon={<FaRocket className="text-orange-400 text-3xl" />}>
              <li>
                <Link
                  href="https://n-cbigproject.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:underline"
                >
                  Visit the Project Site 🚀
                </Link>
              </li>
              <li>Nonprofit teaching Python, Java & more</li>
              <li>Volunteer-led club for young coders</li>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </>
  )
}

function Card({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">{children}</ul>
    </div>
  )
}
