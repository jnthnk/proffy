import React from 'react'
import mike from '../../assets/images/professors/mike.jpg'
import whatsapp from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const Teacher = () => (
  <article className="teacher-item">
    <header>
      <img src={mike} alt="Professor Mike Andrade profile" />
      <div>
        <strong>Mike Andrade</strong>
        <span>Chemistry</span>
      </div>
    </header>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa
      quaerat ipsam, quo hic repudiandae quod, beatae totam, perspiciatis
      ratione modi aut assumenda eveniet tempora cum sapiente. In,
      exercitationem illo!
    </p>
    <footer>
      <p>
        Price/hour: <strong>$20.00</strong>
      </p>
      <button type="button">
        <img src={whatsapp} alt="WhatsApp logo" />
        Entrar em contato
      </button>
    </footer>
  </article>
)

export default Teacher
