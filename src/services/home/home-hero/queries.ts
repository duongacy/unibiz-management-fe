import { useQuery } from '@tanstack/react-query'
import { getHomeHero } from './api'
import { QUERY_KEYS } from '../../urls'

export const useHomeHero = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_HERO],
    queryFn: getHomeHero,
  })
}
