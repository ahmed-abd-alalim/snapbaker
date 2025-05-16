import './new.css'
import { useSelector, useDispatch } from 'react-redux'

// import components
import { ProjectForm } from '@/home-screen/components'

// import state
import { RootState } from '@/state'
import { projectFromVisibility } from '@/state/slice/homeScreenSlice'

// import icon
import { IoIosAdd } from 'react-icons/io'

const Index = (): React.JSX.Element => {
  const dispatch = useDispatch()
  const appDirections = useSelector((state: RootState) => state.homeScreen.directions)
  const FromVisibility = useSelector((state: RootState) => state.homeScreen.projectFromVisibility)

  const HandleCardOpen: () => void = () => {
    dispatch(projectFromVisibility({ new: 1 }))
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
      {FromVisibility.new ? <ProjectForm /> : ''}
    </>
  )
}

export default Index
