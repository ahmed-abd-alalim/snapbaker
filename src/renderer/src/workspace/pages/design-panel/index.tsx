import './designPanel.css'
import { Mouse, PropertiesPanel } from '../../components'

const Index = (): React.JSX.Element => {
  return (
    <section id="designPanel">
      <Mouse />
      <PropertiesPanel />
    </section>
  )
}

export default Index
