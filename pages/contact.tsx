import Head from 'next/head'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState('')

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    emailjs.sendForm(
      'YOUR_SERVICE_ID',      // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID',     // Replace with your EmailJS template ID
      formRef.current,
      'YOUR_USER_ID'          // Replace with your EmailJS user ID (public key)
    )
    .then(() => {
      setStatus('Thanks for your message! I will get back to you soon.')
      formRef.current?.reset()
    }, () => {
      setStatus('Oops! Something went wrong. Please try again later.')
    })
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
          ref={formRef}
          onSubmit={sendEmail}
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
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition"
          >
            Send Message
          </button>

          {status && <p className="mt-4 text-center text-green-400">{status}</p>}
        </form>
      </main>
    </>
  )
}
