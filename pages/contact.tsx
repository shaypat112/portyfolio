import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <Head>
        <title>Contact Me | Shivang Patel</title>
        <meta name="description" content="Get in touch with Shivang Patel." />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-6 text-purple-400">Contact Me</h1>

        {!submitted ? (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.target as HTMLFormElement

              fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode({
                  'form-name': 'contact',
                  name: form.name.value,
                  email: form.email.value,
                  message: form.message.value,
                }),
              }).then(() => setSubmitted(true))
                .catch(() => alert('Oops! There was a problem submitting your form.'))
            }}
            className="flex flex-col max-w-md w-full gap-4"
          >
            {/* Hidden input for Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="p-3 rounded bg-gray-800 text-white"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="p-3 rounded bg-gray-800 text-white"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={5}
              className="p-3 rounded bg-gray-800 text-white resize-none"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded font-semibold transition"
            >
              Send Message
            </button>
          </form>
        ) : (
          <p className="mt-4 text-green-400">Thanks for your message! I’ll get back to you soon.</p>
        )}
      </main>
    </>
  )
}

// Helper to encode form data for Netlify
function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map(
      (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    )
    .join('&')
}
