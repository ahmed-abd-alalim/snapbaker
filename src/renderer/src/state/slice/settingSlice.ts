import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// import json data
import setting from '@storage/setting.json'
import accountInfo from '@storage/account.json'

// import config
import { app } from '@/config'

// import type
import { projectstDataArrayType, userInfoType, activeSessionNameType } from '@/type'

// setting state type
export interface SettingState {
  activeSessionName: activeSessionNameType
  colorTheme: string
  projectsData: projectstDataArrayType
  account: userInfoType
}

// setting state
const initialState: SettingState = {
  activeSessionName: '',
  colorTheme: setting.colorTheme.length !== 0 ? setting.colorTheme : app.theme.default,
  projectsData: [],
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
      state.colorTheme = action.payload
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
