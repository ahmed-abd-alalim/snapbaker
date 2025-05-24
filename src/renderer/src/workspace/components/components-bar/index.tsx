import './componentsBar.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import  state
import { RootState } from '@/state'
import { componentData } from '@/state/slice/projectSlice'

// import type
import { componentDataType } from '@/type'

// import icon
import { BsBoxSeam } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import { MdOutlineAdd } from 'react-icons/md'
import { PiHandTapThin, PiTrash } from 'react-icons/pi'
import { TbEdit } from 'react-icons/tb'
import { GoArchive, GoBeaker } from 'react-icons/go'

const Index = (): React.JSX.Element => {
  const dispatch = useDispatch()
  const allComponentData = useSelector((state: RootState) => state.project.componentData)
  const [cardPath, setCardPath] = useState<string | null>(null)
  const [items, setItems] = useState<componentDataType[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const showItems = (cardPathData: componentDataType[]): void => {
    setItems([])
    for (let i = 1; i <= cardPathData.length; i++) {
      setTimeout(() => {
        setItems((prev) => [...prev, cardPathData[i - 1]])
      }, 40 * i)
    }
  }

  const HandlePagesBar = (e: React.MouseEvent, actionName: string): void => {
    if (actionName === 'off') {
      document.documentElement.setAttribute('components-bar', actionName)
      setIsOpen(false)
      setCardPath(null)
    } else {
      if (!isOpen) {
        e.stopPropagation()
        document.documentElement.setAttribute('components-bar', actionName)
        setIsOpen(true)
      }
    }
  }

  const HandleAddButtom = (): void => {
    document.documentElement.setAttribute('componentsEditor', 'on')

    const newComponentData = [...items, { id: items.length }]
    setItems(newComponentData)
    dispatch(componentData(newComponentData))
  }

  const HandleDeletButtom = (componentId: number): void => {
    const newComponentData = items.filter((_) => _.id !== componentId)
    setItems(newComponentData)
    dispatch(componentData(newComponentData))
  }

  useEffect(() => {
    if (cardPath !== null) {
      if (cardPath === 'archive') {
        showItems(allComponentData)
      } else if (cardPath === 'current') {
        showItems(allComponentData)
      }
    }
  }, [cardPath])

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
          {isOpen && !cardPath && (
            <>
              <div className="component_card_button" onClick={() => setCardPath('archive')}>
                <GoArchive className="button_icon" />
                <span>Archive</span>
              </div>
              <div className="component_card_button" onClick={() => setCardPath('current')}>
                <GoBeaker className="button_icon" />
                <span>Current</span>
              </div>
            </>
          )}

          {isOpen && cardPath && (
            <>
              {items.map((component) => (
                <div className="component_card" key={component.id}>
                  <div className="up_layer">
                    <div
                      className="edit_icon"
                      onClick={() =>
                        document.documentElement.setAttribute('componentsEditor', 'on')
                      }
                    >
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
