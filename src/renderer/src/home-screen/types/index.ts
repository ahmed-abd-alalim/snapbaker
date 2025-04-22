// ################
// --> context
// ################
export type props = {
  children: React.ReactNode
}

//<<=== data context types ===>>
export type projectstDataArrayType = projectFromOpjectType[]

export type userInfoType = {
  fName: string
  lName: string
  img: string
}

export type dataType = {
  projectstData: projectstDataArrayType
  setProjectstData: React.Dispatch<React.SetStateAction<projectstDataArrayType>>
  userInfo: userInfoType
  setUserInfo: React.Dispatch<React.SetStateAction<userInfoType>>
}

//<<=== setting context types ===>>
export type appDirectionsType = Partial<{
  home: string
  projects: string
  setting: string
}>

export type projectFromVisibilityType = Partial<{
  projects: number
  new: number
}>

export type settingType = {
  appDirections: appDirectionsType
  setAppDirections: React.Dispatch<React.SetStateAction<appDirectionsType>>
  projectFromVisibility: projectFromVisibilityType
  setProjectFromVisibility: React.Dispatch<React.SetStateAction<projectFromVisibilityType>>
}

// ################
// --> components types
// ################

export type droPMenuVisibilityType = {
  cssMenu: number
  jsMenu: number
  themeColor: number
}

export type projectFromOpjectType = {
  projectDate: string
  siteName: string
  cssFram: string
  jsFram: string
  themeColor: string
  pagesNum: number
}

// ################
// --> pages types
// ################
export type editUserInfoInbutType = {
  fName: string
  lName: string
  userImg: string
}
