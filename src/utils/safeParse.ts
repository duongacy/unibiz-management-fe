export const safeParse = <T>(data: any, defaultValue: T): T => {
  const defaultData = JSON.parse(JSON.stringify(defaultValue))
  for (const key in defaultData) {
    defaultData[key] = data[key] ?? defaultData[key]
  }
  return defaultData
}
