import { StudentRepository } from '@/repositories/typeorm/student.repository'
import { CreateStudentUseCase } from '../create-student'
import { EntityManager } from 'typeorm'

export function makeCreateStudentUseCase(transactionManager?: EntityManager) {
  const studentRepository = new StudentRepository(transactionManager)
  const createStudentUseCase = new CreateStudentUseCase(studentRepository)

  return createStudentUseCase
}
