import { cn } from '@/utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import React, { forwardRef, memo } from 'react'

const buttonCva = cva(
  [
    'justify-center w-fit items-center flex-shrink-0 inline-flex gap-1 transition-all ease-in-out duration-150',
  ],
  {
    variants: {
      intent: {
        primary: [
          'text-white',
          'border-transparent',
          'bg-primary-500',
          'hover:bg-primary-400',
          'active:bg-primary-600',
        ],
        black: [
          'bg-black',
          'text-white',
          'border-transparent',
          'hover:bg-neutral-900',
        ],
        link: [
          'bg-transparent',
          'text-primary-500',
          'border-transparent',
          'hover:text-primary-700',
        ],
        outline: [
          'text-primary-500',
          'border border-primary-500',
          'bg-transparent',
          'hover:bg-primary-50',
          'active:bg-primary-100',
        ],
      },
      size: {
        small: ['text-sm', 'py-1', 'px-2'],
        medium: ['text-base', 'py-2', 'px-4'],
      },
      rounded: {
        none: ['rounded-none'],
        small: ['rounded-sm'],
        medium: ['rounded-md'],
        full: ['rounded-full'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
      rounded: 'none',
    },
    compoundVariants: [{ intent: 'link', className: 'p-0' }],
  },
)

export const button = (...params: Parameters<typeof buttonCva>) => {
  return cn(buttonCva(...params))
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>

export const Button: React.FC<ButtonProps> = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, intent, size, rounded, ...props }, ref) => (
      <button
        ref={ref}
        className={button({ intent, size, rounded, className })}
        {...props}
      />
    ),
  ),
)
