import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../urls'
import { getHomePricing } from './api'

export const useHomePricing = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_PRICING],
    queryFn: getHomePricing,
  })
}
