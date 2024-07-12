import express from 'express'
import createError from 'http-errors'
import { globalErrorHandler } from './utils/global-error-handler'
import { postRoutes } from './http/controllers/post/routes'
import { teacherRoutes } from './http/controllers/teacher/routes'

export const app = express()

postRoutes(app)
teacherRoutes(app)

app.use((_, __, next) => {
  next(createError(404, 'Endpoint not found'))
})

app.use(globalErrorHandler)
app.use(express.json())
