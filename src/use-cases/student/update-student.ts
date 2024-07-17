import { IStudent } from '@/entities/models/student.interface'
import { IStudentRepository } from '@/repositories/student.repository.interface'

export class UpdateStudentUseCase {
  constructor(private StudentRepository: IStudentRepository) {}

  async handler(Student: IStudent) {
    return this.StudentRepository.update(Student)
  }
}
