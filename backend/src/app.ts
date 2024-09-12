import express from 'express'
import createError from 'http-errors'
import { globalErrorHandler } from './utils/global-error-handler'
import { postRoutes } from './http/controllers/post/routes'
import { studentRoutes } from './http/controllers/student/routes'
import { classroomRoutes } from './http/controllers/classroom/routes'
import { teacherRoutes } from './http/controllers/teacher/routes'
import { authRoutes } from './http/controllers/auth/routes'
require('express-async-errors')

export const app = express()
app.use(express.json())

authRoutes(app)
postRoutes(app)
teacherRoutes(app)

studentRoutes(app)
classroomRoutes(app)

app.use((req, res, next) => {
  next(createError(404, `Endpoint ${req.originalUrl} not found`))
})

app.use(globalErrorHandler)
