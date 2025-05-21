import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// pages
import Intro from '@/intro'
import HomeScreen from '@/home-screen'
import Workspace from '@/workspace'

// import state
import type { RootState } from './state'
import { projectsData } from './state/slice/settingSlice'

// import config
import { routes } from '@/config'

function App(): React.JSX.Element {
  const dispatch = useDispatch()

  // project Data
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      // Send IPC message to Electron backend
      dispatch(projectsData(await window.systemFile.getAllProjectsInfo()))
    }
    fetchData()
  }, [])

  // app color theme
  const colorTheme = useSelector((state: RootState) => state.setting.colorTheme)
  useEffect(() => {
    const getActiveTheme = Object.keys(colorTheme).filter((item) => colorTheme[item] === true)
    document.documentElement.setAttribute('app-theme-color', getActiveTheme[0])
  }, [colorTheme])

  return (
    <div className="app-container">
      <Router>
        <Routes>
          {/* --------Intro Route */}
          <Route path="/" element={<Intro />} />

          {/* --------Home Screen Route*/}
          <Route path={routes.home} element={<HomeScreen />} />

          {/* --------Workspace Route */}
          <Route path={routes.workspace} element={<Workspace />} />

          {/* --------* Route */}
          <Route path="*" element={<Navigate to={routes.home} replace />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
