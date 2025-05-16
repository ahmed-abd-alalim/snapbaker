// import Pages
import Pages from './pages'

// import layouts
import { Navbar, Menubar, New } from './layouts'

const Index = (): React.JSX.Element => {
  return (
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
  )
}

export default Index
