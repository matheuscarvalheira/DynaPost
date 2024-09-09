import { Application } from 'express'
import { create } from './create'
import { findTeacher } from './find-teacher'
import { update } from './update'
import { deleteTeacher } from './delete'
import { findAllTeachers } from './find-all-teachers'

export async function teacherRoutes(app: Application) {
  app.get('/teachers', findAllTeachers)
  app.get('/teachers/:id', findTeacher)
  app.post('/teachers', create)
  app.put('/teachers/:id', update)
  app.delete('/teachers/:id', deleteTeacher)
}
