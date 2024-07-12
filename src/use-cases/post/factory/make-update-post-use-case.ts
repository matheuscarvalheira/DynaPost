import { PostRepository } from '@/repositories/typeorm/post.repository'
import { UpdatePostUseCase } from '../post/update-post'

export function makeUpdatePostUseCase() {
  const postRepository = new PostRepository()

  const updatePostUseCase = new UpdatePostUseCase(postRepository)

  return updatePostUseCase
}
