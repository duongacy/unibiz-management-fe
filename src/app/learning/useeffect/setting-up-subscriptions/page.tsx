'use client'

import { cn } from '@/utils/cn'
import Markdown from 'markdown-to-jsx'
import { useEffect, useState } from 'react'

export default function Page() {
  const topics = ['topic 1', 'topic 2', 'topic 3']
  const [topic, setTopic] = useState(topics[0])
  const [message, setMessage] = useState<string[]>([])

  useEffect(() => {
    let intervalId = setInterval(() => {
      const topic1 = new CustomEvent('topic 1', {
        detail: 'Message from topic 1: ' + new Date().getTime(),
      })
      const topic2 = new CustomEvent('topic 2', {
        detail: 'Message from topic 2: ' + new Date().getTime(),
      })
      const topic3 = new CustomEvent('topic 3', {
        detail: 'Message from topic 3: ' + new Date().getTime(),
      })
      window.dispatchEvent(topic1)
      window.dispatchEvent(topic2)
      window.dispatchEvent(topic3)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    const handler = (e: CustomEvent) => {
      setMessage((prev) => [...prev, e.detail])
    }

    window.addEventListener(topic, handler)
    return () => {
      window.removeEventListener(topic, handler)
      setMessage([])
    }
  }, [topic])

  // markdown
  const str = `
# Main features
1. Listen to event from different topics, only show the message from the current topic
2. When change topic, the message will be cleared
`
  return (
    <div className="">
      <div className="no-twp font-Source_Code_Pro">
        <Markdown options={{ wrapper: 'article', forceBlock: true }}>
          {str}
        </Markdown>
      </div>
      <div className="flex gap-2">
        {topics.map((t) => (
          <button
            key={t}
            onClick={() => setTopic(t)}
            className={cn('rounded-md bg-blue-200 px-4 py-2 text-black', {
              'bg-blue-500 text-white': topic === t,
            })}
          >
            Listen {t}
          </button>
        ))}
      </div>
      <div
        className={cn('mt-4 min-h-20 border p-2', {
          hidden: !message.length,
        })}
      >
        {message.map((m, i) => (
          <div key={i}>{m}</div>
        ))}
      </div>
    </div>
  )
}
