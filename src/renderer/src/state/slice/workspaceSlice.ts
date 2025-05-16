import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// import type
import { workspaceDirectionsType, designPanelCursorType } from '@/type'

// setting state type
export interface SettingState {
  directions: workspaceDirectionsType
  designPanelCursor: designPanelCursorType
}

// setting state
const initialState: SettingState = {
  directions: {
    designPanel: 'active',
    routingPanel: ''
  },
  designPanelCursor: 'default'
}

export const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    directions: (state, action: PayloadAction<workspaceDirectionsType>): void => {
      state.directions = action.payload
    },
    designPanelCursor: (state, action: PayloadAction<designPanelCursorType>): void => {
      state.designPanelCursor = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { directions, designPanelCursor } = workspaceSlice.actions

export default workspaceSlice.reducer
