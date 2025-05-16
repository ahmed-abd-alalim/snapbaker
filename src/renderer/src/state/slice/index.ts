import { combineReducers } from 'redux'
import settingReducer from './settingSlice'
import homeScreenReducer from './homeScreenSlice'
import workspaceReducer from './workspaceSlice'
import projectReducer from './projectSlice'

const rootReducer = combineReducers({
  setting: settingReducer,
  homeScreen: homeScreenReducer,
  workspace: workspaceReducer,
  project: projectReducer
})

export default rootReducer
