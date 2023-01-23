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

export default app