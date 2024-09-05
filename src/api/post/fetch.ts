/* 
  Dùng để fetch data từ BE
  Bằng tất cả mọi cách, phải parse data từ BE về thành type mong muốn
  Trả về 1 promise function cho queryFn hoặc mutationFn
*/
import { URLS } from '../urls'
import {
  PATCHPostPayload,
  Post,
  POSTPostPayload,
  PUTPostPayload,
} from './types'
import { WithResponse } from '../types'
import { parseToNumber } from '@/utils/number'
import { parseToString } from '@/utils/string'

const postPlaceholder: Post = {
  body: '',
  id: 0,
  title: '',
  userId: 0,
}

export const getAllPosts = async () => {
  let result: WithResponse<Post[]> = {
    status: 0,
    statusText: '',
    data: [],
  }
  try {
    const response = await fetch(URLS.POSTS)
    const responseJson = await response.json()
    result = {
      status: response.status,
      statusText: response.statusText,
      data: (responseJson || []).map((item) => ({
        id: parseToNumber(item.id, postPlaceholder.id),
        title: parseToString(item.title, postPlaceholder.title),
        body: parseToString(item.body, postPlaceholder.body),
        userId: parseToNumber(item.userId, postPlaceholder.userId),
      })),
    }
    return result
  } catch (error) {
    return result
  }
}

export const getPostById = async (id: string | number) => {
  let result: WithResponse<Post> = {
    status: 0,
    statusText: '',
    data: postPlaceholder,
  }
  try {
    const response = await fetch(`${URLS.POSTS}/${id}`)
    result = {
      ...result,
      status: response.status,
      statusText: response.statusText,
    }

    if (response.ok) {
      const responseJson = await response.json()
      result.data = {
        id: parseToNumber(responseJson.id, postPlaceholder.id),
        title: parseToString(responseJson.title, postPlaceholder.title),
        body: parseToString(responseJson.body, postPlaceholder.body),
        userId: parseToNumber(responseJson.userId, postPlaceholder.userId),
      }
    }
    return result
  } catch (error) {
    return result
  }
}

export const addPost = async (payload: POSTPostPayload) => {
  let result: WithResponse<Post> = {
    status: 0,
    statusText: '',
    data: postPlaceholder,
  }
  try {
    const response = await fetch(URLS.POSTS, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    const responseJson = await response.json()
    result = {
      status: response.status,
      statusText: response.statusText,
      data: {
        id: parseToNumber(responseJson.id, postPlaceholder.id),
        title: parseToString(responseJson.title, postPlaceholder.title),
        body: parseToString(responseJson.body, postPlaceholder.body),
        userId: parseToNumber(responseJson.userId, postPlaceholder.userId),
      },
    }
    return result
  } catch (error) {
    return result
  }
}

export const putPost = async (payload: PUTPostPayload) => {
  let result: WithResponse<Post> = {
    status: 0,
    statusText: '',
    data: {
      // để phòng trường hợp dù xoá thất bại nhưng vẫn trả về được thất bại ở record nào (để hiển thị thông báo chẳng hạn)
      id: payload.id,
      title: payload.title,
      body: payload.body,
      userId: payload.userId,
    },
  }
  try {
    const response = await fetch(`${URLS.POSTS}/${payload.id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    result = {
      ...result,
      status: response.status,
      statusText: response.statusText,
    }
    return result
  } catch (error) {
    return result
  }
}

export const deletePost = async (id: string | number) => {
  /*  Mặc dù ở BE không trả về bất cứ data gì khi xoá thành công hay thất bại, 
      nhưng việc trả về 1 id khi thực hiện xong tác vụ là cần thiết để invalidate lại dữ liệu 
  */
  let result: WithResponse<{ id: number }> = {
    status: 0,
    statusText: '',
    data: { id: Number(id) },
  }
  try {
    const response = await fetch(`${URLS.POSTS}/${id}`, {
      method: 'DELETE',
    })
    result = {
      ...result,
      status: response.status,
      statusText: response.statusText,
    }
    return result
  } catch (error) {
    return result
  }
}
