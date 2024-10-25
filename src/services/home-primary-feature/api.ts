import { defaultImage, TImage } from '@/types/common'
import { safeParse } from '@/utils/safeParse'
import axios from 'axios'
import QueryString from 'qs'
import { API_STRAPI_URL } from 'src/consts'
import { URLS } from '../urls'
import { THomePrimaryFeatures } from './types'

export const getHomePrimaryFeatures = async () => {
  const query = QueryString.stringify(
    {
      populate: ['features.image', 'backgroundImage'],
    },
    {
      encodeValuesOnly: true,
    },
  )

  let data
  const defaultData: THomePrimaryFeatures = {
    title: '',
    description: '',
    features: [],
    backgroundImage: defaultImage,
  }

  try {
    data = (
      await axios.get(`${API_STRAPI_URL}${URLS.HOME_PRIMARY_FEATURES}?${query}`)
    ).data?.data
  } catch (error) {
    return defaultData
  }

  const safeData = safeParse<THomePrimaryFeatures>(data, defaultData)
  safeData.backgroundImage = safeParse<TImage>(
    safeData.backgroundImage,
    defaultImage,
    true,
  )
  safeData.features = safeData.features.map((item) => ({
    ...item,
    image: safeParse<TImage>(item.image, defaultImage, true),
  }))
  return safeData
}
