import axios from 'axios'
import { API_STRAPI_URL } from 'src/consts'
import { URLS } from '../urls'
import { THomeSecondaryFeatures } from './types'

export const getHomeSecondaryFeatures = async () => {
  const qs = require('qs')
  const query = qs.stringify(
    {
      populate: ['features.image'],
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  )
  try {
    const response = await axios.get(
      `${API_STRAPI_URL}${URLS.HOME_SECONDARY_FEATURES}?${query}`,
    )
    return response?.data?.data as THomeSecondaryFeatures
  } catch (error) {
    throw new Error(error)
  }
}
