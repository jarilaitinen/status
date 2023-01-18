import express from 'express'
import cors from 'cors'

import packageRouter from './routers/package.router'

const app = express()

// Global middleware
app.use(
    cors({
      origin: '*',
    })
  )

// Set up routers
console.log('=========================')
app.use(packageRouter)
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

export default app