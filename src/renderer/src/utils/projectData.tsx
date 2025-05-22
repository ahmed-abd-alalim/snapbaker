import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// import state
import { projectsData } from '@/state/slice/settingSlice'

const ProjectData = (): null => {
  const dispatch = useDispatch()

  // project Data
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      // Send IPC message to Electron backend
      dispatch(projectsData(await window.homeScreen.getAllProjectsInfo()))
    }
    fetchData()
  }, [])
  return null
}

export default ProjectData
