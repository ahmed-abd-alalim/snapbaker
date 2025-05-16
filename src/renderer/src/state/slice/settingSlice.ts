import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// import json data
import setting from '@storage/setting.json'
import accountInfo from '@storage/account.json'
import projects from '@storage/projects.json'

// import config
import { app } from '@/config'

// import type
import { projectstDataArrayType, colorThemeType, userInfoType, activeSessionNameType } from '@/type'

// setting state type
export interface SettingState {
  activeSessionName: activeSessionNameType
  colorTheme: colorThemeType
  projectsData: projectstDataArrayType
  account: userInfoType
}

// get all color available Themes
const availableThemes = Object.fromEntries(
  app.theme.availableThemes.map((themeName) => [themeName, false])
)
const colorTheemActive = Object.entries(setting.colorTheme).filter((color) => color[1] === true)

// setting state
const initialState: SettingState = {
  activeSessionName: setting.activeSessionName,
  colorTheme: {
    ...availableThemes,
    [colorTheemActive.length !== 0 ? colorTheemActive[0][0] : app.theme.default]: true
  },
  projectsData: projects,
  account: {
    fName: accountInfo.fName,
    lName: accountInfo.lName,
    img: accountInfo.img
  }
}

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    colorTheme: (state, action: PayloadAction<string>): void => {
      state.colorTheme = { ...availableThemes, [action.payload]: true }
    },
    account: (state, action: PayloadAction<userInfoType>): void => {
      state.account = action.payload
    },
    projectsData: (state, action: PayloadAction<projectstDataArrayType>): void => {
      state.projectsData = action.payload
    },
    activeSessionName: (state, action: PayloadAction<activeSessionNameType>): void => {
      state.activeSessionName = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { colorTheme, account, projectsData, activeSessionName } = settingSlice.actions

export default settingSlice.reducer
