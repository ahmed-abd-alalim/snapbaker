import './navbar.css'

// import icon
import { IoClose } from 'react-icons/io5'
import { MdOutlineMaximize } from 'react-icons/md'

const Index = (): React.JSX.Element => {
  const handleMinimize: () => void = () => {
    window.controlar.minimizeWindow()
  }
  const handleClose: () => void = () => {
    window.controlar.closeWindow()
  }

  return (
    <section id="navebsrStart" className="d-flex justify-content-end">
      <div className="controlaer_buttons">
        <div onClick={handleMinimize} className="minimize">
          <MdOutlineMaximize className="con_icon" />
        </div>
        <div onClick={handleClose} className="close">
          <IoClose className="con_icon" />
        </div>
      </div>
    </section>
  )
}

export default Index
