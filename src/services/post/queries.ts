// useQuery receives a queryFn as a function with get methods.

import { useQuery } from '@tanstack/react-query'
import { getAllPosts, getPostById } from './api'
import { QUERY_KEYS } from '../urls'

export const useAllPostsQuery = () => {
  // getAllPosts is a function that returns a promise
  return useQuery({
    queryKey: [QUERY_KEYS.ALL_POSTS],
    queryFn: getAllPosts,
  })
}

export const usePostById = (id: string | number) => {
  // getPostById is a function that returns a promise
  return useQuery({
    queryKey: [QUERY_KEYS.POST_BY_ID, id],
    queryFn: () => getPostById(id),
  })
}
