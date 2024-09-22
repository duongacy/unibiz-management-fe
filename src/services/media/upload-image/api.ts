import { api } from '@/services/axios'
import { URLS } from '@/services/urls'
import { AxiosResponse } from 'axios'

export const uploadImage = async (blobFile: Blob) => {
  try {
    const response: AxiosResponse<{ url: string } | null> = await api.upload(
      URLS.UPLOAD_IMAGE,
      blobFile,
    )
    return response
  } catch (error) {
    throw new Error(error)
  }
}
