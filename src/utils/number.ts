export const parseToNumber = (value: any, defaultValue: number) => {
  let newValue = value
  try {
    newValue = Number(value)
    if (['NaN'].includes(newValue.toString())) newValue = defaultValue
  } catch (error) {
    newValue = defaultValue
  }
  return newValue
}
