//<<======= home screen types =======>>

// color Theme Type
export type colorThemeType = [string, boolean][]

// account type
export type userInfoType = {
  fName: string
  lName: string
  img: string
}

// projects data types
export type projectstDataArrayType = projectFromOpjectType[]

// droPDown Menu Visibility Type
export type droPMenuVisibilityType = {
  cssMenu: number
  jsMenu: number
  themeColor: number
}

// project From Type
export type projectFromOpjectType = Partial<{
  projectDate: string
  siteName: string
  cssFram: string
  jsFram: string
  themeColor: string
  pagesNum: number
}>

// app Directions Type
export type homeScreenDirectionsType = Partial<{
  home: string
  projects: string
  setting: string
}>

// project From Visibility Type
export type projectFromVisibilityType = Partial<{
  projects: number
  new: number
}>

// active Session Name Type
export type activeSessionNameType = string

//<<======= workspace types =======>>

// app Directions Type
export type workspaceDirectionsType = Partial<{
  designPanel: string
  routingPanel: string
}>

// design Panel Cursor Type
export type designPanelCursorType = string

// page Data Type
export type pageDataType = {
  id: number
  name: string
  pageNameInbut: { isOpen: number; inbut: string; error: string }
}

// add Card Input Type
export type addCardInputType = {
  inbut: string
  error: string
}

// component Data Type
export type componentDataType = { id: number }
