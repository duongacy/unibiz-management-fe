import { defaultImage, TImage } from '@/types/common'
import { safeParse } from '@/utils/safeParse'
import axios from 'axios'
import QueryString from 'qs'
import { API_STRAPI_URL } from 'src/consts'
import { URLS } from '../urls'
import { THomeCTA } from './types'

export const getHomeCTA = async () => {
  const query = QueryString.stringify(
    {
      populate: ['backgroundImage'],
    },
    {
      encodeValuesOnly: true,
    },
  )

  let data
  const defaultData: THomeCTA = {
    title: '',
    description: '',
    backgroundImage: defaultImage,
    CTAButtonText: '',
  }

  try {
    data = (await axios.get(`${API_STRAPI_URL}${URLS.HOME_CTA}?${query}`)).data
      ?.data
  } catch (error) {
    return defaultData
  }

  const safeData = safeParse<THomeCTA>(data, defaultData)
  safeData.backgroundImage = safeParse<TImage>(
    data.backgroundImage,
    defaultImage,
    true,
  )
  return safeData
}
