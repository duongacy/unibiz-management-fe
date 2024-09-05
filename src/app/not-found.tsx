import Link from 'next/link'
import { SlimTemplate } from '@/dp__templates/SlimTemplate'
import { Logo } from '@/dp__atoms/Logo'
import { cn } from '@/utils/cn'
import { solidButtonClassName } from '@/dp__atoms/Button'

export default function NotFound() {
  return (
    <SlimTemplate>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <p className="mt-20 text-sm font-medium text-gray-700">404</p>
      <h1 className="mt-3 text-lg font-semibold text-gray-900">
        Page not found
      </h1>
      <p className="mt-3 text-sm text-gray-700">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link href="/" className={cn(solidButtonClassName('slate'), 'mt-10')}>
        Go back home
      </Link>
    </SlimTemplate>
  )
}
