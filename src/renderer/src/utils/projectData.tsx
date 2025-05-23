import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import state
import { projectsData } from '@/state/slice/settingSlice'
import { RootState } from '@/state'

const ProjectData = (): null => {
  const dispatch = useDispatch()
  const pageData = useSelector((state: RootState) => state.project.pageData)

  // project Data
  const fetchData = (): void => {
    // Send IPC message to Electron backend
    setTimeout(async (): Promise<void> => {
      dispatch(projectsData(await window.homeScreen.getAllProjectsInfo()))
    }, 100)
  }

  useEffect(() => {
    fetchData()
  }, [pageData])
  return null
}

export default ProjectData
