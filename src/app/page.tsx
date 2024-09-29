'use client'
import { CommonTemplate } from '@/dp__templates/common-template/CommonTemplate'
import { useAllPostsQuery, usePostById } from '@/services/post/queries'
import { useEffect } from 'react'
import { CallToAction } from './containers/CallToAction'
import { Faqs } from './containers/Faqs'
import { Hero } from './containers/Hero'
import { Pricing } from './containers/Pricing'
import { PrimaryFeatures } from './containers/PrimaryFeatures'
import { SecondaryFeatures } from './containers/SecondaryFeatures'
import { Testimonials } from './containers/Testimonials'

export default function Home() {
  const allPostQuery = useAllPostsQuery()
  const postByIdQuery = usePostById(2)

  useEffect(() => {
    console.log('allPostQuery:', allPostQuery.data?.data?.[0]?.title)
  }, [allPostQuery.data])

  useEffect(() => {
    console.log('postByIdQuery:', postByIdQuery.data?.data?.title)
  }, [postByIdQuery.data])
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
