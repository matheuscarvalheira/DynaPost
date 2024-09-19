import express from 'express'
import createError from 'http-errors'
import cors from 'cors';
import { globalErrorHandler } from './utils/global-error-handler'
import { postRoutes } from './http/controllers/post/routes'
import { studentRoutes } from './http/controllers/student/routes'
import { classroomRoutes } from './http/controllers/classroom/routes'
import { teacherRoutes } from './http/controllers/teacher/routes'
import { authRoutes } from './http/controllers/auth/routes'
import { authenticateJWT } from './middleware/authMiddleware'
require('express-async-errors')

export const app = express()

//Config
app.use(express.json())
app.use(cors())

//Middlewares
app.use(authenticateJWT)

//Routes
authRoutes(app)
postRoutes(app)
teacherRoutes(app)
studentRoutes(app)
classroomRoutes(app)

//Errors Handlers
app.use((req, res, next) => {
  next(createError(404, `Endpoint ${req.originalUrl} not found`))
})
app.use(globalErrorHandler)
