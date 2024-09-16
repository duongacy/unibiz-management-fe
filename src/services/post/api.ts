import { AxiosResponse } from 'axios'
import { api } from '../axios'
import { URLS } from '../urls'
import { Post } from './types'

export const getAllPosts = async () => {
  try {
    const response: AxiosResponse<Post[] | null> = await api.get(URLS.POSTS)
    return response
  } catch (error) {
    throw new Error(error)
  }
}

export const getPostById = async (id: string | number) => {
  try {
    const response: AxiosResponse<Post | null> = await api.get(
      `${URLS.POSTS}/details/${id}`,
    )
    return response
  } catch (error) {
    throw new Error(error)
  }
}
