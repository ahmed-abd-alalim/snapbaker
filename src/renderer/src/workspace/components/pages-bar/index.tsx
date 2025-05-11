import './pagesBar.css'
import { useState, useEffect } from 'react'

// import icon
import { BiLayer, BiLayerPlus } from 'react-icons/bi'
import { IoClose } from 'react-icons/io5'
import { PiTrash } from 'react-icons/pi'
import { TbEdit } from 'react-icons/tb'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

const Index = (): React.JSX.Element => {
  const [pageData, setPageData] = useState<{ id: number; name: string }[]>([
    { id: 0, name: 'home' },
    { id: 1, name: 'about us' },
    { id: 2, name: 'contact' }
  ])
  const [items, setItems] = useState<{ id: number; name: string }[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const showItems = (): void => {
    setItems([])
    for (let i = 1; i <= pageData.length; i++) {
      setTimeout(() => {
        setItems((prev) => [...prev, pageData[i - 1]])
      }, 40 * i)
    }
  }

  const HandlePagesBar = (e: React.MouseEvent, actionName: string): void => {
    if (actionName === 'off') {
      document.documentElement.setAttribute('pages-bar', actionName)
      setIsOpen(false)
    } else {
      if (!isOpen) {
        e.stopPropagation()
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
        <div
          className={`navbar_card ${!isOpen && 'active'}`}
          onClick={(e) => HandlePagesBar(e, 'on')}
        >
          <BiLayer className="layer_icon" />
          {isOpen ? <span className="bar-name">pages</span> : null}
          {isOpen ? (
            <IoClose className="close_icon" onClick={(e) => HandlePagesBar(e, 'off')} />
          ) : null}
        </div>
        <div className="page_layers">
          {isOpen && (
            <>
              {items.map((page) => (
                <div className="page_card" key={page.id}>
                  <div className="up_layer">
                    <div className="edit_icon">
                      <TbEdit />
                    </div>
                    <div className="delet_icon">
                      <PiTrash />
                    </div>
                    <span>{page.name}</span>
                    <div className="square_layer">{<HiArrowTopRightOnSquare />}</div>
                  </div>
                </div>
              ))}
              <div className="add_card">
                <BiLayerPlus className="add_icon" />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Index
