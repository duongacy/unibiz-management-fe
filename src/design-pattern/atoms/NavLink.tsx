'use client'
import { cn } from '@/utils/cn'
import Link, { LinkProps } from 'next/link'
import { forwardRef } from 'react'

export const navLinkClassName = (props?: Partial<NavLinkProps>) => {
  return cn(
    'inline-block rounded-lg px-2 py-1 text-sm text-slate-700',
    'hover:bg-slate-100 hover:text-slate-900',
    { 'bg-slate-200 text-slate-900': props?.active },
  )
}

export interface NavLinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
  active?: boolean
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (props, ref) => {
    const { active, children, className, ...restProps } = props
    return (
      <Link
        ref={ref}
        className={cn(
          navLinkClassName(props),
          {
            'bg-slate-200 text-slate-900': props.active,
          },
          className,
        )}
        {...restProps}
      >
        {children}
      </Link>
    )
  },
)
