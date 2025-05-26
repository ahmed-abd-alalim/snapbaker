import './toolsBar.css'

// import icon
import { IoImageOutline } from 'react-icons/io5'
import { RxText } from 'react-icons/rx'
import { LuShapes } from 'react-icons/lu'

const Index = (): React.JSX.Element => {
  return (
    <section id="toolsBar">
      <div className="tool_section">
        <IoImageOutline />
      </div>
      <div className="tool_section">
        <RxText />
      </div>
      <div className="tool_section">
        <LuShapes />
      </div>
    </section>
  )
}

export default Index
