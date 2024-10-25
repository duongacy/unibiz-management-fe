export function splitToNArrays<T>(array: T[], n: number): T[][] {
  const arrays: T[][] = []
  while (array.length) {
    arrays.push(array.slice(0, n))
    array = array.slice(n)
  }
  return arrays
}
