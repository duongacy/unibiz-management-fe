import { safeParse } from '@/utils/safeParse'
import axios from 'axios'
import QueryString from 'qs'
import { API_STRAPI_URL } from 'src/consts'
import { URLS } from '../../urls'
import { THomePricing } from './types'

export const getHomePricing = async () => {
  const query = QueryString.stringify(
    {
      populate: ['prices'],
    },
    {
      encodeValuesOnly: true,
    },
  )

  let data
  const defaultData: THomePricing = {
    title: '',
    description: '',
    prices: [],
  }

  try {
    data = (await axios.get(`${API_STRAPI_URL}${URLS.HOME_PRICING}?${query}`)).data
      ?.data
  } catch (error) {
    return defaultData
  }

  const safeData = safeParse<THomePricing>(data, defaultData)

  return safeData
}
