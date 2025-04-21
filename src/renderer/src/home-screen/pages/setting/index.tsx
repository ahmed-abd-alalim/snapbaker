import './setting.css'
import { useEffect, useState } from 'react'

// import context
import { useDataContext } from '@/home-screen/assets/context/data'

// import type
import { editUserInfoInbutType } from '@/home-screen/types'

// import icon
import { AiFillEdit, AiOutlineEdit } from 'react-icons/ai'
import { CiUser } from 'react-icons/ci'
import { LiaSaveSolid } from 'react-icons/lia'
import { IoIosAdd } from 'react-icons/io'

const Index = (): React.JSX.Element => {
  const { userInfo, setUserInfo } = useDataContext()
  const [editCard, setEditCard] = useState<number>(0)
  const [editUserInfoInbut, setEditUserInfoInbut] = useState<editUserInfoInbutType>({
    fName: '',
    lName: '',
    userImg: ''
  })

  const handleSelect = async (): Promise<void> => {
    const base64 = await window.userImg.getPath()
    if (base64)
      setEditUserInfoInbut((prevData) => ({
        ...prevData,
        userImg: base64
      }))
  }

  useEffect(() => {
    if (editCard) {
      document.documentElement.setAttribute('account-edit-sction', 'on')
    } else {
      document.documentElement.removeAttribute('account-edit-sction')
    }
  }, [editCard])

  return (
    <section id="Setting">
      <div className="container">
        <div className="topic_section account">
          <div className="topic_name mb-2">
            <span>Account</span>
          </div>
          <div className="row">
            <div className="col-9 p-0 d-flex gap-2">
              <div className="img_box">
                {userInfo.avatar ? (
                  <img src={userInfo.avatar} alt={userInfo.name} width={'100%'} />
                ) : (
                  <CiUser className="user_img" />
                )}
              </div>
              <div className="user_data_box">
                <span className="user_name">{userInfo.name}</span>
              </div>
            </div>
            <div className="col-3 p-0 d-flex align-items-center justify-content-center">
              <div
                className={`edit_button ${editCard && 'checked'}`}
                onClick={() => setEditCard(editCard === 0 ? 1 : 0)}
              >
                {editCard ? (
                  <AiFillEdit className="edit_icon" />
                ) : (
                  <AiOutlineEdit className="edit_icon" />
                )}
                <span>edit</span>
              </div>
            </div>
          </div>
          <div className="account_edit_sction">
            <div className="form_box">
              <div className="w-100 h-75 d-flex  justify-content-around align-items-center">
                <div className="user_img_box">
                  <div className="add_layer" onClick={handleSelect}>
                    <IoIosAdd className="add_icon" />
                  </div>
                  {editUserInfoInbut.userImg ? (
                    <img src={editUserInfoInbut.userImg} alt={userInfo.name} width={'100%'} />
                  ) : userInfo.avatar ? (
                    <img src={userInfo.avatar} alt={userInfo.name} width={'100%'} />
                  ) : (
                    <CiUser className="user_icon" />
                  )}
                </div>
                <div>
                  <div className="user_name_box">
                    <input
                      type="text"
                      placeholder="Enter frist name"
                      value={editUserInfoInbut.fName}
                      onChange={(e) =>
                        setEditUserInfoInbut((prveData) => ({
                          ...prveData,
                          fName: e.target.value
                        }))
                      }
                    />
                  </div>
                  <div className="user_name_box mt-1">
                    <input
                      type="text"
                      placeholder="Enter last name"
                      value={editUserInfoInbut.lName}
                      onChange={(e) =>
                        setEditUserInfoInbut((prveData) => ({
                          ...prveData,
                          lName: e.target.value
                        }))
                      }
                    />
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="submit_button d-flex gap-1"
                  onClick={() => {
                    setUserInfo((prveData) => ({
                      ...prveData,
                      name: `${editUserInfoInbut.fName} ${editUserInfoInbut.lName}`
                    }))
                    setEditCard(editCard === 0 ? 1 : 0)
                  }}
                >
                  <LiaSaveSolid className="save_icon" />
                  <span>save</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index
