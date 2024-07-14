import { PostClassroomRepository } from '@/repositories/typeorm/post-classroom.repository'
import { CreatePostClassroomUseCase } from '../create-post-classroom'

export function makeCreatePostClassroomUseCase() {
  const postClassroomRepository = new PostClassroomRepository()
  const createPostClassroomUseCase = new CreatePostClassroomUseCase(
    postClassroomRepository,
  )
  return createPostClassroomUseCase
}
