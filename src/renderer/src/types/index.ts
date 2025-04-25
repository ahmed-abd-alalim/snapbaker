// ################
// --> context
// ################
export type props = {
  children: React.ReactNode
}

//<<=== data context types ===>>

export type activeSessionNameType = boolean

export type glopalType = {
  activeSessionName: activeSessionNameType
  setActiveSessionName: React.Dispatch<React.SetStateAction<activeSessionNameType>>
}
