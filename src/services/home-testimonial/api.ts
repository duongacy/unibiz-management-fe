import { defaultImage, TImage } from '@/types/common'
import { safeParse } from '@/utils/safeParse'
import axios from 'axios'
import QueryString from 'qs'
import { API_STRAPI_URL } from 'src/consts'
import { URLS } from '../urls'
import { THomeTestimonials } from './types'
import { url } from 'inspector'

export const getHomeTestimonials = async () => {
  const query = QueryString.stringify(
    {
      populate: ['testimonials.avatar'],
    },
    {
      encodeValuesOnly: true,
    },
  )

  let data
  const defaultData: THomeTestimonials = {
    title: '',
    description: '',
    testimonials: [],
  }

  try {
    data = (
      await axios.get(`${API_STRAPI_URL}${URLS.HOME_TESTMONIALS}?${query}`)
    ).data?.data
  } catch (error) {
    return defaultData
  }

  const safeData = safeParse<THomeTestimonials>(data, defaultData)
  safeData.testimonials = safeData.testimonials.map((item) => ({
    ...item,
    avatar: safeParse<TImage>(
      { ...item.avatar, url: `${API_STRAPI_URL}${item.avatar.url}` },
      defaultImage,
    ),
  }))

  return safeData
}
