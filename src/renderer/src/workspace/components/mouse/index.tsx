import './mouse.css'

// import context
import { useSettingContext } from '@/context/workspace/setting'

// import icon
import { LuMousePointer2 } from 'react-icons/lu'
import { LiaHandPaper } from 'react-icons/lia'
import { RiZoomInLine, RiZoomOutLine } from 'react-icons/ri'

const Index = (): React.JSX.Element => {
  const { designPanelCursor, setdesignPanelCursor } = useSettingContext()

  return (
    <section id="mouse">
      <div className="mouse_section">
        <RiZoomInLine className="mouse_icon" />
      </div>
      <div
        className={`mouse_section ${designPanelCursor === 'default' && 'active'}`}
        onClick={() => setdesignPanelCursor('default')}
      >
        <LuMousePointer2 className="mouse_icon" />
      </div>
      <div
        className={`mouse_section ${designPanelCursor === 'grab' && 'active'}`}
        onClick={() => setdesignPanelCursor('grab')}
      >
        <LiaHandPaper className="mouse_icon" />
      </div>
      <div className="mouse_section">
        <RiZoomOutLine className="mouse_icon" />
      </div>
    </section>
  )
}

export default Index
