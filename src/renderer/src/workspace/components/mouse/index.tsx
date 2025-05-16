import './mouse.css'
import { useSelector, useDispatch } from 'react-redux'

// import state
import { RootState } from '@/state'
import { designPanelCursor } from '@/state/slice/workspaceSlice'

// import icon
import { LuMousePointer2 } from 'react-icons/lu'
import { LiaHandPaper } from 'react-icons/lia'
import { RiZoomInLine, RiZoomOutLine } from 'react-icons/ri'

const Index = (): React.JSX.Element => {
  const dispatch = useDispatch()
  const PanelCursor = useSelector((state: RootState) => state.workspace.designPanelCursor)

  return (
    <section id="mouse">
      <div className="mouse_section">
        <RiZoomInLine className="mouse_icon" />
      </div>
      <div
        className={`mouse_section ${PanelCursor === 'default' && 'active'}`}
        onClick={() => dispatch(designPanelCursor('default'))}
      >
        <LuMousePointer2 className="mouse_icon" />
      </div>
      <div
        className={`mouse_section ${PanelCursor === 'grab' && 'active'}`}
        onClick={() => dispatch(designPanelCursor('grab'))}
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
