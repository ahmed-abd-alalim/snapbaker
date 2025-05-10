import './intro.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// import logo
import Logo from '@/logo'

// import config
import { routes } from '@/config'

const Index = (): React.JSX.Element => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate(routes.home)
    }, 4000)
  }, [navigate])

  return (
    <section id="Intro">
      <div className="logo_section ms-1">
        <Logo />
      </div>
      <div className="name_section">
        <span>snap</span>
        <span>Baker</span>
        <div className="black_layer" />
      </div>
    </section>
  )
}

export default Index
