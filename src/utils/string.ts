export const parseToString = (value: any, defaultValue: string) => {
  let newValue = value
  try {
    newValue = value.toString()
  } catch (error) {
    newValue = defaultValue
  }
  return newValue
}
