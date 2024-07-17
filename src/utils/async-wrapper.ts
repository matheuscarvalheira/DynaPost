import { NextFunction, Request, Response } from 'express'

type Controller = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<unknown>

export const asyncWrapper =
  (fn: Controller) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }
