import { IStudentRepository } from '@/repositories/student.repository.interface'

export class RemoveStudentUseCase {
  constructor(private StudentRepository: IStudentRepository) {}

  async handler(StudentId: string): Promise<void> {
    return this.StudentRepository.delete(StudentId)
  }
}
