'use client'
import { CommonTemplate } from '@/dp__templates/common-template/CommonTemplate'
import { CallToAction } from './home-containers/CallToAction'
import { Faqs } from './home-containers/Faqs'
import { Hero } from './home-containers/Hero'
import { Pricing } from './home-containers/Pricing'
import { PrimaryFeatures } from './home-containers/PrimaryFeatures'
import { SecondaryFeatures } from './home-containers/SecondaryFeatures'
import { Testimonials } from './home-containers/Testimonials'

export default function Home() {
  return (
    <CommonTemplate>
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
    </CommonTemplate>
  )
}
