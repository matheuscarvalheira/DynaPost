import { findAllClassrooms } from './find-all-classrooms'
import { findClassroom } from './find-classroom'
import { create } from './create'
import { update } from './update'
import { remove } from './remove'
import { Application } from 'express'
import { addTeacherToClassroom } from './add-teacher-to-classroom'
import { addStudentToClassroom } from './add-student-to-classroom'
import { removeStudentFromClassroom } from './remove-student-from-classroom'
import { removeTeacherFromClassroom } from './remove-teacher-from-classroom'
import { getClassroomsForStudent } from './get-classrooms-student'

export async function classroomRoutes(app: Application) {
  app.post('/classrooms/teachers', addTeacherToClassroom)
  app.post('/classrooms/students', addStudentToClassroom)
  app.get('/classrooms', findAllClassrooms)
  app.get('/classrooms/:id', findClassroom)
  app.get('/classrooms/students/:student_id', getClassroomsForStudent)
  app.post('/classrooms', create)
  app.put('/classrooms/:id', update)
  app.delete('/classrooms/:id', remove)
  app.delete(
    '/classrooms/:classroom_id/teachers/:teacher_id',
    removeTeacherFromClassroom,
  )
  app.delete(
    '/classrooms/:classroom_id/students/:student_id',
    removeStudentFromClassroom,
  )
}
