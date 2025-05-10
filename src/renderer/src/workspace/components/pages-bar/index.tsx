import './pagesBar.css'
import { useState, useEffect } from 'react'

// import icon
import { BiLayer } from 'react-icons/bi'
import { IoClose } from 'react-icons/io5'

const Index = (): React.JSX.Element => {
  const [items, setItems] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const showItems = (): void => {
    setItems([])
    for (let i = 1; i <= 10; i++) {
      setTimeout(() => {
        setItems((prev) => [...prev, `ETH #${i}`])
      }, 100 * i)
    }
  }

  const HandlePagesBar = (actionName: string): void => {
    if (actionName === 'off') {
      document.documentElement.setAttribute('pages-bar', actionName)
      setIsOpen(false)
    } else {
      if (!isOpen) {
        document.documentElement.setAttribute('pages-bar', actionName)
        setIsOpen(true)
        showItems()
      }
    }
  }

  useEffect(() => {
    document.documentElement.removeAttribute('pages-bar')
  }, [])

  return (
    <section id="pagesBar">
      <div className="bar_content">
        <div className={`navbar_card ${!isOpen && 'active'}`}>
          <BiLayer className="layer_icon" onClick={() => HandlePagesBar('on')} />
          {isOpen ? <IoClose className="close_icon" onClick={() => HandlePagesBar('off')} /> : null}
        </div>
        <div className="page_layers">
          {isOpen && items.map((_, i) => <div className="page_card" key={i}></div>)}
        </div>
      </div>
    </section>
  )
}

export default Index
