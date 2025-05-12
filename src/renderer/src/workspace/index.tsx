// import layouts
import { Navbar, MenuBar, Footer } from './layouts'

// import pages
import Pages from './pages'

// import context
import { SettingProvider } from '@/context/workspace/setting'
import { DataProvider } from '@/context/workspace/data'

const Index = (): React.JSX.Element => {
  return (
    <SettingProvider>
      <DataProvider>
        <Navbar />
        <div>
          <div className="d-flex justify-content-start">
            <MenuBar />
            <Pages />
          </div>
        </div>
        <Footer />
      </DataProvider>
    </SettingProvider>
  )
}

export default Index
