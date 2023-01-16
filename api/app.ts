import express from 'express'
import cors from 'cors'

const app = express()

// Global middleware
app.use(
    cors({
      origin: '*',
    })
  )

// Set up routers
console.log('=========================')
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

export default app