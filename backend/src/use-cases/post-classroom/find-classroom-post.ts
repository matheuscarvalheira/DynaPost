import { IPostClassroomRepository } from '@/repositories/post-classroom.repository.interface'

export class FindClassroomPostsUseCase {
  constructor(private postClassroomRepository: IPostClassroomRepository) {}

  async handler(id: string) {
    return this.postClassroomRepository.findPostsByClassroom(id)
  }
}
