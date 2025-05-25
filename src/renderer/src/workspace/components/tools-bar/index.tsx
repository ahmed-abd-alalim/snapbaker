import './toolsBar.css'
import { useState, useEffect } from 'react'

// import icon
import { MdOutlineDesignServices } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'

const Index = (): React.JSX.Element => {
  const tools = ['', '', '', '']
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const showItems = (): void => {
    setItems([])
    for (let i = 1; i <= tools.length; i++) {
      setTimeout(() => {
        setItems((prev) => [...prev, tools[i - 1]])
      }, 40 * i)
    }
  }

  const HandletoolsBar = (e: React.MouseEvent, actionName: string): void => {
    if (actionName === 'off') {
      document.documentElement.setAttribute('tools-bar', actionName)
      setIsOpen(false)
    } else {
      if (!isOpen) {
        e.stopPropagation()
        document.documentElement.setAttribute('tools-bar', actionName)
        setIsOpen(true)
        showItems()
      }
    }
  }

  useEffect(() => {
    document.documentElement.removeAttribute('tools-bar')
  }, [])

  return (
    <section id="toolsBar">
      <div className="bar_content">
        <div
          className={`navbar_card ${!isOpen && 'active'}`}
          onClick={(e) => HandletoolsBar(e, 'on')}
        >
          <MdOutlineDesignServices className="layer_icon" />
          {isOpen ? <span className="bar-name">tools</span> : null}
          {isOpen ? (
            <IoClose className="close_icon" onClick={(e) => HandletoolsBar(e, 'off')} />
          ) : null}
        </div>
        <div className={`tool_layers ${isOpen && 'mt-spec'}`}>
          {isOpen && (
            <>
              {items.map((tool, _) => (
                <div className="tool_card" key={_}>
                  <div className="up_layer"></div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Index
