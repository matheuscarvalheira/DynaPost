import { IPostRepository } from '@/repositories/post.repository.interface'

export class RemovePostUseCase {
  constructor(private postRepository: IPostRepository) {}

  async handler(postId: string): Promise<void> {
    return this.postRepository.delete(postId)
  }
}
