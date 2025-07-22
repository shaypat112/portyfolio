import Head from 'next/head'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // For now, just show a thank you message on submit, no email sent
    setStatus('Thanks for your message! (Email sending disabled)')
    e.currentTarget.reset()
  }

  return (
    <>
      <Head>
        <title>Contact Me | Shivang Patel</title>
        <meta name="description" content="Contact Shivang Patel" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-4xl font-bold text-purple-400 mb-8">Contact Me</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-gray-800 rounded-xl p-8 shadow-lg"
        >
          <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
          <input
            id="name"
            name="user_name"
            type="text"
            required
            className="w-full mb-6 px-3 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
          <input
            id="email"
            name="user_email"
            type="email"
            required
            className="w-full mb-6 px-3 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full mb-6 px-3 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            className="
              w-full
              bg-purple-700
              text-white
              font-semibold
              py-3
              rounded-md
              relative
              overflow-hidden
              transition
              duration-300
              hover:bg-purple-800
              hover:scale-105
              hover:shadow-[0_0_15px_rgba(139,92,246,0.7)]
              focus:outline-none
              focus:ring-4
              focus:ring-purple-400
              before:absolute
              before:-inset-1
              before:rounded-md
              before:border-2
              before:border-purple-400
              before:animate-pulse
              before:pointer-events-none
              flex
              justify-center
              items-center
              gap-2
            "
          >
            Send Message
            <span
              aria-hidden="true"
              className="inline-block animate-fly ml-2"
              style={{ display: 'inline-block' }}
            >
              📨
            </span>
          </button>

          {status && <p className="mt-4 text-center text-green-400">{status}</p>}
        </form>

        {/* Contact info below form */}
        <div className="mt-10 text-center space-y-2 text-gray-300 max-w-md">
          <p>Email: <a href="mailto:shivangpatel2050@gmail.com" className="text-purple-400 hover:underline">shivangpatel2050@gmail.com</a></p>
          <p>Phone: <a href="tel:+19802011576" className="text-purple-400 hover:underline">980-201-1576</a></p>
        </div>
      </main>
    </>
  )
}
