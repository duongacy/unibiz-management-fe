import { defaultImage, safeParse, TImage } from '@/types/common'
import axios from 'axios'
import { THomeHero } from './types'
import { API_STRAPI_URL } from 'src/consts'
import { URLS } from '../urls'

export const getHomeHero = async () => {
  try {
    const response = await axios.get(`${API_STRAPI_URL}${URLS.HOME_HERO}`)
    const homeHero = response?.data?.data
    homeHero.partnersLogo = response.data.data.partnersLogo
      .map((item) => safeParse<TImage>(item, defaultImage))
      .map((item) => ({
        ...item,
        url: `${API_STRAPI_URL}${item.url}`,
      }))
    return homeHero as THomeHero
  } catch (error) {
    throw new Error(error)
  }
}
