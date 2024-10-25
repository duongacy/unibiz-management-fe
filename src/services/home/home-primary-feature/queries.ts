import { useQuery } from '@tanstack/react-query'
import { getHomePrimaryFeatures } from './api'
import { QUERY_KEYS } from '../../urls'

export const useHomePrimaryFeatures = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_PRIMARY_FEATURES],
    queryFn: getHomePrimaryFeatures,
  })
}
