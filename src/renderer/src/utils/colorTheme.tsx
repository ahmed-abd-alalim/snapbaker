import { useEffect } from 'react'
import { useSelector } from 'react-redux'

// import state
import type { RootState } from '@/state'

const ColorTheme = (): null => {
  // app color theme
  const colorTheme = useSelector((state: RootState) => state.setting.colorTheme)

  useEffect(() => {
    document.documentElement.setAttribute('app-theme-color', colorTheme)
  }, [colorTheme])
  return null
}

export default ColorTheme
