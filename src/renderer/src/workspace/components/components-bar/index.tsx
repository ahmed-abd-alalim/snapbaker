import './componentsBar.css'
import { useState, useEffect } from 'react'

// import icon
import { BsBoxSeam } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import { MdOutlineAdd } from 'react-icons/md'

const Index = (): React.JSX.Element => {
  const dataNum = 4
  const [items, setItems] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const showItems = (): void => {
    setItems([])
    for (let i = 1; i <= dataNum; i++) {
      setTimeout(() => {
        setItems((prev) => [...prev, `ETH #${i}`])
      }, 100 * i)
    }
  }

  const HandlePagesBar = (e: React.MouseEvent, actionName: string): void => {
    if (actionName === 'off') {
      document.documentElement.setAttribute('components-bar', actionName)
      setIsOpen(false)
    } else {
      if (!isOpen) {
        e.stopPropagation()
        document.documentElement.setAttribute('components-bar', actionName)
        setIsOpen(true)
        showItems()
      }
    }
  }

  useEffect(() => {
    document.documentElement.removeAttribute('pages-bar')
  }, [])

  return (
    <section id="componentsBar">
      <div className="bar_content">
        <div
          className={`navbar_card ${!isOpen && 'active'}`}
          onClick={(e) => HandlePagesBar(e, 'on')}
        >
          <BsBoxSeam className="layer_icon" />
          {isOpen ? <span className="bar-name">components</span> : null}
          {isOpen ? (
            <IoClose className="close_icon" onClick={(e) => HandlePagesBar(e, 'off')} />
          ) : null}
        </div>
        <div className="page_layers">
          {isOpen && (
            <>
              {items.map((_, i) => (
                <div className="page_card" key={i}></div>
              ))}
              <div className={`add_card ${dataNum % 2 === 0 && 'full_width'}`}>
                <BsBoxSeam className="add_icon" />
                <MdOutlineAdd className="plus_icon" />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Index
