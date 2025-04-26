import './appForm.css'
import { useState, useEffect } from 'react'

// import context
import { useDataContext } from '@/home-screen/assets/context/data'
import { useSettingContext } from '@/home-screen/assets/context/setting'

// import types
import { projectFromOpjectType, droPMenuVisibilityType } from '@/home-screen/types'

// import icon
import { MdClose } from 'react-icons/md'
import { IoSaveOutline } from 'react-icons/io5'
import { FaSortDown, FaReact } from 'react-icons/fa'
import { FaBootstrap } from 'react-icons/fa6'
import { RxRocket } from 'react-icons/rx'

const Index = ({ data }: { data?: projectFromOpjectType }): React.JSX.Element => {
  const { projectsData, setProjectsData } = useDataContext()
  const {
    projectFromVisibility,
    setProjectFromVisibility,
    setActiveSessionName,
    activeSessionName
  } = useSettingContext()
  // const navigate = useNavigate()
  const today = new Date()
  const newFormTemplet: projectFromOpjectType = {
    projectDate: `${today.getDate()} / ${today.getMonth()} / ${today.getFullYear()}`,
    siteName: '',
    cssFram: '',
    jsFram: '',
    themeColor: '',
    pagesNum: 0
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
    setProjectFromVisibility({
      projects: 0,
      new: 0
    })
  }

  const HandleCreatButton: () => void = () => {
    const uniqueName = projectsData.filter((item) => item.siteName === inbutDtata.siteName)
    if (!uniqueName.length) {
      setProjectsData((prevData) => [...prevData, inbutDtata])
      HandleCardClose()
      if (!activeSessionName) {
        setActiveSessionName(inbutDtata.siteName!)
        window.newWindow.openNewWindow()
      }
    } else {
      setErrorMessage('This name is already used change it.')
    }
  }

  const HandelSaveButton: () => void = () => {
    const updateData = projectsData.filter((item) => item.siteName !== data!.siteName)
    const uniqueName = updateData.filter((item) => item.siteName === inbutDtata.siteName)
    if (!uniqueName.length) {
      setProjectsData([inbutDtata, ...updateData])
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
            <div className="drop_down_section">
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
            <div className="numper_section">
              <div
                className="spinner"
                onClick={() =>
                  setInbutData((prevData) => ({
                    ...prevData,
                    pagesNum:
                      inbutDtata.pagesNum !== 0 ? inbutDtata.pagesNum!-- : inbutDtata.pagesNum
                  }))
                }
              >
                <span>-</span>
              </div>
              <span>{inbutDtata.pagesNum}</span>
              <div
                className="spinner"
                onClick={() =>
                  setInbutData((prevData) => ({
                    ...prevData,
                    pagesNum:
                      inbutDtata.pagesNum !== 10 ? inbutDtata.pagesNum!++ : inbutDtata.pagesNum
                  }))
                }
              >
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons_section h-25">
          {projectFromVisibility.new ? (
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
