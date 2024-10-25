import { useQuery } from '@tanstack/react-query'
import { getHomeFAQ } from './api'
import { QUERY_KEYS } from '../urls'

export const useHomeFAQ = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_FAQ],
    queryFn: getHomeFAQ,
  })
}
