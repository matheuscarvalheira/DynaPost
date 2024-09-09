import { IStudentRepository } from '@/repositories/student.repository.interface'

export class FindAllStudentsUseCase {
  constructor(private StudentRepository: IStudentRepository) {}

  async handler(page: number, limit: number) {
    return this.StudentRepository.findAll(page, limit)
  }
}
