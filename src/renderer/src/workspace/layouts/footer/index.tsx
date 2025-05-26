import './footer.css'
import { useSelector, useDispatch } from 'react-redux'

// import state
import { RootState } from '@/state'
import { messageUpdate, settingIsRead, settingIsOpen } from '@/state/slice/workspaceSlice'

// import icon
import { VscBell, VscBellDot, VscChevronDown } from 'react-icons/vsc'
import { PiTrash } from 'react-icons/pi'
import { GiCheckMark } from 'react-icons/gi'

const Index = (): React.JSX.Element => {
  const dispatch = useDispatch()
  const { settings, messages } = useSelector((state: RootState) => state.workspace.notification)

  const HandeldeleteNotification = (messageIndex: number): void => {
    const newMessage = messages.filter((_, index) => messageIndex !== index).reverse()
    dispatch(messageUpdate(newMessage))
  }

  const HandelOpenNotificationCard = (): void => {
    if (!settings.isOpen) {
      dispatch(settingIsRead(true))
      dispatch(settingIsOpen(true))
    } else dispatch(settingIsOpen(false))
  }

  const HandelCloseNotificationCard = (): void => {
    dispatch(settingIsOpen(false))
  }

  return (
    <footer id="footer">
      <div className="notfcation_icon" onClick={HandelOpenNotificationCard}>
        {settings.isRead ? <VscBell className="bell_icon" /> : <VscBellDot className="bell_icon" />}
      </div>
      {settings.isOpen && (
        <div className="notfcation_card">
          <div
            style={{ borderBottom: `${messages.length !== 0 && 'var(--border_1)'}` }}
            className={`notfcation-navebar ${messages.length === 0 ? 'justify-content-between' : 'justify-content-end'}`}
          >
            {messages.length === 0 ? <span>no new notification</span> : ''}
            <div className="closeicon" onClick={HandelCloseNotificationCard}>
              <VscChevronDown />
            </div>
          </div>
          <div className="notfcation-body">
            {messages
              .map((item, i) => (
                <div className="d-flex align-items-center" key={i}>
                  <div className="message_numper">
                    {item.isRead && <GiCheckMark className="check_icon" />}
                  </div>
                  <div className={`notfcation-layer ${i === 0 && 'my-1'}`}>
                    <div className="left_section">
                      <span>{item.text}</span>
                    </div>
                    <div className="right_section">
                      <div className="Trash_icon" onClick={() => HandeldeleteNotification(i)}>
                        <PiTrash />
                      </div>
                    </div>
                  </div>
                </div>
              ))
              .reverse()}
          </div>
        </div>
      )}
    </footer>
  )
}

export default Index
