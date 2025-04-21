import './footer.css'

// import icon
import { FaRegBell } from 'react-icons/fa'

const Index = (): React.JSX.Element => {
  return (
    <footer id="footer">
      <div>#</div>
      <div className="notfcation_icon">
        <FaRegBell className="bell_icon" />
      </div>
    </footer>
  )
}

export default Index
