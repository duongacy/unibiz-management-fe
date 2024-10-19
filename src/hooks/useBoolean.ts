'use client'
import { useState } from 'react'

export function useBoolean(initialValue) {
  const [value, setValue] = useState(initialValue)
  const switchOn = () => setValue(true)
  const switchOff = () => setValue(false)
  const toggle = () => setValue((prev) => !prev)
  return { value, switchOn, switchOff, toggle }
}
