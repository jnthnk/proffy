// React deps
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Images
import logo from '../../assets/images/logo.svg'
import landing from '../../assets/images/landing.svg'

// Icons
import study from '../../assets/images/icons/study.svg'
import classes from '../../assets/images/icons/give-classes.svg'
import heart from '../../assets/images/icons/purple-heart.svg'

// Axios
import api from '../../services/api'

// CSS
import './styles.css'

// 
const Landing = () => {
  const [connections, setConnections] = useState(0)

  useEffect(() => {
    api.get('connections').then(res => {
      const { total } = res.data
      setConnections(total)
    })
  }, [])

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landing} alt="Plataforma de estudos" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={study} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="classes">
            <img src={classes} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {connections} conexoes já realizadas <img src={heart} alt="Coracao" />
        </span>
      </div>
    </div>
  )
}

export default Landing
