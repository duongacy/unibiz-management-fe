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
    'block w-full appearance-none rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-primary-500 sm:text-sm',
  )
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <HeadlessInput ref={ref} className={inputClassName(props)} {...props} />
    )
  },
)
