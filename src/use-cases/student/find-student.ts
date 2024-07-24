import { IStudentRepository } from '@/repositories/student.repository.interface'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'

export class FindStudentUseCase {
  constructor(private StudentRepository: IStudentRepository) {}

  async handler(id: string) {
    const Student = await this.StudentRepository.findById(id)

    if (!Student) throw new ResourceNotFoundError()

    return Student
  }
}
