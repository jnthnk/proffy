import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import landing from '../../assets/images/landing.svg'

import study from '../../assets/images/icons/study.svg'
import classes from '../../assets/images/icons/give-classes.svg'
import heart from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

function Landing() {
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
          Total de 200 conexoes já realizadas <img src={heart} alt="Coracao" />
        </span>
      </div>
    </div>
  )
}

export default Landing
