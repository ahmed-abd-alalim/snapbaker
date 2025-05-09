// import page
import DesignPanel from './design-panel'
import RoutingPanel from './routing-panel'

// import context
import { useSettingContext } from '@/context/workspace/setting'

const Index = (): React.JSX.Element => {
  const { appDirections } = useSettingContext()

  return (
    <>
      {appDirections.designPanel && <DesignPanel />}
      {appDirections.routingPanel && <RoutingPanel />}
    </>
  )
}

export default Index
