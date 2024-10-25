import { NextLink } from '@/dp__atoms/link/link'
import { Container } from '@/dp__templates/Container'
import { useHomeCTA } from '@/services/home/home-cta/queries'
import Image from 'next/image'

export function CallToAction() {
  const homeCTA = useHomeCTA()
  if (homeCTA.isLoading) {
    return <p>Loading...</p>
  }
  const homeCTAData = homeCTA.data!

  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-primary-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={homeCTAData.backgroundImage.url}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            {homeCTAData.title}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            {homeCTAData.description}
          </p>
          <NextLink
            href="/register"
            rounded="full"
            className="mt-10"
            intent={'primary'}
          >
            {homeCTAData.CTAButtonText}
          </NextLink>
        </div>
      </Container>
    </section>
  )
}
