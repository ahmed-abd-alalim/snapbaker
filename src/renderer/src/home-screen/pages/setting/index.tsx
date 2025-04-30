import './setting.css'
import { useEffect, useState } from 'react'

// import context
import { useDataContext } from '@/home-screen/assets/context/data'
import { useSettingContext } from '@/home-screen/assets/context/setting'

// import type
import { editUserInfoInbutType } from '@/home-screen/types'

// import config
import { app } from '@/config'

// import icon
import { AiFillEdit, AiOutlineEdit } from 'react-icons/ai'
import { CiUser } from 'react-icons/ci'
import { LiaSaveSolid } from 'react-icons/lia'
import { IoIosAdd } from 'react-icons/io'
import { RxUpdate, RxDownload } from 'react-icons/rx'
import { VscSymbolColor } from 'react-icons/vsc'
import { TbChevronDown } from 'react-icons/tb'

// import img
import appIcom from '/icon.png'

const Index = (): React.JSX.Element => {
  const { userInfo, setUserInfo } = useDataContext()

  const availableThemes = Object.fromEntries(
    app.theme.availableThemes.map((themeName) => [themeName, false])
  )

  const { colorTheme, setColorTheme } = useSettingContext()
  const [editCard, setEditCard] = useState<number>(0)
  const [colorThemeCard, setColorThemeCard] = useState<number>(0)
  const [editUserInfoInbut, setEditUserInfoInbut] = useState<editUserInfoInbutType>({
    fName: userInfo.fName,
    lName: userInfo.lName,
    userImg: userInfo.img
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
    if (colorThemeCard) {
      document.documentElement.setAttribute('theme-color-section', 'on')
    } else {
      document.documentElement.removeAttribute('theme-color-section')
    }
  }, [colorThemeCard])

  useEffect(() => {
    if (editCard) {
      document.documentElement.setAttribute('account-edit-section', 'on')
    } else {
      document.documentElement.removeAttribute('account-edit-section')
    }
  }, [editCard])

  return (
    <section id="Setting">
      <div className="container">
        {/* account setion */}
        <div className="topic_section account">
          <div className="topic_name mb-1">
            <span>Account</span>
          </div>
          <div className="row">
            <div className="col-9 p-0 d-flex gap-2">
              <div className="img_box">
                {userInfo.img ? (
                  <img src={userInfo.img} alt={userInfo.fName} width={'100%'} />
                ) : (
                  <CiUser className="user_img" />
                )}
              </div>
              <div className="user_data_box">
                <span className="user_name">{`${userInfo.fName} ${userInfo.lName}`}</span>
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
          <div className="account_edit_section">
            <div className="form_box">
              <div className="w-100 h-100  d-flex  justify-content-around align-items-center">
                <div className="user_img_box">
                  <div className="add_layer" onClick={handleSelect}>
                    <IoIosAdd className="add_icon" />
                  </div>
                  {editUserInfoInbut.userImg ? (
                    <img src={editUserInfoInbut.userImg} alt={userInfo.fName} width={'100%'} />
                  ) : (
                    <CiUser className="user_icon" />
                  )}
                </div>
                <div>
                  <div className="user_name_box">
                    <input
                      type="text"
                      placeholder="Enter frist name"
                      maxLength={8}
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
                      maxLength={12}
                      value={editUserInfoInbut.lName}
                      onChange={(e) =>
                        setEditUserInfoInbut((prveData) => ({
                          ...prveData,
                          lName: e.target.value
                        }))
                      }
                    />
                  </div>
                  <div
                    className="submit_button d-flex gap-1 mt-2"
                    onClick={() => {
                      setUserInfo(() => ({
                        fName: editUserInfoInbut.fName,
                        lName: editUserInfoInbut.lName,
                        img: editUserInfoInbut.userImg
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

        {/* color theme section */}
        <div className="topic_section color_theme mt-3">
          <div className="topic_name mb-1">
            <span>general</span>
          </div>
          <div className="row">
            <div className="col-9 p-0 d-flex align-items-center gap-3">
              <div className="section_icon">
                <VscSymbolColor />
              </div>
              <div className="section_data">
                <span className="main_title">App theme</span>
              </div>
            </div>
            <div className="col-3 p-0 d-flex align-items-center justify-content-end">
              <div
                className="drop_down_button"
                onClick={() => setColorThemeCard(colorThemeCard === 0 ? 1 : 0)}
              >
                <span className="theme_name">
                  {Object.keys(colorTheme).filter((item) => colorTheme[item] === true)}
                </span>
                <TbChevronDown className={`down_icon ${colorThemeCard && 'rotate'}`} />
              </div>
            </div>
          </div>
          <div className="theme_color_section">
            <div className="checkboxs_section">
              <div className="theme_color_option">
                <input
                  type="checkbox"
                  checked={colorTheme.dark}
                  onChange={() =>
                    setColorTheme({
                      ...availableThemes,
                      dark: true
                    })
                  }
                />
                <span>Dark</span>
              </div>
              <div className="theme_color_option">
                <input
                  type="checkbox"
                  checked={colorTheme.white}
                  onChange={() =>
                    setColorTheme({
                      ...availableThemes,
                      white: true
                    })
                  }
                />
                <span>white</span>
              </div>
              <div className="theme_color_option">
                <input
                  type="checkbox"
                  checked={colorTheme.blue}
                  onChange={() =>
                    setColorTheme({
                      ...availableThemes,
                      blue: true
                    })
                  }
                />
                <span>Blue</span>
              </div>
            </div>
          </div>
        </div>

        {/* about section */}
        <div className="topic_section about mt-3">
          <div className="topic_name mb-1">
            <span>About</span>
          </div>
          <div className="row">
            <div className="col-9 p-0 d-flex align-items-center gap-3">
              <div className="section_icon">
                <RxUpdate />
              </div>
              <div className="section_data">
                <span className="main_title">Check for Updates</span>
              </div>
            </div>
            <div className="col-3 p-0 d-flex align-items-center justify-content-center">
              <div className="update_button">
                <RxDownload className="button_icon" />
                <span>update</span>
              </div>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-9 p-0 d-flex align-items-center gap-3">
              <div className="section_img">
                <img src={appIcom} alt="appIcom" width={'100%'} />
              </div>
              <div className="section_data">
                <span className="main_title">{app.name}</span>
                <a href={app.gitHubAccount} target="_blank" rel="noreferrer" className="sub_link">
                  &copy; {app.copyright}
                </a>
              </div>
            </div>
            <div className="col-3 p-0 d-flex align-items-center justify-content-center">
              <div className="version_section d-flex align-items-center justify-content-center">
                <span>v</span>
                <span>{app.version}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index
