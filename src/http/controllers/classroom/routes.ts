import { findAllClassrooms } from './find-all-classrooms'
import { findClassroom } from './find-classroom'
import { create } from './create'
import { update } from './update'
import { remove } from './remove'
import { Application } from 'express'

export async function classroomRoutes(app: Application) {
  app.get('/classrooms', findAllClassrooms)
  app.get('/classrooms/:id', findClassroom)
  app.post('/classrooms', create)
  app.put('/classrooms/:id', update)
  app.delete('/classrooms/:id', remove)
}
