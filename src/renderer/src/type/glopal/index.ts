// import config
import { app } from '@/config'

// ################
// --> context
// ################
export type props = {
  children: React.ReactNode
}

//<<=== setting context types ===>>

// Create a type from the array
type Keys = (typeof app.theme.availableThemes)[number]

// Create the object type
export type colorThemeType = Partial<{
  [K in Keys]: boolean
}>

export type settingType = {
  colorTheme: colorThemeType
  setColorTheme: React.Dispatch<React.SetStateAction<colorThemeType>>
}
