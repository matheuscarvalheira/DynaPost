import { ClassroomTeacherRepository } from '@/repositories/typeorm/classroom-teacher.repository'
import { CreateClassroomTeacherUseCase } from '../add-teacher-to-classroom'
import { EntityManager } from 'typeorm'

export function makeCreateClassroomTeacherUseCase(
  transactionManager?: EntityManager,
) {
  const classroomTeacher = new ClassroomTeacherRepository(transactionManager)
  const createClassroomTeacherUseCase = new CreateClassroomTeacherUseCase(
    classroomTeacher,
  )

  return createClassroomTeacherUseCase
}
