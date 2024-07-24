import { StudentRepository } from '@/repositories/typeorm/student.repository'
import { UpdateStudentUseCase } from '../update-student'

export function makeUpdateStudentUseCase() {
  const studentRepository = new StudentRepository()
  const updateStudentUseCase = new UpdateStudentUseCase(studentRepository)

  return updateStudentUseCase
}
