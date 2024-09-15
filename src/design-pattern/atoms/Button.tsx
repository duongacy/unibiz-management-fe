/* eslint-disable react/display-name */
import { cn } from '@/utils/cn'
import {
  Button as HeadlessButton,
  ButtonProps as HeadlessButtonProps,
} from '@headlessui/react'
import { forwardRef } from 'react'

/* =================OutlineButton====================== */
type OutlineButtonColor = 'slate' | 'white'
interface OutlineButtonProps extends HeadlessButtonProps {
  color?: OutlineButtonColor
}

export const outlineButtonClassName = (color?: OutlineButtonColor) => {
  color ??= 'slate'
  return cn(
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
    {
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300':
        color === 'slate',
    },
    {
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white':
        color === 'white',
    },
  )
}

export const OutlineButton = forwardRef<HTMLButtonElement, OutlineButtonProps>(
  ({ className, color, ...props }, ref) => {
    return (
      <HeadlessButton
        ref={ref}
        className={cn(outlineButtonClassName(color), className)}
        {...props}
      />
    )
  },
)

/* =================SolidButton====================== */
type SolidButtonColor = 'slate' | 'blue' | 'white'
interface SolidButtonProps extends HeadlessButtonProps {
  color?: SolidButtonColor
}

export const solidButtonClassName = (solidButtonProps?: SolidButtonProps) => {
  const color = solidButtonProps?.color || 'slate'
  return cn(
    'group inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
    {
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 focus-visible:outline-slate-900 active:bg-slate-800 active:text-slate-300':
        color === 'slate',
    },
    {
      'bg-blue-600 text-white hover:bg-blue-500 hover:text-slate-100 focus-visible:outline-blue-600 active:bg-blue-800 active:text-blue-100':
        color === 'blue',
    },
    {
      'bg-white text-slate-900 hover:bg-blue-50 focus-visible:outline-white active:bg-blue-200 active:text-slate-600':
        color === 'white',
    },
    { 'pointer-events-none opacity-70 ': solidButtonProps?.disabled },
  )
}

export const SolidButton = forwardRef<HTMLButtonElement, SolidButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <HeadlessButton
        ref={ref}
        className={cn(solidButtonClassName(props), className)}
        {...props}
      />
    )
  },
)
