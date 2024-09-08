import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addPost, deletePost, putPost } from './axios'
import { QUERY_KEYS } from '../urls'

export const useAddPostMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    /* Khi thêm dữ liệu, thì 1 list tất cả các posts đều phải được invalidate lại,
        trường hợp này thường là 1 table chứa tất cả post (useAllPostsQuery)
      */
    mutationFn: addPost,
    onSettled: async (res) => {
      if (res.status === 200) {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.ALL_POSTS],
        })
      }
    },
  })
}

export const usePutPostMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: putPost,
    onSettled: async (res) => {
      if (res.status === 200) {
        /* Khi update dữ liệu, thì 1 list tất cả các posts đều phải được invalidate lại,
          trường hợp này thường là 1 table chứa tất cả post (useAllPostsQuery)
        */
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.ALL_POSTS],
        })
        /* 1 record data cụ thể sẽ được invalidate lại, 
       trường hợp này thường là 1 trang detail đang hiển thị (usePostById)*/
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.POST_BY_ID, res.result.id],
        })
      }
    },
  })
}

export const useDeletePostMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deletePost,
    onSettled: async (res) => {
      if (res.status === 200) {
        /* Khi update dữ liệu, thì 1 list tất cả các posts đều phải được invalidate lại,
          trường hợp này thường là 1 table chứa tất cả post (useAllPostsQuery)
        */
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.ALL_POSTS],
        })
        /* 1 record data cụ thể sẽ được invalidate lại, 
        trường hợp này thường là 1 trang detail đang hiển thị (usePostById)*/
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.POST_BY_ID, res.result?.id],
        })
      }
    },
  })
}
