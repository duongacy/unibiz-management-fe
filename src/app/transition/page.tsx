'use client'
import { Transition, TransitionChild } from '@headlessui/react'
import { useState } from 'react'

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      {/* The `show` prop controls all nested `TransitionChild` components. */}
      <Transition show={open}>
        {/* Backdrop */}
        <TransitionChild>
          <div
            className="fixed inset-0 bg-black/30 transition duration-300 data-[closed]:opacity-0"
            onClick={() => setOpen(false)}
          />
        </TransitionChild>

        {/* Slide-in sidebar */}
        <TransitionChild>
          <div className="fixed inset-y-0 left-0 w-64 bg-white transition duration-300 data-[closed]:-translate-x-full">
            {/* ... */}
          </div>
        </TransitionChild>
      </Transition>
    </>
  )
}
