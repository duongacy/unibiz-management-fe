export type Post = {
  id: number
  title: string
  body: string
  userId: number
}

export type POSTPostPayload = {
  title: string
  body: string
  userId: number
}

export type PUTPostPayload = {
  id: number
  title: string
  body: string
  userId: number
}

export type PATCHPostPayload = {
  id: number
  title?: string
  body?: string
  userId?: number
}
