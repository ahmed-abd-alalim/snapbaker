import './pages.css'
import { useSelector } from 'react-redux'

// import state
import { RootState } from '@/state'

// import Pages
import Home from './home'
import Projects from './projects'
import Setting from './setting'

const Index = (): React.JSX.Element => {
  const appDirections = useSelector((state: RootState) => state.homeScreen.directions)

  return (
    <section id="Window">
      {appDirections.home && <Home />}
      {appDirections.projects && <Projects />}
      {appDirections.setting && <Setting />}
    </section>
  )
}

export default Index
