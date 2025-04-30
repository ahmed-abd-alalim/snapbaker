// ################
// --> context
// ################
export type props = {
  children: React.ReactNode
}

//<<=== setting context types ===>>
export type colorThemeType = Partial<{
  white: boolean
  dark: boolean
  blue: boolean
}>

export type settingType = {
  colorTheme: colorThemeType
  setColorTheme: React.Dispatch<React.SetStateAction<colorThemeType>>
}
