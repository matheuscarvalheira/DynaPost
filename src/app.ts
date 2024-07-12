import express from 'express'
import createError from 'http-errors'
import { globalErrorHandler } from './utils/global-error-handler'
import { postRoutes } from './http/controllers/post/routes'
import { studentRoutes } from './http/controllers/student/routes'

export const app = express()

app.use(express.json())

postRoutes(app)
studentRoutes(app)

app.use((_, __, next) => {
  next(createError(404, 'Endpoint not found'))
})

app.use(globalErrorHandler)
