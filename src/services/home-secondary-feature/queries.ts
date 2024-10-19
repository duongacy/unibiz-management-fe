import { useQuery } from '@tanstack/react-query'
import { getHomeSecondaryFeatures } from './api'

export const useHomeSecondaryFeatures = () => {
  return useQuery({
    queryKey: ['home-secondary-features'],
    queryFn: getHomeSecondaryFeatures,
  })
}
