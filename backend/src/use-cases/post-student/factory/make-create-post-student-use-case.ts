import { PostStudentRepository } from '@/repositories/typeorm/post-student.repository'
import { EntityManager } from 'typeorm'
import { CreatePostStudentUseCase } from '../create-post-student'

export function makeCreatePostStudentUseCase(
  transactionManager: EntityManager,
) {
  const postStudentRepository = new PostStudentRepository(transactionManager)
  const createPostStudentUseCase = new CreatePostStudentUseCase(
    postStudentRepository,
  )
  return createPostStudentUseCase
}
