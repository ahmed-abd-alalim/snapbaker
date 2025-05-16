import { useSelector } from 'react-redux'

// import page
import DesignPanel from './design-panel'
import RoutingPanel from './routing-panel'

// import state
import { RootState } from '@/state'

const Index = (): React.JSX.Element => {
  const appDirections = useSelector((state: RootState) => state.workspace.directions)

  return (
    <>
      {appDirections.designPanel && <DesignPanel />}
      {appDirections.routingPanel && <RoutingPanel />}
    </>
  )
}

export default Index
