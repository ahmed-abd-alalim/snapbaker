// import Pages
import Pages from './pages'

// import layouts
import { Navbar, Menubar, New } from './layouts'

// import constext
import { DataProvider } from '@/context/home-screen/data'
import { SettingProvider } from '@/context/home-screen/setting'

const Index = (): React.JSX.Element => {
  return (
    <SettingProvider>
      <DataProvider>
        <section id="start" className="d-flex">
          <Menubar />
          <div className="w-100">
            <Navbar />
            <>
              <Pages />
            </>
          </div>
          <New />
        </section>
      </DataProvider>
    </SettingProvider>
  )
}

export default Index
