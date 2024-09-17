import { IPostStudent } from '@/entities/models/post-student.interface'
import { IPostStudentRepository } from '@/repositories/post-student.repository.interface'

export class CreatePostStudentUseCase {
  constructor(private postStudentRepository: IPostStudentRepository) {}

  async handler(postStudent: IPostStudent): Promise<IPostStudent> {
    return this.postStudentRepository.create(postStudent)
  }
}
