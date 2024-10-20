// Mutation receives a function with post, put, delete, etc... methods.
import { useMutation } from '@tanstack/react-query'
import { signIn } from './api'

export const useLoginMutation = () => {
  // signIn is a function that returns a promise
  return useMutation({
    mutationFn: signIn,
  })
}
