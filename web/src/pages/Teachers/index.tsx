import React from 'react'
import Header from '../../components/Header'
import Teacher from '../../components/Teacher'

import './styles.css'

const Teachers = () => {
  return (
    <div id="page-teachers" className="container">
      <Header title="These are the available Proffys">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="day">Week day</label>
            <input type="text" id="day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hours</label>
            <input type="text" id="time" />
          </div>
        </form>
      </Header>
      <main>
        <Teacher />
        <Teacher />
        <Teacher />
      </main>
    </div>
  )
}

export default Teachers
