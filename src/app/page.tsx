'use client'
import { Footer } from '@/dp__templates/Footer'
import { Header } from '@/dp__templates/Header'
import { CallToAction } from './containers/CallToAction'
import { Faqs } from './containers/Faqs'
import { Hero } from './containers/Hero'
import { Pricing } from './containers/Pricing'
import { PrimaryFeatures } from './containers/PrimaryFeatures'
import { SecondaryFeatures } from './containers/SecondaryFeatures'
import { Testimonials } from './containers/Testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
