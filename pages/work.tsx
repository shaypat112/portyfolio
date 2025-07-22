import Head from 'next/head'

export default function Work() {
  const projects = [
    {
      title: "To-Do App",
      description: 'A simple to-do list application built with Next.js.',
      link: 'https://shivangsapp.vercel.app',
    },
    {
      title: 'React App',
      description: 'A React-based project I built.',
      link: 'https://gameefinder.vercel.app',
    },
    {
      title: 'Portfolio V1',
      description: 'Early version of my portfolio site.',
      link: 'https://portyfolio-six.vercel.app/',
    },
    {
      title: 'Portfolio V2',
      description: 'Latest version of my portfolio site.',
      link: 'https://portyfolio-v24q.vercel.app/',
    },
  ]

  return (
    <>
      <Head>
        <title>Work | Shivang Patel</title>
        <meta name="description" content="Work and projects by Shivang Patel" />
      </Head>

      

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 p-8">
        <h1 className="text-4xl font-bold text-purple-400 mb-8 text-center">My Work</h1>

        <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {projects.map(({ title, description, link }) => (
            <div
              key={title}
              className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold mb-2">{title}</h2>
              <p className="mb-4 text-gray-300">{description}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
