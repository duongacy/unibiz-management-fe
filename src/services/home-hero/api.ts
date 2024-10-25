import { defaultImage, TImage } from '@/types/common'
import { safeParse } from '@/utils/safeParse'
import axios from 'axios'
import { API_STRAPI_URL } from 'src/consts'
import { URLS } from '../urls'
import { THomeHero } from './types'
import QueryString from 'qs'

export const getHomeHero = async () => {
  const query = QueryString.stringify(
    {
      populate: ['partnersLogo'],
    },
    {
      encodeValuesOnly: true,
    },
  )

  let data
  const defaultData: THomeHero = {
    title: '',
    subTitle: '',
    partnersLabel: '',
    partnersLogo: [],
  }

  try {
    data = (await axios.get(`${API_STRAPI_URL}${URLS.HOME_HERO}?${query}`)).data
      ?.data
  } catch (error) {
    return defaultData
  }

  const safeData = safeParse<THomeHero>(data, defaultData)
  safeData.partnersLogo = safeData.partnersLogo.map((item) =>
    safeParse<TImage>(item, defaultImage, true),
  )
  return safeData
}
