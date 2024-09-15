import { useMutation } from '@tanstack/react-query'
import { signIn } from './api'

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: signIn,
  })
}
