import { SetStateAction, useEffect, useState } from 'react'

export function useMedia() {
  const [matchesSpecific, setMatchesSpecific] = useState<
    'sm' | 'md' | 'lg' | 'xl' | '2xl'
  >()

  useEffect(() => {
    let mediaQuerySm = window.matchMedia('(min-width: 640px)')
    let mediaQueryMd = window.matchMedia('(min-width: 768px)')
    let mediaQueryLg = window.matchMedia('(min-width: 1024px)')
    let mediaQueryXl = window.matchMedia('(min-width: 1280px)')
    let mediaQuery2Xl = window.matchMedia('(min-width: 1536px)')

    function onMediaQueryChange(
      value: SetStateAction<'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined>,
    ) {
      setMatchesSpecific(value)
    }

    const mediaQueryChangeHandler = () => onMediaQueryChange('sm')
    const mediaQueryChangeHandlerMd = () => onMediaQueryChange('md')
    const mediaQueryChangeHandlerLg = () => onMediaQueryChange('lg')
    const mediaQueryChangeHandlerXl = () => onMediaQueryChange('xl')
    const mediaQueryChangeHandler2Xl = () => onMediaQueryChange('2xl')

    mediaQueryChangeHandler()
    mediaQuerySm.addEventListener('change', mediaQueryChangeHandler)
    mediaQueryMd.addEventListener('change', mediaQueryChangeHandlerMd)
    mediaQueryLg.addEventListener('change', mediaQueryChangeHandlerLg)
    mediaQueryXl.addEventListener('change', mediaQueryChangeHandlerXl)
    mediaQuery2Xl.addEventListener('change', mediaQueryChangeHandler2Xl)

    return () => {
      mediaQuerySm.removeEventListener('change', mediaQueryChangeHandler)
      mediaQueryMd.removeEventListener('change', mediaQueryChangeHandlerMd)
      mediaQueryLg.removeEventListener('change', mediaQueryChangeHandlerLg)
      mediaQueryXl.removeEventListener('change', mediaQueryChangeHandlerXl)
      mediaQuery2Xl.removeEventListener('change', mediaQueryChangeHandler2Xl)
    }
  }, [])

  return matchesSpecific
}
