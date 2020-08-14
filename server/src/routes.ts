//
import express, { response } from 'express'
import db from './database/connection'
import { timeInMinutes } from './utils'

//
const routes = express.Router()

//
routes.get('/classes', async (req, res) => {
  //
  const { subject, day, time }: FiltersProps = req.query

  //
  if (!subject || !day || !time) {
    return res.status(400).json({
      error: 'Missing filters to search classes'
    })
  }

  // Convert time request in minutes
  const minutes = timeInMinutes(time)

  //
  const classes = await db('classes')
    .where('classes.subject', '=', subject)
    .whereExists(function () {
      this.select('schedules.*')
        .from('schedules')
        .whereRaw('`schedules`.`class_id` = `classes`.`id`')
        .whereRaw('`schedules`.`day` = ??', [Number(day)])
        .whereRaw('`schedules`.`from` <= ??', [minutes])
        .whereRaw('`schedules`.`to` > ??', [minutes])
    })
    .join('users', 'classes.user_id', '=', 'users.id')
    .select(['classes.*', 'users.*'])

  //
  return res.send(classes)
})

//
routes.post('/class', async (req, res) => {
  // Get all desired fields from request body
  const { name, avatar, whatsapp, bio, subject, price, schedules } = req.body

  // Create a transaction wrapper around the database
  // This is like a more secure or foolproof db manipulation
  // The point is destroy all current inserts if any error occurs
  const sdb = await db.transaction()

  //
  try {
    // Insert new user, and get all inserted users Ids
    const usersIds = await sdb('users').insert({
      name,
      avatar,
      whatsapp,
      bio
    })

    // Insert new class, and get all inserted classes Ids
    const classesIds = await sdb('classes').insert({
      subject,
      price,
      user_id: usersIds[0]
    })

    // Create a new schedules array with the converted data
    const _schedules = schedules.map((schedule: ScheduleProps) => {
      return {
        day: schedule.day,
        from: timeInMinutes(schedule.from),
        to: timeInMinutes(schedule.to),
        class_id: classesIds[0]
      }
    })

    //
    await sdb('schedules').insert(_schedules)

    //
    await sdb.commit()

    //
    return res.status(201).send()

    //
  } catch (err) {
    //
    await sdb.rollback()

    //
    return res.status(400).json({
      error: 'Unexpected error while creating new class'
    })
  }
})

// 
routes.get('/connections', async (req, res) => {
  
})

//
routes.post('/connection', async (req, res) => {
  // 
  const { user_id } = req.body
  
  // 
  await db('connections').insert({
    user_id
  })
  
  // 
  return response.status(201)
})

//
interface FiltersProps {
  subject?: string
  day?: string
  time?: string
}

//
interface ScheduleProps {
  day: number
  from: string
  to: string
}

//
export default routes
