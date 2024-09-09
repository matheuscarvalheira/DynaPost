import { ClassroomTeacherRepository } from '@/repositories/typeorm/classroom-teacher.repository'
import { CreateClassroomTeacherUseCase } from '../add-teacher-to-classroom'

export function makeCreateClassroomTeacherUseCase() {
  const classroomTeacher = new ClassroomTeacherRepository()
  const createClassroomTeacherUseCase = new CreateClassroomTeacherUseCase(
    classroomTeacher,
  )

  return createClassroomTeacherUseCase
}
