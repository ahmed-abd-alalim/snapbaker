// ################
// --> context
// ################
export type props = {
  children: React.ReactNode
}

//<<=== setting context types ===>>
export type colorThemeType = Partial<{
  dark: boolean
  white: boolean
  blue: boolean
}>

export type settingType = {
  colorTheme: colorThemeType
  setColorTheme: React.Dispatch<React.SetStateAction<colorThemeType>>
}
