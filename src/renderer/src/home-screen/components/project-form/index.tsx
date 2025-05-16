import './appForm.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import state
import { RootState } from '@/state'
import { projectsData, activeSessionName } from '@/state/slice/settingSlice'
import { projectFromVisibility } from '@/state/slice/homeScreenSlice'

// import types
import { projectFromOpjectType, droPMenuVisibilityType } from '@/type'

// import icon
import { MdClose } from 'react-icons/md'
import { IoSaveOutline } from 'react-icons/io5'
import { FaSortDown, FaReact } from 'react-icons/fa'
import { FaBootstrap } from 'react-icons/fa6'
import { RxRocket } from 'react-icons/rx'

const Index = ({ data }: { data?: projectFromOpjectType }): React.JSX.Element => {
  const dispatch = useDispatch()
  const projectsinfo = useSelector((state: RootState) => state.setting.projectsData)
  const activeSession = useSelector((state: RootState) => state.setting.activeSessionName)
  const projectFrom = useSelector((state: RootState) => state.homeScreen.projectFromVisibility)

  const today = new Date()
  const newFormTemplet: projectFromOpjectType = {
    projectDate: `${today.getDate()} / ${today.getMonth()} / ${today.getFullYear()}`,
    siteName: '',
    cssFram: '',
    jsFram: '',
    themeColor: 'white',
    pagesNum: 1
  }

  const [inbutDtata, setInbutData] = useState<projectFromOpjectType>(newFormTemplet)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [droPMenuVisibility, setDroPMenuVisibility] = useState<droPMenuVisibilityType>({
    cssMenu: 0,
    jsMenu: 0,
    themeColor: 0
  })

  const cssFrameworksMenu = [
    {
      name: 'Bootstrap',
      icon: FaBootstrap
    }
  ]

  const jsFrameworksMenu = [
    {
      name: 'React',
      icon: FaReact
    }
  ]

  const themeColor = [
    {
      name: 'White',
      color: 'rgba(255, 255, 255)'
    },
    {
      name: 'Dark',
      color: '#171717'
    }
  ]

  const HandleCardClose: () => void = () => {
    setInbutData(newFormTemplet)
    dispatch(
      projectFromVisibility({
        projects: 0,
        new: 0
      })
    )
  }

  const HandleCreatButton: () => void = () => {
    if (inbutDtata.siteName) {
      const uniqueName = projectsinfo.filter((item) => item.siteName === inbutDtata.siteName)
      if (!uniqueName.length) {
        dispatch(projectsData([...projectsinfo, inbutDtata]))
        HandleCardClose()
        if (!activeSession) {
          dispatch(activeSessionName(inbutDtata.siteName!))
          window.newWindow.openNewWindow()
          window.systemFile.newApp(inbutDtata)
        }
      } else {
        setErrorMessage('This name is already used change it.')
      }
    }
  }

  const HandelSaveButton: () => void = () => {
    const updateData = projectsinfo.filter((item) => item.siteName !== data!.siteName)
    const uniqueName = updateData.filter((item) => item.siteName === inbutDtata.siteName)
    if (!uniqueName.length) {
      dispatch(projectsData([...updateData, inbutDtata]))
      window.systemFile.updateApp(inbutDtata, data!)
      HandleCardClose()
    } else {
      setErrorMessage('This name is already used change it.')
    }
  }

  const HandledropMenuVisibility: (idName: string) => void = (idName) => {
    const dropDownMenu: HTMLElement | null = document.querySelector(`#${idName}`)
    if (getComputedStyle(dropDownMenu!).display === 'none') {
      dropDownMenu!.style.display = 'block'
      idName.includes('css')
        ? setDroPMenuVisibility((prvData) => ({
            ...prvData,
            cssMenu: 1
          }))
        : idName.includes('js')
          ? setDroPMenuVisibility((prvData) => ({
              ...prvData,
              jsMenu: 1
            }))
          : setDroPMenuVisibility((prvData) => ({
              ...prvData,
              themeColor: 1
            }))

      setTimeout(() => {
        const handleClick: () => void = () => {
          dropDownMenu!.style.display = 'none'
          idName.includes('css')
            ? setDroPMenuVisibility((prvData) => ({
                ...prvData,
                cssMenu: 0
              }))
            : idName.includes('js')
              ? setDroPMenuVisibility((prvData) => ({
                  ...prvData,
                  jsMenu: 0
                }))
              : setDroPMenuVisibility((prvData) => ({
                  ...prvData,
                  themeColor: 0
                }))
          document.removeEventListener('click', handleClick)
        }
        document.addEventListener('click', handleClick)
      }, 100)
    }
  }

  useEffect(() => {
    if (data) {
      setInbutData({ ...data })
    }
  }, [data])

  return (
    <section id="AppForm">
      <form className="edit_card">
        <div className="inbut_section h-75">
          <div className={`error_message ${errorMessage && 'on'}`}>
            <div className="triangle_left" />
            <span>{errorMessage}</span>
          </div>
          <div className="inbut_box">
            <input
              type="text"
              placeholder="Enter the site name"
              autoFocus
              value={inbutDtata.siteName}
              onChange={(e) =>
                setInbutData((prevData) => ({
                  ...prevData,
                  siteName: e.target.value
                }))
              }
            />
          </div>
          <div className="inbut_box">
            <div className="drop_down_section">
              <div className="up_layer" onClick={() => HandledropMenuVisibility('cssFramework')}>
                {droPMenuVisibility.cssMenu ? (
                  <FaSortDown className="down_icon reverse mt-2" />
                ) : (
                  <FaSortDown className="down_icon" />
                )}
              </div>
              <input
                type="text"
                placeholder="CSS Framework"
                value={inbutDtata.cssFram}
                onChange={(e) =>
                  setInbutData((prevData) => ({
                    ...prevData,
                    cssFram: e.target.value
                  }))
                }
              />
              <div className="drop_down_menu" id="cssFramework">
                {cssFrameworksMenu.map((item, index) => {
                  const FrameworkIcon = item.icon
                  return (
                    <div
                      key={index}
                      className="inbut_item"
                      onClick={() =>
                        setInbutData((prevData) => ({
                          ...prevData,
                          cssFram: item.name
                        }))
                      }
                    >
                      <FrameworkIcon className="fram_icon" />
                      <span>{item.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="drop_down_section">
              <div className="up_layer" onClick={() => HandledropMenuVisibility('jsFramework')}>
                {droPMenuVisibility.jsMenu ? (
                  <FaSortDown className="down_icon reverse mt-2" />
                ) : (
                  <FaSortDown className="down_icon" />
                )}
              </div>
              <input
                type="text"
                placeholder="JS Framework"
                value={inbutDtata.jsFram}
                onChange={(e) =>
                  setInbutData((prevData) => ({
                    ...prevData,
                    jsFram: e.target.value
                  }))
                }
              />
              <div className="drop_down_menu" id="jsFramework">
                {jsFrameworksMenu.map((item, index) => {
                  const FrameworkIcon = item.icon
                  return (
                    <div
                      key={index}
                      className="inbut_item"
                      onClick={() =>
                        setInbutData((prevData) => ({
                          ...prevData,
                          jsFram: item.name
                        }))
                      }
                    >
                      <FrameworkIcon className="fram_icon" />
                      <span>{item.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="inbut_box">
            <div className="drop_down_section w-100">
              <div className="up_layer" onClick={() => HandledropMenuVisibility('themeColor')}>
                {droPMenuVisibility.themeColor ? (
                  <FaSortDown className="down_icon reverse mt-2" />
                ) : (
                  <FaSortDown className="down_icon" />
                )}
              </div>
              <input
                type="text"
                placeholder="Color theme"
                value={inbutDtata.themeColor}
                onChange={(e) =>
                  setInbutData((prevData) => ({
                    ...prevData,
                    themeColor: e.target.value
                  }))
                }
              />
              <div className="drop_down_menu" id="themeColor">
                {themeColor.map((item, index) => (
                  <div
                    key={index}
                    className="inbut_item"
                    onClick={() =>
                      setInbutData((prevData) => ({
                        ...prevData,
                        themeColor: item.name
                      }))
                    }
                  >
                    <div className="box_color" style={{ backgroundColor: `${item.color}` }} />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="buttons_section h-25">
          {projectFrom.new ? (
            <div className="submit_but" onClick={HandleCreatButton}>
              <RxRocket className="button_icon" />
              <span>create</span>
            </div>
          ) : (
            <div className="submit_but" onClick={HandelSaveButton}>
              <IoSaveOutline className="button_icon" />
              <span>save</span>
            </div>
          )}
          <div className="cancel_but" onClick={HandleCardClose}>
            <MdClose className="button_icon" />
            <span>cancel</span>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Index
