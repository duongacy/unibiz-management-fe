import { TImage } from '@/types/common'

export type TTestimonial = {
  content: string
  name: string
  position: string
  avatar: TImage
}

export type THomeTestimonials = {
  title: string
  description: string
  testimonials: TTestimonial[]
}
