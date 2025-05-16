import './menubar.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import state
import { RootState } from '@/state'
import { directions } from '@/state/slice/homeScreenSlice'

// import icon
import { FiMenu } from 'react-icons/fi'
import { HiWindow, HiOutlineWindow } from 'react-icons/hi2'
import { IoSettingsOutline, IoSettingsSharp, IoHomeOutline, IoHome } from 'react-icons/io5'
import { LuChevronsLeft } from 'react-icons/lu'
import { CiUser } from 'react-icons/ci'

const Index = (): React.JSX.Element => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const userInfo = useSelector((state: RootState) => state.setting.account)
  const appDirections = useSelector((state: RootState) => state.homeScreen.directions)

  const HandelMenuCloseIcon: (orderName: string) => void = (orderName) => {
    if (orderName === 'open') {
      document.documentElement.setAttribute('menu-size-lg', 'lg')
      setIsOpen(true)
    } else {
      document.documentElement.removeAttribute('menu-size-lg')
      setIsOpen(false)
    }
  }

  return (
    <section id="startMenubar">
      {isOpen && (
        <div className="close_menubar" onClick={() => HandelMenuCloseIcon('close')}>
          <LuChevronsLeft className="close_icon" />
        </div>
      )}
      <div className="up_icons h-75">
        <div onClick={() => HandelMenuCloseIcon('open')} className="icon_box_menu ">
          <FiMenu className="bar_icon" />
        </div>
        <div
          className={`icon_box ${appDirections.home}`}
          onClick={() => dispatch(directions({ home: 'active' }))}
        >
          {appDirections.home ? (
            <IoHome className="bar_icon" />
          ) : (
            <IoHomeOutline className="bar_icon" />
          )}
          <span>Home</span>
        </div>
        <div
          className={`icon_box ${appDirections.projects}`}
          onClick={() => dispatch(directions({ projects: 'active' }))}
        >
          {appDirections.projects ? (
            <HiWindow className="bar_icon" />
          ) : (
            <HiOutlineWindow className="bar_icon" />
          )}
          <span>Projects</span>
        </div>
      </div>
      <div className="h-25 d-flex flex-column justify-content-end">
        {userInfo.fName && (
          <div className="icon_box ignore">
            {userInfo.img ? (
              <div className="user_img">
                <img src={userInfo.img} alt={userInfo.fName} width={'100%'} />
              </div>
            ) : (
              <div className="user_img">
                <CiUser className="user_icon" />
              </div>
            )}

            <span>{userInfo.fName}</span>
          </div>
        )}
        <div
          className={`icon_box ${appDirections.setting}`}
          onClick={() => dispatch(directions({ setting: 'active' }))}
        >
          {appDirections.setting ? (
            <IoSettingsSharp className="bar_icon" />
          ) : (
            <IoSettingsOutline className="bar_icon" />
          )}
          <span>Setting</span>
        </div>
      </div>
    </section>
  )
}

export default Index
