import { useMutation } from '@tanstack/react-query'
import { uploadImage } from './api'

export const useUploadImageMutation = () => {
  return useMutation({
    mutationFn: uploadImage,
  })
}
