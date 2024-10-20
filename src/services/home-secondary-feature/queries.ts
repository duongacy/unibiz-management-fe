import { useQuery } from '@tanstack/react-query'
import { getHomeSecondaryFeatures } from './api'
import { QUERY_KEYS } from '../urls'

export const useHomeSecondaryFeatures = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_SECONDARY_FEATURES],
    queryFn: getHomeSecondaryFeatures,
  })
}
