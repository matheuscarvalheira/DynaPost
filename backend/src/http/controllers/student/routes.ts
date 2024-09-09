import { Application } from 'express'
import { findAllStudents } from './find-all-students'
import { findStudent } from './find-student'
import { create } from './create'
import { update } from './update'
import { remove } from './remove'

export async function studentRoutes(app: Application) {
  app.get('/students', findAllStudents)
  app.get('/students/:id', findStudent)
  app.post('/students', create)
  app.put('/students/:id', update)
  app.delete('/students/:id', remove)
}
