import React, { useEffect, useState } from 'react'

interface TypewriterProps {
  words: string[]
  loop?: boolean
  typingSpeed?: number
  deletingSpeed?: number
  delaySpeed?: number
}

export default function Typewriter({
  words,
  loop = true,
  typingSpeed = 150,
  deletingSpeed = 75,
  delaySpeed = 1500,
}: TypewriterProps) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const currentWord = words[wordIndex % words.length]

    if (!isDeleting && text.length < currentWord.length) {
      // typing
      timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed)
    } else if (isDeleting && text.length > 0) {
      // deleting
      timeout = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), deletingSpeed)
    } else {
      // wait before next action
      timeout = setTimeout(() => {
        if (isDeleting) {
          setIsDeleting(false)
          setWordIndex((prev) => prev + 1)
        } else {
          setIsDeleting(true)
        }
      }, delaySpeed)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delaySpeed])

  return (
    <span className="text-purple-400 font-mono text-3xl font-semibold">
      {text}
      <span className="blink">|</span>
      <style jsx>{`
        .blink {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  )
}
