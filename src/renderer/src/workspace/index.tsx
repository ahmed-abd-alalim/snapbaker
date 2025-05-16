// import layouts
import { Navbar, MenuBar, Footer } from './layouts'

// import pages
import Pages from './pages'

const Index = (): React.JSX.Element => {
  return (
    <>
      <Navbar />
      <div>
        <div className="d-flex justify-content-start">
          <MenuBar />
          <Pages />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Index
