import express from 'express'

// Create Express App
const app = express()

// Enable JSON requests
app.use(express.json())

//
app.get('/users', (req, res) => {})

//
app.post('/user', (req, res) => {
  req.body

  return res.json(false)
})

// Listen to port 3333 ()
app.listen(3333)
