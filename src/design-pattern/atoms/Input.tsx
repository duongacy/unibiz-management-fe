/* eslint-disable react/display-name */
import { cn } from '@/utils/cn'
import {
  Input as HeadlessInput,
  InputProps as HeadlessInputProps,
} from '@headlessui/react'
import { forwardRef } from 'react'

export interface InputProps extends HeadlessInputProps {}

export const inputClassName = (props: InputProps) =>
  cn(
    'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-1.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm',
  )
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <HeadlessInput ref={ref} className={inputClassName(props)} {...props} />
    )
  },
)
