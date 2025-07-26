// pages/work.tsx
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Work() {
  const [showTopBtn, setShowTopBtn] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const projects = [
    {
      title: "To-Do App",
      description: 'A simple to-do list application built with Next.js.',
      link: 'https://shivangsapp.vercel.app',
      tech: ['Next.js', 'TypeScript'],
      image: 'https://via.placeholder.com/400x200.png?text=To-Do+App',
    },
    {
      title: 'React App',
      description: 'A React-based project I built.',
      link: 'https://gameefinder.vercel.app',
      tech: ['React', 'Vite'],
      image: 'https://via.placeholder.com/400x200.png?text=React+App',
    },
    {
      title: 'Portfolio V1',
      description: 'Early version of my portfolio site.',
      link: 'https://portyfolio-six.vercel.app/',
      tech: ['Next.js', 'CSS'],
      image: 'https://via.placeholder.com/400x200.png?text=Portfolio+V1',
    },
    {
      title: 'Portfolio V2',
      description: 'Latest version of my portfolio site.',
      link: 'https://portyfolio-v24q.vercel.app/',
      tech: ['Next.js', 'Tailwind'],
      image: 'https://via.placeholder.com/400x200.png?text=Portfolio+V2',
    },
  ]

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 200)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <Head>
        <title>Work | Shivang Patel</title>
        <meta name="description" content="Work and projects by Shivang Patel" />
      </Head>

      <div className={`min-h-screen transition-all duration-300 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100' : 'bg-white text-gray-900'}`}>
        {/* Top Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center px-6 pt-8 gap-4">
          <h1 className="text-4xl font-bold text-purple-500">My Work</h1>
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Search projects..."
              className="px-4 py-2 rounded-md text-black"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={toggleTheme}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
            >
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="max-w-5xl mx-auto grid gap-6 p-8 sm:grid-cols-1 md:grid-cols-2">
          {filteredProjects.map(({ title, description, link, tech, image }) => (
            <div
              key={title}
              className={`rounded-lg overflow-hidden shadow-xl transform transition hover:scale-[1.02] cursor-pointer bg-gray-800/80 backdrop-blur-lg p-4 ${theme === 'light' ? 'bg-gray-100 text-black' : ''}`}
              onClick={() => setSelectedProject({ title, description, link, tech })}
            >
              <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-3" />
              <h2 className="text-2xl font-semibold mb-1">{title}</h2>
              <p className="text-sm mb-2">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: t.includes('React') ? '#61dafb' :
                        t.includes('Next') ? '#000' :
                        t.includes('Tailwind') ? '#38bdf8' :
                        t.includes('TypeScript') ? '#3178c6' :
                        '#a78bfa',
                      color: t === 'Next.js' ? 'white' : 'black',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll to Top */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full shadow-lg transition"
          >
            ↑ Top
          </button>
        )}

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl max-w-lg w-full shadow-2xl">
              <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
              <p className="mb-4">{selectedProject.description}</p>
              <a href={selectedProject.link} target="_blank" className="text-purple-600 underline">View Live</a>
              <div className="mt-4 text-right">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
