import { Application } from 'express'
import { create } from './create'
import { findTeacher } from './find-teacher'
import { update } from './update'
import { deleteTeacher } from './delete'
import { findAllTeachers } from './find-all-teachers'
import { asyncWrapper } from '@/utils/async-wrapper'

export async function teacherRoutes(app: Application) {
  app.get('/teachers', asyncWrapper(findAllTeachers))
  app.get('/teacher/:id', asyncWrapper(findTeacher))
  app.post('/teacher', asyncWrapper(create))
  app.put('/teacher/:id', asyncWrapper(update))
  app.delete('/teacher/:id', asyncWrapper(deleteTeacher))
}
