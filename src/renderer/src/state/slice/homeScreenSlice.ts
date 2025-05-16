import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// import type
import { homeScreenDirectionsType, projectFromVisibilityType } from '@/type'

// setting state type
export interface SettingState {
  directions: homeScreenDirectionsType
  projectFromVisibility: projectFromVisibilityType
}

// setting state
const initialState: SettingState = {
  directions: {
    home: 'active',
    projects: '',
    setting: ''
  },
  projectFromVisibility: {
    projects: 0,
    new: 0
  }
}

export const homeScreenSlice = createSlice({
  name: 'homeScreen',
  initialState,
  reducers: {
    directions: (state, action: PayloadAction<homeScreenDirectionsType>): void => {
      state.directions = action.payload
    },
    projectFromVisibility: (state, action: PayloadAction<projectFromVisibilityType>): void => {
      state.projectFromVisibility = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { directions, projectFromVisibility } = homeScreenSlice.actions

export default homeScreenSlice.reducer
