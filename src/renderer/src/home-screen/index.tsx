// import Pages
import Pages from './pages'

// import layouts
import { Navbar, Menubar, New } from './layouts'

// import constext
import { DataProvider } from '@/home-screen/assets/context/data'
import { SettingProvider } from '@/home-screen/assets/context/setting'

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
