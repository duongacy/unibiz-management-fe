import axios, { AxiosRequestConfig } from 'axios'
import { URLS } from './urls'

declare global {
  interface Window {
    isRefreshing: boolean
  }
}
// Create an Axios instance with default configuration
export const api = {
  instance: axios.create({
    baseURL: URLS.BASE,
  }),
  async get(url: string, params?: Record<string, number | string>) {
    params ??= {}
    try {
      const searchParams = new URLSearchParams()
      for (const key in params) {
        searchParams.append(key, params[key].toString())
      }
      return this.instance.get(`${url}?${searchParams.toString()}`)
    } catch (error) {
      console.error(error)
    }
  },
  async post(url: string, payload: Record<string, number | string>) {
    try {
      return this.instance.post(url, JSON.stringify(payload))
    } catch (error) {
      console.error(error)
    }
  },
  async put(url: string, payload: Record<string, number | string>) {
    try {
      return this.instance.put(url, payload)
    } catch (error) {
      console.error(error)
    }
  },
  async delete(url: string) {
    try {
      return this.instance.delete(url)
    } catch (error) {
      console.error(error)
    }
  },
}

const needRefreshToken = (accessToken: string) => {
  return false
}

const refreshToken = () => {
  if (window.isRefreshing) {
    // khi dang refresh token thi khong can phai refresh token nua
    return
  }
  window.isRefreshing = true
  // Call api refresh token
  api
    .post('/refresh-token', {
      refreshToken: localStorage.getItem('refreshToken'),
    })
    .then((response) => {
      const newAccessToken = response.data.accessToken
      const newRefreshToken = response.data.refreshToken
      // Dispatch event tokenRefreshed
      const event = new CustomEvent('tokenRefreshed', {
        detail: { accessToken: newAccessToken, refreshToken: newRefreshToken },
      })
      window.dispatchEvent(event)
    })
    .catch((error) => {
      console.error('Refresh Token Error:', error)
      const event = new Event('logout')
      window.dispatchEvent(event)
    })
    .finally(() => {
      // Reset isRefreshing
      window.isRefreshing = false
    })
}

// Interceptor to log request and response
api.instance.interceptors.request.use(
  async (config: any) => {
    const accessToken = localStorage.getItem('accessToken')
    // Check if need to refresh token
    if (!needRefreshToken(accessToken)) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
      return config
    }

    return new Promise((resolve) => {
      refreshToken()
      // doi su kien tokenRefreshed duoc goi moi resolve
      window.addEventListener('tokenRefreshed', (event: any) => {
        const newToken = event.detail.accessToken
        const newRefreshToken = event.detail.accessToken
        localStorage.setItem('accessToken', newToken)
        localStorage.setItem('refreshToken', newRefreshToken)
        config.headers['Authorization'] = `Bearer ${newToken}`
        resolve(config)
      })
    })
  },
  (error) => {
    console.error('Request Error:', error)
    return Promise.reject(error)
  },
)

api.instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)
