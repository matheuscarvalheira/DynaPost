import { StudentRepository } from '@/repositories/typeorm/student.repository'
import { FindStudentUseCase } from '../find-student'

export function makeFindStudentUseCase() {
  const studentRepository = new StudentRepository()
  const findStudentUseCase = new FindStudentUseCase(studentRepository)

  return findStudentUseCase
}
