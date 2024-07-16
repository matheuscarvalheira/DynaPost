import { IPostClassroom } from '@/entities/models/postClassroom.interface'
import { IPostClassroomRepository } from '@/repositories/post-classroom.repository.interface'

export class CreatePostClassroomUseCase {
  constructor(private postClassroomRepository: IPostClassroomRepository) {}

  async handler(postClassroom: IPostClassroom): Promise<IPostClassroom> {
    return this.postClassroomRepository.create(postClassroom)
  }
}
