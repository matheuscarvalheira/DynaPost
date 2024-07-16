import { PostClassroomRepository } from '@/repositories/typeorm/post-classroom.repository'
import { CreatePostClassroomUseCase } from '../create-post-classroom'
import { EntityManager } from 'typeorm'

export function makeCreatePostClassroomUseCase(
  transactionManager: EntityManager,
) {
  const postClassroomRepository = new PostClassroomRepository(
    transactionManager,
  )
  const createPostClassroomUseCase = new CreatePostClassroomUseCase(
    postClassroomRepository,
  )
  return createPostClassroomUseCase
}
