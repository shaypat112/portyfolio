import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import Chatbot from '../components/Chatbot'

export default function App({ Component, pageProps }: AppProps) {
  const [showChatbot, setShowChatbot] = useState(false)

  return (
    <>
      <Navbar />
      <Component {...pageProps} />

      {/* Chatbot toggle button */}
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        className="fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition"
        aria-label={showChatbot ? "Close Chatbot" : "Open Chatbot"}
      >
        {/* You can replace this with an icon */}
        {showChatbot ? '✖️' : '💬'}
      </button>

      {/* Conditionally render chatbot */}
      {showChatbot && (
        <div className="fixed bottom-20 right-6 z-40">
          <Chatbot />
        </div>
      )}
    </>
  )
}
