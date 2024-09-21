'use client'

import { SolidButton } from '@/dp__atoms/Button'
import Markdown from 'markdown-to-jsx'
import { useEffect, useState } from 'react'

export default function Page() {
  console.log('Constructor called')

  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('componentDidMount called')
    return () => {
      console.log('componentUnmount called')
    }
  }, [])

  useEffect(() => {
    console.log('componentDidUpdate called:', count)
    return () => {
      console.log('componentWillUpdate called, old value:', count)
    }
  }, [count])

  const str = `
# Main features
1. Lifecycle: Mount, Will update, Update, Unmount
2. Lifecycle of React component with **useEffect**
  - Mount: with **empty dependency array**
  - Will update: with **dependency array** and **return function**
  - Update: with **dependency array**
  - Unmount: with **return function**
`

  return (
    <div>
      <div className="no-twp font-Source_Code_Pro">
        <Markdown options={{ wrapper: 'article', forceBlock: true }}>
          {str}
        </Markdown>
      </div>
      {(function () {
        console.log('render called')
        return null
      })()}
      <div>
        <SolidButton onClick={() => setCount((c) => c + 1)}>
          Increase
        </SolidButton>
        <div>New count: {count}</div>
      </div>
    </div>
  )
}
