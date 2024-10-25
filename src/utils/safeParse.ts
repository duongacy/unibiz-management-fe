import { API_STRAPI_URL } from 'src/consts'

export const safeParse = <T>(
  data: any,
  defaultValue: T,
  replaceUrl = false,
): T => {
  const defaultData = JSON.parse(JSON.stringify(defaultValue))
  for (const key in defaultData) {
    defaultData[key] = data[key] ?? defaultData[key]
    if (key === 'url' && replaceUrl) {
      defaultData[key] = `${API_STRAPI_URL}${defaultData[key]}`
    }
  }
  return defaultData
}
