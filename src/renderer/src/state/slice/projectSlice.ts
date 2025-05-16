import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// import type
import { pageDataType, componentDataType } from '@/type'

// setting state type
export interface SettingState {
  pageData: pageDataType[]
  componentData: componentDataType[]
}

// setting state
const initialState: SettingState = {
  pageData: [],
  componentData: []
}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    pageData: (state, action: PayloadAction<pageDataType[]>): void => {
      state.pageData = action.payload
    },
    componentData: (state, action: PayloadAction<componentDataType[]>): void => {
      state.componentData = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { pageData, componentData } = projectSlice.actions

export default projectSlice.reducer
