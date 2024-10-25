import { defaultImage, TImage } from '@/types/common'
import { safeParse } from '@/utils/safeParse'
import axios from 'axios'
import QueryString from 'qs'
import { API_STRAPI_URL } from 'src/consts'
import { URLS } from '../../urls'
import { THomeSecondaryFeatures } from './types'

export const getHomeSecondaryFeatures = async () => {
  const query = QueryString.stringify(
    {
      populate: ['features.image'],
    },
    {
      encodeValuesOnly: true,
    },
  )

  let data
  const defaultData: THomeSecondaryFeatures = {
    title: '',
    description: '',
    features: [],
  }

  try {
    data = (
      await axios.get(
        `${API_STRAPI_URL}${URLS.HOME_SECONDARY_FEATURES}?${query}`,
      )
    )?.data?.data
  } catch (error) {
    return defaultData
  }

  const safeData = safeParse<THomeSecondaryFeatures>(data, defaultData)
  safeData.features = safeData.features.map((item) => ({
    ...item,
    image: safeParse<TImage>(item.image, defaultImage, true),
  }))
  return safeData
}
