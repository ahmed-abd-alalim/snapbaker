import './pagesBar.css'
import { useState, useEffect } from 'react'

// import context
import { useDataContext } from '@/context/workspace/data'

// import type
import { pageDataType, addCardInputType } from '@/type/workspace'

// import icon
import { BiLayer, BiLayerPlus } from 'react-icons/bi'
import { IoClose, IoSaveOutline } from 'react-icons/io5'
import { PiTrash } from 'react-icons/pi'
import { TbEdit } from 'react-icons/tb'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import { MdClose } from 'react-icons/md'
import { RxRocket } from 'react-icons/rx'

const Index = (): React.JSX.Element => {
  const { pageData, setPageData } = useDataContext()
  const [items, setItems] = useState<pageDataType[]>([])
  const [poageBarIsOpen, setPoageBarIsOpen] = useState<boolean>(false)
  const [addCardIsOpen, setAddCardIsOpen] = useState<boolean>(false)
  const [addCardInput, setAddCardInput] = useState<addCardInputType>({
    inbut: '',
    error: ''
  })

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
      setPoageBarIsOpen(false)
    } else {
      if (!poageBarIsOpen) {
        e.stopPropagation()
        document.documentElement.setAttribute('pages-bar', actionName)
        setPoageBarIsOpen(true)
        showItems()
      }
    }
  }

  const HandleCreatePage = (e: React.MouseEvent): void => {
    e.stopPropagation()

    const allPageName = items.map((page) => page.name)
    const pageTemplet: pageDataType = {
      id: items.length,
      name: addCardInput.inbut,
      pageNameInbut: { isOpen: 0, inbut: '', error: '' }
    }

    const ErrorMessage = (Message: string): void => {
      setAddCardInput((prveData) => ({
        ...prveData,
        error: Message
      }))
    }

    if (addCardInput.inbut) {
      if (!allPageName.includes(addCardInput.inbut)) {
        const newPageData = [...items, pageTemplet]
        setItems(newPageData)
        setPageData(newPageData)
        setAddCardIsOpen(false)
        setAddCardInput({
          inbut: '',
          error: ''
        })
      } else {
        ErrorMessage('this name was used before')
      }
    } else {
      ErrorMessage('input is empty')
    }
  }

  const HandleChangeNamePage = (pageId: number): void => {
    const allPageName = items.map((page) => page.name)
    const pageInfo: pageDataType[] = items.filter((page) => page.id === pageId)

    const ErrorMessage = (Message: string): void => {
      setItems((prveData) =>
        prveData.map((item) =>
          item.id === pageId
            ? {
                ...item,
                pageNameInbut: {
                  ...item.pageNameInbut,
                  error: Message
                }
              }
            : item
        )
      )
    }

    if (pageInfo[0].pageNameInbut.inbut) {
      if (!allPageName.includes(pageInfo[0].pageNameInbut.inbut)) {
        setItems((prveData) =>
          prveData.map((item) =>
            item.id === pageId
              ? {
                  ...item,
                  name: item.pageNameInbut.inbut,
                  pageNameInbut: {
                    inbut: '',
                    isOpen: 0,
                    error: ''
                  }
                }
              : item
          )
        )
        setPageData(items)
      } else {
        ErrorMessage('this name was used before')
      }
    } else {
      ErrorMessage('input is empty')
    }
  }

  const HandleDeletPage = (pageId: number): void => {
    const newPageData = items.filter((page) => page.id !== pageId)
    setItems(newPageData)
    setPageData(newPageData)
  }

  useEffect(() => {
    document.documentElement.removeAttribute('pages-bar')
  }, [])

  return (
    <section id="pagesBar">
      <div className="bar_content">
        <div
          className={`navbar_card ${!poageBarIsOpen && 'active'}`}
          onClick={(e) => HandlePagesBar(e, 'on')}
        >
          <BiLayer className="layer_icon" />
          {poageBarIsOpen ? <span className="bar-name">pages</span> : null}
          {poageBarIsOpen ? (
            <IoClose className="close_icon" onClick={(e) => HandlePagesBar(e, 'off')} />
          ) : null}
        </div>
        <div className="page_layers">
          {poageBarIsOpen && (
            <>
              {items.map((page) => (
                <div className="page_card" key={page.id}>
                  <div className="up_layer">
                    <div
                      className="edit_icon"
                      onClick={() =>
                        setItems((prveData) =>
                          prveData.map((item) =>
                            item.id === page.id
                              ? {
                                  ...item,
                                  pageNameInbut: {
                                    ...item.pageNameInbut,
                                    isOpen: 1
                                  }
                                }
                              : item
                          )
                        )
                      }
                    >
                      <TbEdit />
                    </div>
                    <div className="delet_icon" onClick={() => HandleDeletPage(page.id)}>
                      <PiTrash />
                    </div>
                    <span>{page.name ? page.name : 'noName'}</span>
                    <div className="square_layer">{<HiArrowTopRightOnSquare />}</div>
                  </div>
                  {page.pageNameInbut.isOpen ? (
                    <div className="inbut_layer">
                      <div className="form_box">
                        {page.pageNameInbut.error ? (
                          <div className="error_message">
                            <span>{page.pageNameInbut.error}</span>
                          </div>
                        ) : null}
                        <input
                          type="text"
                          maxLength={18}
                          placeholder="page name"
                          value={page.pageNameInbut.inbut}
                          onChange={(e) =>
                            setItems((prveData) =>
                              prveData.map((item) =>
                                item.id === page.id
                                  ? {
                                      ...item,
                                      pageNameInbut: {
                                        ...item.pageNameInbut,
                                        inbut: e.target.value
                                      }
                                    }
                                  : item
                              )
                            )
                          }
                          autoFocus
                        />
                        <div className="button_box">
                          <button
                            className="cre_button"
                            onClick={() => HandleChangeNamePage(page.id)}
                          >
                            <IoSaveOutline className="button_icon" />
                            save
                          </button>
                          <button
                            className="can_button"
                            onClick={() =>
                              setItems((prveData) =>
                                prveData.map((item) =>
                                  item.id === page.id
                                    ? {
                                        ...item,
                                        pageNameInbut: {
                                          ...item.pageNameInbut,
                                          isOpen: 0
                                        }
                                      }
                                    : item
                                )
                              )
                            }
                          >
                            <MdClose className="button_icon" />
                            cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
              <div className="add_card" onClick={() => setAddCardIsOpen(true)}>
                <BiLayerPlus className="add_icon" />
                {addCardIsOpen ? (
                  <div className="inbut_layer">
                    <div className="form_box">
                      {addCardInput.error ? (
                        <div className="error_message">
                          <span>{addCardInput.error}</span>
                        </div>
                      ) : null}
                      <input
                        type="text"
                        maxLength={18}
                        placeholder="page name"
                        value={addCardInput.inbut}
                        onChange={(e) =>
                          setAddCardInput((prveData) => ({
                            ...prveData,
                            inbut: e.target.value
                          }))
                        }
                        autoFocus
                      />
                      <div className="button_box">
                        <button className="cre_button" onClick={(e) => HandleCreatePage(e)}>
                          <RxRocket className="button_icon" />
                          create
                        </button>
                        <button
                          className="can_button"
                          onClick={(e) => {
                            e.stopPropagation()
                            setAddCardIsOpen(false)
                          }}
                        >
                          <MdClose className="button_icon" />
                          cancel
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Index
