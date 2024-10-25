export type TFAQ = {
  question: string
  answer: string
}

export type THomeFAQ = {
  title: string
  description: string
  faqs: TFAQ[]
}
