'use client'

import {
  useAddPostMutation,
  useDeletePostMutation,
  usePutPostMutation,
} from '@/services/post/mutations'
import { useAllPostsQuery, usePostById } from 'src/services/post/queries'

export default function Page() {
  const postByIdQuery = usePostById(1)
  const allPostsQuery = useAllPostsQuery()
  const addPostMutation = useAddPostMutation()
  const putPostMutation = usePutPostMutation()
  const deletePostMutation = useDeletePostMutation()

  /* Do sử dụng api fake nên mọi tác vụ cũng được fake (data không được thay đổi trên hệ thống), 
  nhưng cần focus đến trạng thái của react query invalidate dữ liệu như thế nào 
  (bật react query devtools hình cây dừa dưới góc phải sau đó ấn 3 button để xem) */

  const handleAddNewPost = () => {
    addPostMutation.mutate({ body: '', title: '', userId: 1 })
  }
  const handleEditPost = () => {
    putPostMutation.mutate({ body: '', title: '', userId: 1, id: 1 })
  }
  const handleDeletePost = () => {
    deletePostMutation.mutate(1)
  }

  // if (allPostsQuery.isLoading) return <p>Loading</p>
  // if (allPostsQuery.isError) return <p>Error</p>
  return (
    <div className="space-y-4 p-4">
      <div>
        <p>Action</p>
        <div className="flex gap-4 border p-4">
          <button onClick={handleAddNewPost} className="border">
            Fake add post
          </button>
          <button onClick={handleEditPost} className="border">
            Fake edit post
          </button>
          <button onClick={handleDeletePost} className="border">
            Fake delete post
          </button>
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <p className="font-bold">List post:</p>
          <div className="divide-y-2 border">
            {/* {JSON.stringify(allPostsQuery.data)} */}
            {(allPostsQuery.data?.result || []).map((post) => (
              <div key={`post-${post.id}`}> Title: {post.title}</div>
            ))}
          </div>
        </div>
        <div className="flex-grow">
          <p className="font-bold">Post id 1:</p>
          <div className="border">
            <p>Title: {postByIdQuery.data?.result?.title}</p>
            <p>Body: {postByIdQuery.data?.result?.body}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
