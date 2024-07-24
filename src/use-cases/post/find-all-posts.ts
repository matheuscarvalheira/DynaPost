import { IPostRepository } from '@/repositories/post.repository.interface'

export class FindAllPostsUseCase {
  constructor(private postRepository: IPostRepository) {}

  async handler(page: number, limit: number) {
    return this.postRepository.findAll(page, limit)
  }
}
