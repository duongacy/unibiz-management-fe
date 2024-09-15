import { useQuery } from '@tanstack/react-query'
import { getAllPosts, getPostById } from './api'
import { QUERY_KEYS } from '../urls'

export const useAllPostsQuery = () => {
  return useQuery({
    /* Phải sử dụng query key để phục vụ các action invalidate */
    queryKey: [QUERY_KEYS.ALL_POSTS],
    queryFn: getAllPosts,
  })
}

export const usePostById = (id: string | number) => {
  return useQuery({
    /* thêm id vào queryKey để action invalidate thêm chính xác hơn, không phải invalidate all */
    queryKey: [QUERY_KEYS.POST_BY_ID, id],
    queryFn: () => getPostById(id),
  })
}
