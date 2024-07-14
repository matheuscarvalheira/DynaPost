import { PostTeacherRepository } from '@/repositories/typeorm/post-teacher.repository'
import { CreatePostTeacherUseCase } from '../create-post-teacher'
import { EntityManager } from 'typeorm'

export function makeCreatePostTeacherUseCase(
  transactionManager: EntityManager,
) {
  const postTeacherRepository = new PostTeacherRepository(transactionManager)
  const createPostTeacherUseCase = new CreatePostTeacherUseCase(
    postTeacherRepository,
  )
  return createPostTeacherUseCase
}
