import { useQuery } from '@tanstack/react-query'
import { getHomeTestimonials } from './api'
import { QUERY_KEYS } from '../../urls'

export const useHomeTestimonials = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_TESTMONIALS],
    queryFn: getHomeTestimonials,
  })
}
