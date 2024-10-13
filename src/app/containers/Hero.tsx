import Image from 'next/image'
import { NextLink } from '@/dp__atoms/link/link'
import { Container } from '@/dp__templates/Container'
import { useHomeHero } from '@/services/home-hero/queries'

export function Hero() {
  const homeHero = useHomeHero()
  if (homeHero.isLoading) {
    return <p>Loading...</p>
  }

  const homeHeroData = homeHero.data!

  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        {homeHeroData.title}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        {homeHeroData.subTitle}
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <NextLink href="/register" intent={'black'} rounded={'full'}>
          Get 6 months free
        </NextLink>
        <NextLink
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          intent={'outline'}
          rounded={'full'}
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-primary-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span>Watch video</span>
        </NextLink>
      </div>
      <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
          {homeHeroData.partnersLabel}
        </p>
        <ul
          role="list"
          className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4"
        >
          {homeHeroData.partnersLogo?.map((logo) => (
            <li key={logo.url} className="flex">
              <Image
                width={logo.width}
                height={logo.height}
                src={logo.url}
                alt={logo.url}
                unoptimized
              />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
