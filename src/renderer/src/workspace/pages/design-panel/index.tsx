import './designPanel.css'
import { useSelector } from 'react-redux'

// import components
import { Mouse, PropertiesPanel, PagesBar, ComponentsBar } from '../../components'

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
      <Mouse />
      <PropertiesPanel />
      <PagesBar />
      <ComponentsBar />
    </section>
  )
}

export default Index
