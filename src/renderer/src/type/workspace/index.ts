// ################
// --> context
// ################
export type props = {
  children: React.ReactNode
}

// /<<=== setting context types ===>>
export type appDirectionsType = Partial<{
  designPanel: string
  routingPanel: string
}>

export type designPanelCursorType = string

export type settingType = {
  appDirections: appDirectionsType
  setAppDirections: React.Dispatch<React.SetStateAction<appDirectionsType>>
  designPanelCursor: designPanelCursorType
  setdesignPanelCursor: React.Dispatch<React.SetStateAction<designPanelCursorType>>
}
