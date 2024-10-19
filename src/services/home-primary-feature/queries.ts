import { useQuery } from '@tanstack/react-query'
import { getHomePrimaryFeatures } from './api'

export const useHomePrimaryFeatures = () => {
  return useQuery({
    queryKey: ['home-primary-features'],
    queryFn: getHomePrimaryFeatures,
  })
}
