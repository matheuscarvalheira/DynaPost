import { IPostTeacher } from '@/entities/models/postTeacher.interface'
import { IPostTeacherRepository } from '@/repositories/post-teacher.repository.interface'

export class CreatePostTeacherUseCase {
  constructor(private postTeacherRepository: IPostTeacherRepository) {}

  async handler(postTeacher: IPostTeacher): Promise<IPostTeacher> {
    return this.postTeacherRepository.create(postTeacher)
  }
}
