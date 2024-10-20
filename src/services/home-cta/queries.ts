import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../urls'
import { getHomeCTA } from './api'

export const useHomeCTA = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_CTA],
    queryFn: getHomeCTA,
  })
}
