import { useQuery } from '@tanstack/react-query'
import { getHomeHero } from './api'

export const useHomeHero = () => {
  return useQuery({
    queryKey: ['home-hero'],
    queryFn: getHomeHero,
  })
}
