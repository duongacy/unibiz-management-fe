import { cn } from '@/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'
import Link, { LinkProps } from 'next/link'
import { forwardRef, memo, ReactNode } from 'react'

const nextLinkCva = cva(
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
      intent: 'link',
      size: 'medium',
      rounded: 'none',
    },
    compoundVariants: [{ intent: 'link', className: 'p-0' }],
  },
)

export const nextLink = (...params: Parameters<typeof nextLinkCva>) => {
  return cn(nextLinkCva(...params))
}

type NextLinkProps = LinkProps &
  VariantProps<typeof nextLink> & { className?: string; children: ReactNode }
export const NextLink = memo(
  forwardRef<HTMLAnchorElement, NextLinkProps>(
    ({ className, intent, size, ...props }, ref) => {
      return (
        <Link
          ref={ref}
          className={nextLink({ intent, size, className })}
          {...props}
        />
      )
    },
  ),
)
