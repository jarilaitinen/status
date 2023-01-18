import { Request, Response, NextFunction } from 'express'
import packageService from '../services/package.service'
import { BadRequestError } from '../helpers/apiError'

// GET /:packagename
export const findByName = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      res.json(await packageService.findByName(req.params.name))
    } catch (error) {
      if (error instanceof Error && error.name == 'ValidationError') {
        next(new BadRequestError('Invalid Request', 400, error))
      } else {
        next(error)
      }
    }
  }

// GET /packages
export const findAll = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      res.json(await packageService.findAll())
    } catch (error) {
      if (error instanceof Error && error.name == 'ValidationError') {
        next(new BadRequestError('Invalid Request', 400, error))
      } else {
        next(error)
      }
    }
  }