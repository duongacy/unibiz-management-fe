import { cn } from '@/utils/cn'
import Link, { LinkProps } from 'next/link'

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
  return (
    <Link
      className={cn(navLinkClassName(), className)}
      {...props}
    >
      {children}
    </Link>
  )
}
