import './navbar.css'
import { useState, useEffect } from 'react'

// import icon
import { IoClose, IoPhonePortraitOutline } from 'react-icons/io5'
import { HiOutlineSquare2Stack } from 'react-icons/hi2'
import { MdOutlineMaximize } from 'react-icons/md'
import { SlScreenTablet } from 'react-icons/sl'
import { RxLaptop } from 'react-icons/rx'

// import logo
import Logo from '@/logo'

const Index = (): React.JSX.Element => {
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  const handleClose: () => void = () => {
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
      <div className="logo_section">
        <Logo />
      </div>
      <div className="internet_index">
        <div className={`circle ${isOnline && 'active '}`} />
        <span>: internet</span>
      </div>
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
      <div className="page_name">
        <span>Page name:</span>
        <span className="name">home</span>
      </div>
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
    </nav>
  )
}

export default Index
