import { cn } from '@/utils/cn'

export const containerClassName = () => 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return <div className={cn(containerClassName(), className)} {...props} />
}
