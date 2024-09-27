import { PostClassroomRepository } from '@/repositories/typeorm/post-classroom.repository'
import { FindClassroomPostsUseCase } from '../find-classroom-post'

export function makeFindClassroomPostsUseCase() {
  const postClassroomRepository = new PostClassroomRepository()

  const findPostClassroomUseCase = new FindClassroomPostsUseCase(
    postClassroomRepository,
  )

  return findPostClassroomUseCase
}
