import './menubar.css'

// import sub window
import { PagesBar } from '@/workspace/components'

// import icon
import { IoSettingsOutline } from 'react-icons/io5'
import { BiLayer } from 'react-icons/bi'
import { RiRouteLine } from 'react-icons/ri'

// import context
import { useSettingContext } from '@/context/workspace/setting'

const Index = (): React.JSX.Element => {
  const { appDirections, setAppDirections } = useSettingContext()

  return (
    <div id="menubar">
      <div className="bar_border">
        <div className="curved_top" />
        <div className="curved_botton" />
      </div>
      <div className="d-flex flex-column align-items-center gap-4">
        <>
          <BiLayer
            className={`menubar_button ${appDirections.designPanel && 'active'}`}
            onClick={() => setAppDirections({ designPanel: 'active' })}
          />
          <PagesBar />
        </>
        <RiRouteLine
          className={`menubar_button ${appDirections.routingPanel && 'active'}`}
          onClick={() => setAppDirections({ routingPanel: 'active' })}
        />
      </div>
      <div>
        <IoSettingsOutline className="menubar_button" />
      </div>
    </div>
  )
}

export default Index
