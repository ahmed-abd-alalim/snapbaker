import './mouse.css'

// import icon
import { LuMousePointer2 } from 'react-icons/lu'
import { LiaHandPaper } from 'react-icons/lia'
import { RiZoomInLine, RiZoomOutLine } from 'react-icons/ri'

const Index = (): React.JSX.Element => {
  return (
    <section id="mouse">
      <div className="mouse_section ">
        <RiZoomInLine className="mouse_icon" />
      </div>
      <div className="mouse_section active">
        <LuMousePointer2 className="mouse_icon" />
      </div>
      <div className="mouse_section">
        <LiaHandPaper className="mouse_icon" />
      </div>
      <div className="mouse_section">
        <RiZoomOutLine className="mouse_icon" />
      </div>
    </section>
  )
}

export default Index
