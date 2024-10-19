import { TImage } from '@/types/common'

export type TSecondaryFeature = {
  name: string
  summary: string
  description: string
  image: TImage
  icon?: any
}

export type THomeSecondaryFeatures = {
  title: string
  description: string
  features: TSecondaryFeature[]
}
