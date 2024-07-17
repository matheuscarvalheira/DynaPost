import { env } from '@/env'
import { Response, Request, NextFunction } from 'express'
import { ZodError } from 'zod'

interface ErrorHandlerMap {
  [key: string]: (error: Error | ZodError, req: Request, res: Response) => void
}

export const errorHandlerMap: ErrorHandlerMap = {
  ZodError: (error, _, res) => {
    return res.status(400).json({
      message: 'Validation error',
      ...(error instanceof ZodError && { error: error.errors }),
    })
  },
  ResourceNotFoundError: (error, _, res) => {
    return res.status(404).json({ message: error.message })
  },
  NotFoundError: (error, _, res) => {
    return res.status(404).json({ message: error.message })
  },
}

export const globalErrorHandler = (
  error: Error,
  _: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  __: NextFunction,
) => {
  if (env.NODE_ENV === 'development') {
    console.error(error)
  }

  const handler = errorHandlerMap[error.constructor.name]

  if (handler) return handler(error, _, res)

  return res.status(500).json({ message: 'Internal server error' })
}
