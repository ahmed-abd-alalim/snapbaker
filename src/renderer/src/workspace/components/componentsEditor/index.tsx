import './componentsEditor.css'

// import icon
import { IoClose } from 'react-icons/io5'

const Index = (): React.JSX.Element => {
  return (
    <section id="componentsEditor">
      <div className="editor_card">
        <div
          className="close_icon"
          onClick={() => document.documentElement.removeAttribute('componentsEditor')}
        >
          <IoClose />
        </div>
        <div className="work_space"></div>
        <div className="constroler_section"></div>
      </div>
    </section>
  )
}

export default Index
