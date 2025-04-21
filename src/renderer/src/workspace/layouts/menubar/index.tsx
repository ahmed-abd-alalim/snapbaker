import './menubar.css'

// import sub window
import { PagesBar } from '@/workspace/components'

// import icon
import { IoSettingsOutline } from 'react-icons/io5'
import { BiLayer } from 'react-icons/bi'
import { RiRouteLine } from 'react-icons/ri'

const Index = (): React.JSX.Element => {
  return (
    <div id="menubar">
      <div className="bar_border">
        <div className="curved_top" />
        <div className="curved_botton" />
      </div>
      <div className="d-flex flex-column align-items-center gap-4">
        <>
          <BiLayer className="menubar_button active" />
          <PagesBar />
        </>
        <RiRouteLine className="menubar_button" />
      </div>
      <div>
        <IoSettingsOutline className="menubar_button" />
      </div>
    </div>
  )
}

export default Index
