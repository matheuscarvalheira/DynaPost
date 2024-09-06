import { PostRepository } from '@/repositories/typeorm/post.repository'
import { SearchUseCase } from '../search'

export function makeSearchUseCase() {
  const postRepository = new PostRepository()
  const findAllAdminUseCase = new SearchUseCase(postRepository)

  return findAllAdminUseCase
}
