// import layouts
import { Navbar, MenuBar, Mouse, PropertiesPanel, Footer } from './layouts'

// import pages
import { DesignPanel } from './pages'

const Index = (): React.JSX.Element => {
  return (
    <>
      <Navbar />
      <div>
        <div className="d-flex justify-content-start">
          <MenuBar />
          <>
            <DesignPanel />
            <Mouse />
            <PropertiesPanel />
          </>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Index
