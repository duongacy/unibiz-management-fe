import { cn } from '@/utils/cn'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return <div className={cn('h-14 w-36 bg-green-300', className)}></div>
}
