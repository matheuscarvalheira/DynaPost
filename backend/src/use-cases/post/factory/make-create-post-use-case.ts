import { PostRepository } from '@/repositories/typeorm/post.repository'
import { CreatePostUseCase } from '../create-post'
import { EntityManager } from 'typeorm'

export function makeCreatePostUseCase(transactionManager: EntityManager) {
  const postRepository = new PostRepository(transactionManager)
  const createPostUseCase = new CreatePostUseCase(postRepository)

  return createPostUseCase
}
