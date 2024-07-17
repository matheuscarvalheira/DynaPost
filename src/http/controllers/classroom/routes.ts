import { findAllClassrooms } from './find-all-classrooms'
import { findClassroom } from './find-classroom'
import { create } from './create'
import { update } from './update'
import { remove } from './remove'
import { Application } from 'express'
import { asyncWrapper } from '@/utils/async-wrapper'

export async function classroomRoutes(app: Application) {
  app.get('/classrooms', asyncWrapper(findAllClassrooms))
  app.get('/classrooms/:id', asyncWrapper(findClassroom))
  app.post('/classrooms', asyncWrapper(create))
  app.put('/classrooms/:id', asyncWrapper(update))
  app.delete('/classrooms/:id', asyncWrapper(remove))
}
