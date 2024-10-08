import { PostRepository } from '@/repositories/typeorm/post.repository'
import { RemovePostUseCase } from '../remove-post'

export function makeRemovePostUseCase() {
  const postRepository = new PostRepository()
  const deletePostUseCase = new RemovePostUseCase(postRepository)

  return deletePostUseCase
}
