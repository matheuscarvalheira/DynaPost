import { PostRepository } from '@/repositories/typeorm/post.repository'
import { FindAllAdminUseCase } from '../find-all-admin'

export function makeFindAllAdminUseCase() {
  const postRepository = new PostRepository()
  const findAllAdminUseCase = new FindAllAdminUseCase(postRepository)

  return findAllAdminUseCase
}
