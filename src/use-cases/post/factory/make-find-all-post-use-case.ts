import { PostRepository } from '@/repositories/typeorm/post.repository'
import { FindAllPostsUseCase } from '../find-all-posts'

export function makeFindAllPostUseCase() {
  const postRepository = new PostRepository()
  const findAllPostUseCase = new FindAllPostsUseCase(postRepository)

  return findAllPostUseCase
}
