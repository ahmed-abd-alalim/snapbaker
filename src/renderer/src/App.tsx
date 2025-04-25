import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'

// pages
import Intro from '@/intro'
import HomeScreen from '@/home-screen'
import Workspace from '@/workspace'

// import Glopal context
import { useGlopalContext } from '@/assets/context'

// import config
import { routes } from '@/config'

function App(): React.JSX.Element {
  const { setActiveSessionName } = useGlopalContext()

  useEffect(() => {
    window.fromBackEnd.notActive((_, data: boolean) => {
      setActiveSessionName(data)
    })
  }, [setActiveSessionName])

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
