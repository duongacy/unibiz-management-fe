/* 
  Dùng để fetch data từ BE
  Bằng tất cả mọi cách, phải parse data từ BE về thành type mong muốn
  Trả về 1 promise function cho queryFn hoặc mutationFn
*/
import { parseToNumber } from '@/utils/number'
import { parseToString } from '@/utils/string'
import { WithResponse } from '../types'
import { URLS } from '../urls'
import { Post, POSTPostPayload, PUTPostPayload } from './types'
import { api } from '../axios'

const postPlaceholder: Post = {
  body: '',
  id: 0,
  title: '',
  userId: 0,
}

export const getAllPosts = async () => {
  let rs: WithResponse<Post[]> = {
    status: 0,
    statusText: '',
    result: null,
  }
  try {
    const response = await api.get(URLS.POSTS)
    return {
      status: response.status,
      statusText: response.statusText,
      result: (response.data || []).map((item) => ({
        id: parseToNumber(item.id, postPlaceholder.id),
        title: parseToString(item.title, postPlaceholder.title),
        body: parseToString(item.body, postPlaceholder.body),
        userId: parseToNumber(item.userId, postPlaceholder.userId),
      })),
    }
  } catch (error) {
    return rs
  }
}

export const getPostById = async (id: string | number) => {
  let rs: WithResponse<Post> = {
    status: 0,
    statusText: '',
    result: null,
  }
  try {
    const response = await api.get(`${URLS.POSTS}/${id}`)
    rs = {
      status: response.status,
      statusText: response.statusText,
      result: {
        id: parseToNumber(response.data.id, postPlaceholder.id),
        title: parseToString(response.data.title, postPlaceholder.title),
        body: parseToString(response.data.body, postPlaceholder.body),
        userId: parseToNumber(response.data.userId, postPlaceholder.userId),
      },
    }
    return rs
  } catch (error) {
    return rs
  }
}

export const addPost = async (payload: POSTPostPayload) => {
  let rs: WithResponse<Post> = {
    status: 0,
    statusText: '',
    result: null,
  }
  try {
    const response = await api.post(URLS.POSTS, payload)
    rs = {
      status: response.status,
      statusText: response.statusText,
      result: {
        id: parseToNumber(response.data.id, postPlaceholder.id),
        title: parseToString(response.data.title, postPlaceholder.title),
        body: parseToString(response.data.body, postPlaceholder.body),
        userId: parseToNumber(response.data.userId, postPlaceholder.userId),
      },
    }
    return rs
  } catch (error) {
    return rs
  }
}

export const putPost = async (payload: PUTPostPayload) => {
  let rs: WithResponse<Post> = {
    status: 0,
    statusText: '',
    result: null,
  }
  try {
    const response = await api.put(`${URLS.POSTS}/${payload.id}`, payload)
    rs = {
      status: response.status,
      statusText: response.statusText,
      result: {
        id: response.data.id,
        title: response.data.title,
        body: response.data.body,
        userId: response.data.userId,
      },
    }
    return rs
  } catch (error) {
    return rs
  }
}

export const deletePost = async (id: string | number) => {
  let result: WithResponse<{ id: number }> = {
    status: 0,
    statusText: '',
    result: null,
  }
  try {
    const response = await api.delete(`${URLS.POSTS}/${id}`)
    result = {
      status: response.status,
      statusText: response.statusText,
      result: {
        id: Number(id),
      },
    }
    return result
  } catch (error) {
    return result
  }
}
