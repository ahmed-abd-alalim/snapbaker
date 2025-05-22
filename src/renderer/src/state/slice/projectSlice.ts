import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// import type
import { pageDataType, componentDataType } from '@/type'

// setting state type
export interface SettingState {
  appInfo: object
  pageData: pageDataType[]
  componentData: componentDataType[]
}

// setting state
const initialState: SettingState = {
  appInfo: {},
  pageData: [],
  componentData: []
}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    appInfo: (state, action: PayloadAction<object>): void => {
      state.appInfo = action.payload
    },
    pageData: (state, action: PayloadAction<pageDataType[]>): void => {
      state.pageData = action.payload
    },
    componentData: (state, action: PayloadAction<componentDataType[]>): void => {
      state.componentData = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { appInfo, pageData, componentData } = projectSlice.actions

export default projectSlice.reducer
