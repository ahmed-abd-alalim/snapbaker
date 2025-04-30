import './pages.css'

// import setting context
import { useSettingContext } from '@/context/home-screen/setting'

// import Pages
import Home from './home'
import Projects from './projects'
import Setting from './setting'

const Index = (): React.JSX.Element => {
  const { appDirections } = useSettingContext()

  return (
    <section id="Window">
      {appDirections.home && <Home />}
      {appDirections.projects && <Projects />}
      {appDirections.setting && <Setting />}
    </section>
  )
}

export default Index
