import './menubar.css'

// import icon
import { IoSettingsOutline } from 'react-icons/io5'
import { VscExtensions } from 'react-icons/vsc'
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
          <VscExtensions
            className={`menubar_button ${appDirections.designPanel && 'active'}`}
            onClick={() => setAppDirections({ designPanel: 'active' })}
          />
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
