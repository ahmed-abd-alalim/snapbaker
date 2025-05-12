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

// /<<=== data context types ===>>

export type pageDataType = {
  id: number
  name: string
  pageNameInbut: { isOpen: number; inbut: string; error: string }
}

export type addCardInputType = {
  inbut: string
  error: string
}

export type componentDataType = { id: number }

export type dataType = {
  pageData: pageDataType[]
  setPageData: React.Dispatch<React.SetStateAction<pageDataType[]>>
  componentData: componentDataType[]
  setComponentData: React.Dispatch<React.SetStateAction<componentDataType[]>>
}
