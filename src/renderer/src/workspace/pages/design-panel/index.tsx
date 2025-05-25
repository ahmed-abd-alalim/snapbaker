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
      <ComponentsEditor />
      <div className="bg_mask" />
      <Mouse />
      <PropertiesPanel />
      <PagesBar />
      <ComponentsBar />
      <ToolBar />
    </section>
  )
}

export default Index
