import express from 'express'

import {
    findByName,
    findAll
  } from '../controllers/package.controller'

  const router = express.Router()

  router.get('/', findAll)
  router.get('/:name', findByName)

  export default router