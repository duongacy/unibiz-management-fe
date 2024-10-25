export type TPricing = {
  title: string
  description: string
  features: string[]
  value: string
}

export type THomePricing = {
  title: string
  description: string
  prices: TPricing[]
}
