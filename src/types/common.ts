export type TImage = {
  id: number
  documentId: string
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: any
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
}

export const defaultImage: TImage = {
  id: 0,
  documentId: '',
  name: '',
  alternativeText: '',
  caption: '',
  width: 0,
  height: 0,
  formats: undefined,
  hash: '',
  ext: '',
  mime: '',
  size: 0,
  url: '',
  previewUrl: '',
  provider: '',
  provider_metadata: undefined,
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
  locale: '',
}
