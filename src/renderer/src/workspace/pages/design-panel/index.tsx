import './designPanel.css'

// import components
import { Mouse, PropertiesPanel, PagesBar, ComponentsBar } from '../../components'

// import context
import { useSettingContext } from '@/context/workspace/setting'

const Index = (): React.JSX.Element => {
  const { designPanelCursor } = useSettingContext()

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
