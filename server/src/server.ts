import express from 'express'
import cors from 'cors'
import routes from './routes'

// Create Express App
const app = express()

// Use JSON and routes
app.use(express.json())
app.use(cors())
app.use(routes)

// Listen to port 3333
app.listen(3333)
