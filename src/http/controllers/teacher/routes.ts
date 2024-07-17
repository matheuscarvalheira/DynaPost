import { Application } from 'express'
import { create } from './create'
import { findTeacher } from './find-teacher'
import { update } from './update'
import { deleteTeacher } from './delete'
import { findAllTeachers } from './find-all-teachers'

export async function teacherRoutes(app: Application) {
  app.get('/teachers', findAllTeachers)
  app.get('/teacher/:id', findTeacher)
  app.post('/teacher', create)
  app.put('/teacher/:id', update)
  app.delete('/teacher/:id', deleteTeacher)
}
