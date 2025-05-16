import './menubar.css'
import { useSelector, useDispatch } from 'react-redux'

// import icon
import { IoSettingsOutline } from 'react-icons/io5'
import { VscExtensions } from 'react-icons/vsc'
import { RiRouteLine } from 'react-icons/ri'

// import state
import { RootState } from '@/state'
import { directions } from '@/state/slice/workspaceSlice'

const Index = (): React.JSX.Element => {
  const dispatch = useDispatch()
  const appDirections = useSelector((state: RootState) => state.workspace.directions)

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
            onClick={() => dispatch(directions({ designPanel: 'active' }))}
          />
        </>
        <RiRouteLine
          className={`menubar_button ${appDirections.routingPanel && 'active'}`}
          onClick={() => dispatch(directions({ routingPanel: 'active' }))}
        />
      </div>
      <div>
        <IoSettingsOutline className="menubar_button" />
      </div>
    </div>
  )
}

export default Index
