export function splitArrayIntoPairs<T>(array: T[]): T[][] {
  const pairs: T[][] = []
  for (let i = 0; i < array.length; i += 2) {
    pairs.push([array[i], array[i + 1]])
  }
  return pairs
}
