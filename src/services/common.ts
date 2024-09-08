export const replaceWithPlaceholder = <K = any>(
  origin: Record<string, any>,
  placeholder: K,
): K => {
  for (const key in placeholder) {
    const originValue = origin[key]
    const placeholderValue = placeholder[key]
    if (originValue === undefined || originValue === null) {
      origin[key] = placeholderValue
    }
  }
  return origin as K
}
