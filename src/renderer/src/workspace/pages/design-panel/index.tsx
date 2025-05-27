import './designPanel.css'
import { useSelector } from 'react-redux'

// import components
import {
  Mouse,
  PropertiesPanel,
  ToolBar,
  PagesBar,
  ComponentsBar,
  ComponentsEditor
} from '../../components'

// import state
import { RootState } from '@/state'

const Index = (): React.JSX.Element => {
  const designPanelCursor = useSelector((state: RootState) => state.workspace.designPanelCursor)
  return (
    <section
      id="designPanel"
      style={{
        cursor: designPanelCursor
      }}
    >
      <div className="bg_mask" />
      <div className="edit_paper"></div>
      <ComponentsEditor />
      <Mouse />
      <PropertiesPanel />
      <PagesBar />
      <ComponentsBar />
      <ToolBar />
    </section>
  )
}

export default Index
