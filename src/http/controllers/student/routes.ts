import { Application } from 'express'
import { findAllStudents } from './find-all-students'
import { findStudent } from './find-student'
import { create } from './create'
import { update } from './update'
import { remove } from './remove'
import { asyncWrapper } from '@/utils/async-wrapper'

export async function studentRoutes(app: Application) {
  app.get('/students', asyncWrapper(findAllStudents))
  app.get('/students/:id', asyncWrapper(findStudent))
  app.post('/students', asyncWrapper(create))
  app.put('/students/:id', asyncWrapper(update))
  app.delete('/students/:id', asyncWrapper(remove))
}
