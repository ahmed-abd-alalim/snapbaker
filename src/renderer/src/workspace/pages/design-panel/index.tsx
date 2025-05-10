import './designPanel.css'

// import components
import { Mouse, PropertiesPanel, PagesBar } from '../../components'

const Index = (): React.JSX.Element => {
  return (
    <section id="designPanel">
      <div className="bg_mask" />
      <Mouse />
      <PropertiesPanel />
      <PagesBar />
    </section>
  )
}

export default Index
