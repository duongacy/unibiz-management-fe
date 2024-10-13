export const safeParse = <T>(data: any, defaultValue: T): T => {
  const defaultData = JSON.parse(JSON.stringify(defaultValue))
  for (const key in defaultData) {
    if (typeof data[key] === typeof defaultData[key]) {
      defaultData[key] = data[key]
    }
  }
  return defaultData
}
