import { safeParse } from '@/utils/safeParse'
import axios from 'axios'
import QueryString from 'qs'
import { API_STRAPI_URL } from 'src/consts'
import { URLS } from '../urls'
import { THomeFAQ } from './types'

export const getHomeFAQ = async () => {
  const query = QueryString.stringify(
    {
      populate: ['faqs'],
    },
    {
      encodeValuesOnly: true,
    },
  )

  let data
  const defaultData: THomeFAQ = {
    title: '',
    description: '',
    faqs: [],
  }

  try {
    data = (await axios.get(`${API_STRAPI_URL}${URLS.HOME_FAQ}?${query}`)).data
      ?.data
  } catch (error) {
    return defaultData
  }

  const safeData = safeParse<THomeFAQ>(data, defaultData)

  return safeData
}
