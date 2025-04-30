import './new.css'

// import components
import { ProjectForm } from '@/home-screen/components'

// import context
import { useSettingContext } from '@/context/home-screen/setting'

// import icon
import { IoIosAdd } from 'react-icons/io'

const Index = (): React.JSX.Element => {
  const { appDirections, projectFromVisibility, setProjectFromVisibility } = useSettingContext()

  const HandleCardOpen: () => void = () => {
    setProjectFromVisibility({ new: 1 })
  }

  return (
    <>
      {appDirections.projects && (
        <div
          id="New"
          onClick={HandleCardOpen}
          className="d-flex justify-content-center align-items-center"
        >
          <IoIosAdd className="add_icon" />
        </div>
      )}
      {projectFromVisibility.new ? <ProjectForm /> : ''}
    </>
  )
}

export default Index
