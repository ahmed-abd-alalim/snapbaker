import './navbar.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

// import state
import { activeSessionName } from '@/state/slice/settingSlice'
import { messageAdd } from '@/state/slice/workspaceSlice'

// import icon
import { IoClose, IoPhonePortraitOutline } from 'react-icons/io5'
import { HiOutlineSquare2Stack } from 'react-icons/hi2'
import { MdOutlineMaximize } from 'react-icons/md'
import { SlScreenTablet } from 'react-icons/sl'
import { RxLaptop } from 'react-icons/rx'

// import logo
import Logo from '@/logo'

const Index = (): React.JSX.Element => {
  const dispatch = useDispatch()
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  const handleClose: () => void = () => {
    dispatch(activeSessionName(''))
    window.controlar.closeWindow()
  }

  const handleMinimize: () => void = () => {
    window.controlar.minimizeWindow()
  }

  const handleMaximize: () => void = () => {
    window.controlar.toggleMaximizeWindow()
  }

  useEffect(() => {
    // Define event handlers
    const handleOnline = (): void => {
      setIsOnline(true)
    }
    const handleOffline = (): void => {
      setIsOnline(false)
      dispatch(messageAdd({ isRead: false, text: 'internet connection off' }))
    }

    // Attach listeners
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Cleanup
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <nav id="navbar">
      <div className="navbar_gred justify-content-start">
        <div className="logo_section">
          <Logo />
        </div>
      </div>
      <div className="navbar_gred justify-content-center">
        <div className="internet_index">
          <div className={`circle ${isOnline && 'active '}`} />
          <span>: internet</span>
        </div>
      </div>
      <div className="navbar_gred justify-content-center">
        <div className="screen_size_bar d-flex justify-content-between align-items-center gap-2">
          <div className="icon_section active">
            <RxLaptop className="device_icon" />
          </div>
          <div className="icon_section">
            <SlScreenTablet className="device_icon" />
          </div>
          <div className="icon_section">
            <IoPhonePortraitOutline className="device_icon" />
          </div>
        </div>
      </div>
      <div className="navbar_gred justify-content-center">
        <div className="page_name">
          <span>Page name :</span>
          <div className="name">
            <span>home</span>
          </div>
        </div>
      </div>
      <div className="navbar_gred justify-content-end">
        <div className="controlaer_buttons">
          <div onClick={handleMinimize} className="icon_style minimize">
            <MdOutlineMaximize className="con_icon" />
          </div>
          <div onClick={handleMaximize} className="icon_style maximize">
            <HiOutlineSquare2Stack className="con_icon" />
          </div>

          <div onClick={handleClose} className="icon_style close">
            <IoClose className="con_icon" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Index
