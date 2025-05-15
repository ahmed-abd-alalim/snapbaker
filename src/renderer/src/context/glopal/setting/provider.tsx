import { useState, useEffect } from 'react'
import { GlopalSettingContext } from './context'

// import type
import { props, colorThemeType } from '@/type/glopal'

// import data
import setting from '@storage/setting.json'

// import config
import { app } from '@/config'

export const GlopalSettingProvider = ({ children }: props): React.JSX.Element => {
  const availableThemes = Object.fromEntries(
    app.theme.availableThemes.map((themeName) => [themeName, false])
  )

  const [colorTheme, setColorTheme] = useState<colorThemeType>({
    ...availableThemes,
    [setting.colorTheme ? setting.colorTheme : app.theme.default]: true
  })

  useEffect(() => {
    const getActiveTheme = Object.keys(colorTheme).filter((item) => colorTheme[item] === true)
    document.documentElement.setAttribute('app-theme-color', getActiveTheme[0])

    if ((setting.colorTheme ? setting.colorTheme : app.theme.default) !== getActiveTheme[0]) {
      window.systemFile.WriteFile({ colorTheme: getActiveTheme[0] }, 'setting.json')
    }
  }, [colorTheme])

  return (
    <GlopalSettingContext.Provider
      value={{
        colorTheme,
        setColorTheme
      }}
    >
      {children}
    </GlopalSettingContext.Provider>
  )
}
