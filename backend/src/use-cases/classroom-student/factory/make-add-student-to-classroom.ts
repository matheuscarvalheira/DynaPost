import { ClassroomStudentRepository } from '@/repositories/typeorm/classroom-student.repository'
import { CreateClassroomStudentUseCase } from '../add-student-to-classroom'
import { EntityManager } from 'typeorm'

export function makeCreateClassroomStudentUseCase(
  transactionManager?: EntityManager,
) {
  const classroomStudent = new ClassroomStudentRepository(transactionManager)
  const createClassroomStudentUseCase = new CreateClassroomStudentUseCase(
    classroomStudent,
  )

  return createClassroomStudentUseCase
}
