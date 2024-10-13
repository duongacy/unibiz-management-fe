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

export const safeParse = <T>(data: any, defaultValue: T): T => {
  const defaultData = JSON.parse(JSON.stringify(defaultValue))
  for (const key in defaultData) {
    if (typeof data[key] === typeof defaultData[key]) {
      defaultData[key] = data[key]
    }
  }
  return defaultData
}

export const safeParseImage = (data: any): TImage => {
  const defaultImage: TImage = {
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

  for (const key in defaultImage) {
    if (typeof data[key] === typeof defaultImage[key]) {
      defaultImage[key] = data[key]
    }
  }
  return defaultImage
}
