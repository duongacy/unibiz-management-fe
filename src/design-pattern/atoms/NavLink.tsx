'use client'
import { cn } from '@/utils/cn'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

export const navLinkClassName = () => {
  return cn(
    'inline-block rounded-lg px-2 py-1 text-sm text-slate-700',
    'hover:bg-slate-100 hover:text-slate-900',
  )
}

export interface NavLinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
}

export function NavLink({ children, className, ...props }: NavLinkProps) {
  const pathname = usePathname()
  return (
    <Link
      className={cn(
        navLinkClassName(),
        {
          'bg-slate-200 text-slate-900': pathname?.includes(
            props.href?.toString(),
          ),
        },
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
