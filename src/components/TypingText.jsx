import { useEffect, useState } from 'react'

export default function TypingText({
  words = ['Claude'],
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseTime = 1600,
  className = '',
  loop = true,
}) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing') // typing | pausing | deleting

  useEffect(() => {
    const current = words[wordIndex]
    let timeout

    if (phase === 'typing') {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed)
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pauseTime)
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase(loop || wordIndex < words.length - 1 ? 'deleting' : 'done'), 100)
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed)
      } else {
        setWordIndex((i) => (i + 1) % words.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseTime, loop])

  return (
    <span className={`typing-text ${className}`}>
      {text}
      <span className="typing-cursor" aria-hidden="true">|</span>
    </span>
  )
}
