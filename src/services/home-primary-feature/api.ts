import { defaultImage, TImage } from '@/types/common'
import axios from 'axios'
import { API_STRAPI_URL } from 'src/consts'
import { URLS } from '../urls'
import { safeParse } from '@/utils/safeParse'
import { THomePrimaryFeatures } from './types'

export const getHomePrimaryFeatures = async () => {
  const qs = require('qs')
  const query = qs.stringify(
    {
      populate: ['features.image', 'backgroundImage'],
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  )
  try {
    const response = await axios.get(
      `${API_STRAPI_URL}${URLS.HOME_PRIMARY_FEATURES}?${query}`,
    )
    return response?.data?.data as THomePrimaryFeatures
  } catch (error) {
    throw new Error(error)
  }
}
