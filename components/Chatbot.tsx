import { useState } from 'react'

const answers: Record<string, string> = {
  hello: "Hi! I'm Shivang's chatbot. How can I help you today?",
  projects: "You can check out my Skills & Awards page to see my projects and achievements!",
  resume: "You can download my resume from the home page button.",
  contact: "Feel free to contact me through the contact page!",
  default: "Sorry, I didn't understand that. Try asking about projects, resume, or contact.",
}

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! Ask me about Shivang's portfolio!" },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    const userMessage = input.trim().toLowerCase()
    setMessages((msgs) => [...msgs, { from: 'user', text: input.trim() }])

    // Simple keyword matching
    let reply = answers.default
    for (const key of Object.keys(answers)) {
      if (userMessage.includes(key)) {
        reply = answers[key]
        break
      }
    }

    setTimeout(() => {
      setMessages((msgs) => [...msgs, { from: 'bot', text: reply }])
    }, 500)

    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-gray-900 text-gray-100 rounded-lg shadow-lg flex flex-col overflow-hidden font-sans">
      <div className="bg-purple-700 p-3 font-semibold">Chat with Shivang 🤖</div>
      <div className="flex-1 p-3 overflow-y-auto max-h-64 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`${
              msg.from === 'bot' ? 'text-left' : 'text-right'
            }`}
          >
            <span
              className={`inline-block px-3 py-2 rounded-lg ${
                msg.from === 'bot'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-gray-200'
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-gray-700 flex gap-2">
        <input
          type="text"
          placeholder="Type a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-grow rounded px-3 py-2 bg-gray-800 text-gray-100 focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded font-semibold transition"
        >
          Send
        </button>
      </div>
    </div>
  )
}
