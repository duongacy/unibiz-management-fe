import Image from 'next/image'

import { Container } from '@/dp__templates/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { button } from '@/dp__atoms/button/button'
import { NextLink } from '@/dp__atoms/link/link'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-primary-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It’s time to take control of your books. Buy our software so you can
            feel like you’re doing something productive.
          </p>
          <NextLink href="/register" className={button({ className: 'mt-10' })}>
            Get 6 months free
          </NextLink>
        </div>
      </Container>
    </section>
  )
}
