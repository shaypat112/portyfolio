import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const encodedData = new URLSearchParams({
      'form-name': 'contact',
      name: form.name,
      email: form.email,
      message: form.message,
    });

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodedData.toString(),
      });
      alert('Message sent!');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Failed to send message');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-28 max-w-2xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6 text-purple-400">Contact Me</h1>
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          data-netlify="true"
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={handleChange}
              value={form.name}
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={form.email}
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              onChange={handleChange}
              value={form.message}
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded text-white font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
