// import layouts
import { Navbar, MenuBar, Footer } from './layouts'

// import pages
import Pages from './pages'

// import context
import { SettingProvider } from '@/context/workspace/setting'

const Index = (): React.JSX.Element => {
  return (
    <SettingProvider>
      <Navbar />
      <div>
        <div className="d-flex justify-content-start">
          <MenuBar />
          <Pages />
        </div>
      </div>
      <Footer />
    </SettingProvider>
  )
}

export default Index
