import { TImage } from '@/types/common'

export type TPrimaryFeature = {
  title: string
  description: string
  image: TImage
}

export type THomePrimaryFeatures = {
  title: string
  description: string
  features: TPrimaryFeature[]
  backgroundImage: TImage
}
