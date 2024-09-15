import { AxiosResponse } from 'axios'
import { api } from '../axios'
import { SignInPayload, SignInResponse } from './types'

export const signIn = async (payload: SignInPayload) => {
  try {
    const response: AxiosResponse<SignInResponse> = await api.post(
      '/api/authen/sign-in',
      payload,
    )
    return response
  } catch (error) {
    throw new Error(error)
  }
}
