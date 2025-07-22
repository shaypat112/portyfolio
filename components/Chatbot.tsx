import { useState } from 'react'

const answers: Record<string, string> = {
  hello: "Hi! I'm Shivang's chatbot. How can I help you today?",
  hi: "Hello there! What can I do for you?",
  hey: "Hey! Need any help?",
  projects: "You can check out my Skills & Awards page to see my projects and achievements!",
  resume: "You can download my resume from the home page button.",
  contact: "Feel free to contact me through the contact page or email at shivangpatel2050@gmail.com!",
  help: "Sure! Ask me anything about Shivang's portfolio, projects, or contact info.",
  thanks: "You're welcome! 😊",
  thank: "No problem! Glad to help.",
  portfolio: "Check out my portfolio in the Skills & Awards section!",
  sports: "I'm a student athlete who loves long jump!",
  github: "Check out my GitHub profile at github.com/shaypat112",
  joke: "Why did the computer get cold? Because it left its Windows open! 😂",
  shiv: "That's me! I'm a student athlete, engineer, and collaborator.",
  education: "Shivang is passionate about engineering and is a dedicated student.",
  skills: "I have skills in React, Next.js, TypeScript, Python, and more!",
  hobbies: "Besides coding, I love athletics and working on creative projects.",
  team: "Collaboration is important to me — I enjoy working with others!",
  location: "I'm based in the United States.",
  "whats your name": "I'm Shivang's chatbot! You can call me ShivangBot.",
  "what can you do": "I can answer questions about Shivang's portfolio, projects, and contact info.",
  "whats your purpose": "My purpose is to assist you with info about Shivang's work and interests.",
  "favorite color": "Shivang loves purple! 💜",
  "favorite sport": "Shivang competes in long jump! 🏃‍♂️",
  "favorite programming language": "JavaScript and Python are Shivang's favorites.",
  "favorite hobby": "Shivang enjoys coding and athletics in his free time.",
  "favorite food": "Pizza is a go-to favorite for Shivang! 🍕",
  "favorite movie": "Shivang enjoys Marvel movies and action flicks! 🎬",
  "favorite music": "Pop and hip-hop are on Shivang's playlist. 🎶",
  "favorite book": "Science fiction and fantasy novels are favorites.",
  "favorite game": "Action and adventure video games are loved.",
  "favorite animal": "Shivang is a big fan of dogs! 🐶",
  "how old are you": "I'm just a friendly chatbot, but Shivang is a student.",
  "where do you study": "Shivang is currently a student athlete focused on engineering.",
  "what do you study": "Engineering and computer science are Shivang's main interests.",
  "do you code": "Yes! Shivang codes in React, Next.js, TypeScript, and Python.",
  "can you help me": "Absolutely! Ask me any questions about Shivang's work or contact info.",
  "how can i contact shivang": "You can email at shivangpatel2050@gmail.com or use the contact page.",
  "tell me a joke": "Why do programmers prefer dark mode? Because light attracts bugs! 🐞",
  "what are your strengths": "Shivang is hardworking, collaborative, and detail-oriented.",
  "what are your goals": "To grow as an engineer and student athlete.",
  "what motivates you": "Learning new skills and collaborating on projects.",
  "what languages do you speak": "English is my primary language.",
  "what frameworks do you know": "React, Next.js, and Express among others.",
  "what's your github": "github.com/shaypat112",
  "how to download resume": "Theres a download button for the resume on the home page.",
  "can i see your projects": "Sure! Head to the Skills & Awards or Projects page.",
  "do you play sports": "Yes, Shivang is a long jumper and student athlete.",
  "what do you do": "I help people learn about Shivang's portfolio and contact info.",
  "default": "Sorry, I didn't understand that. Try asking one word questions such as projects, resume, or contact.",
}


export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! Ask me about Shivang's portfolio, projects, or contact info!" },
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
