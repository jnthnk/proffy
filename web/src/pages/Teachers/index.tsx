import React, { useState, FormEvent } from 'react'

import Header from '../../components/Header'
import Teacher from '../../components/Teacher'
import Select from '../../components/Select'

import api from '../../services/api'

import './styles.css'

const Teachers = () => {
  const [teachers, setTeachers] = useState([])
  const [subject, setSubject] = useState('')
  const [day, setkDay] = useState('')
  const [time, setTime] = useState('')

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault()

    const res = await api.get('classes', {
      params: { subject, day, time }
    })

    setTeachers(res.data)
  }

  return (
    <div id="page-teachers" className="container">
      <Header title="These are the available Proffys">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Subject"
            value={subject}
            onChange={e => {
              setSubject(e.target.value)
            }}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação física', label: 'Educação física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' }
            ]}
          />
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
