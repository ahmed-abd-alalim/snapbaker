import './componentsBar.css'
import { useState, useEffect } from 'react'

// import icon
import { BsBoxSeam } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import { MdOutlineAdd } from 'react-icons/md'
import { PiHandTapThin, PiTrash } from 'react-icons/pi'
import { TbEdit } from 'react-icons/tb'

const Index = (): React.JSX.Element => {
  const [componentData, setComponentData] = useState<{ id: number }[]>([
    { id: 0 },
    { id: 1 },
    { id: 2 }
  ])
  const [items, setItems] = useState<{ id: number }[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const showItems = (): void => {
    setItems([])
    for (let i = 1; i <= items.length; i++) {
      setTimeout(() => {
        setItems((prev) => [...prev, componentData[i - 1]])
      }, 40 * i)
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

  const HandleAddButtom = (): void => {
    setItems([...items, { id: items.length }])
    setComponentData(items)
  }

  const HandleDeletButtom = (componentId: number): void => {
    setItems(items.filter((_) => _.id !== componentId))
    setComponentData(items)
  }

  useEffect(() => {
    document.documentElement.removeAttribute('components-bar')
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
        <div className={`component_layers ${isOpen && 'mt-spec'}`}>
          {isOpen && (
            <>
              {items.map((component) => (
                <div className="component_card" key={component.id}>
                  <div className="up_layer">
                    <div className="edit_icon">
                      <TbEdit />
                    </div>
                    <div className="delet_icon" onClick={() => HandleDeletButtom(component.id)}>
                      <PiTrash />
                    </div>
                    <div className="circle_layer">
                      <PiHandTapThin />
                    </div>
                  </div>
                </div>
              ))}
              <div
                className={`add_card ${items.length % 2 === 0 && 'full_width'}`}
                onClick={HandleAddButtom}
              >
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
