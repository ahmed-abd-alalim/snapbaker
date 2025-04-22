import './projects.css'
import { useState } from 'react'

// import components
import { ProjectForm } from '@/home-screen/components/'

// import context
import { useDataContext } from '@/home-screen/assets/context/data'
import { useSettingContext } from '@/home-screen/assets/context/setting'

// import type
import { projectFromOpjectType } from '@/home-screen/types'

// import icon
import { PiTrash, PiCalendarDotsLight } from 'react-icons/pi'
import { TbEdit } from 'react-icons/tb'

// import img
import fLayer from '/images/projects-layers/1.png'
import sLayer from '/images/projects-layers/2.png'
import tLayer from '/images/projects-layers/3.png'

const Index = (): React.JSX.Element => {
  const { projectsData, setProjectsData } = useDataContext()
  const { projectFromVisibility, setProjectFromVisibility } = useSettingContext()

  const [formData, setFormData] = useState<projectFromOpjectType>()

  const HandleCardOpen: (cardData: projectFromOpjectType) => void = (cardData) => {
    setFormData(cardData)
    setProjectFromVisibility({
      projects: 1
    })
  }

  const HandleDeletCard: (cardData: projectFromOpjectType) => void = (cardData) => {
    const newData = projectsData.filter((item) => item.siteName !== cardData.siteName)
    setProjectsData([...newData])
  }

  return (
    <>
      <section id="Projects">
        {projectsData.length === 0 ? (
          <div className="empty_layer">
            <img src={fLayer} alt="" width={'100%'} className="fLayer" />
            <img src={sLayer} alt="" width={'100%'} className="sLayer" />
            <img src={tLayer} alt="" width={'100%'} className="tLayer" />
          </div>
        ) : (
          <div className="container">
            <div className="row">
              {projectsData.map((item, i) => (
                <div key={i} className="col-12 col-md-6 col-lg-4 p-1 card_transition">
                  <div className="site_card">
                    <div className="card_bar">
                      <div className="date_setion">
                        <PiCalendarDotsLight className="card_icon" />
                        <span className="date">{item.projectDate}</span>
                      </div>
                      <div className="d-flex">
                        <div className="edit_section" onClick={() => HandleCardOpen(item)}>
                          <TbEdit className="card_icon" />
                        </div>
                        <div className="delet_section" onClick={() => HandleDeletCard(item)}>
                          <PiTrash className="card_icon" />
                        </div>
                      </div>
                    </div>
                    <div className="site_name">
                      <span>{item.siteName}</span>
                    </div>
                    <div className="row m-0 site_info">
                      <div className="col-6 site_featcher_section card_transition">
                        <div className="site_featcher_box">
                          <span>CSS framework:</span>
                          <span className="featcher_value">{item.cssFram}</span>
                        </div>
                      </div>
                      <div className="col-6 site_featcher_section card_transition">
                        <div className="site_featcher_box">
                          <span>JS framework:</span>
                          <span className="featcher_value">{item.jsFram}</span>
                        </div>
                      </div>
                      <div className="col-6 site_featcher_section card_transition">
                        <div className="site_featcher_box">
                          <span>Theme color:</span>
                          <span className="featcher_value">{item.themeColor}</span>
                        </div>
                      </div>
                      <div className="col-6 site_featcher_section card_transition">
                        <div className="site_featcher_box">
                          <span>pages numper:</span>
                          <span className="featcher_value">{item.pagesNum}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
      {projectFromVisibility.projects ? <ProjectForm data={formData} /> : ''}
    </>
  )
}

export default Index
