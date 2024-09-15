import { set } from 'react-hook-form'
import axios from 'axios'
import { URLS } from './urls'

declare global {
  interface Window {
    tokenRefetching: boolean
  }
}
// Create an Axios instance with default configuration
export const api = {
  setToken() {
    const token = localStorage.getItem('token')
    this.instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  },
  instance: axios.create({
    baseURL: URLS.BASE,
  }),
  async get(url: string, params?: Record<string, number | string>) {
    this.setToken()
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
    this.setToken()
    try {
      return this.instance.post(url, JSON.stringify(payload))
    } catch (error) {
      console.error(error)
    }
  },
  async put(url: string, payload: Record<string, number | string>) {
    this.setToken()
    try {
      return this.instance.put(url, payload)
    } catch (error) {
      console.error(error)
    }
  },
  async delete(url: string) {
    this.setToken()
    try {
      return this.instance.delete(url)
    } catch (error) {
      console.error(error)
    }
  },
}

// Interceptor to log request and response
api.instance.interceptors.request.use(
  async (config: any) => {
    return config
    // return new Promise((resolve, reject) => {
    //   checkConfig('')

    //   window.addEventListener(
    //     'tokenOk',
    //     (event: CustomEvent<{ token: string }>) => {
    //       const token = event.detail.token
    //       config.headers['Authorization'] = `Bearer ${token}`
    //       api.token = token
    //       console.log('Refresh token ok')
    //       resolve(config)
    //     },
    //   )

    //   window.addEventListener('tokenFail', () => {
    //     const event = new CustomEvent('logout')
    //     window.dispatchEvent(event)
    //     console.error('Refresh token failed')
    //     reject(new Error('Token is invalid'))
    //   })
    // })
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
    if (error?.response?.statusText === 'Unauthorized') {
      window.dispatchEvent(new CustomEvent('forceLogin'))
    }
    return Promise.reject(error)
  },
)
