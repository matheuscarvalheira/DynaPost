import { IPostRepository } from '@/repositories/post.repository.interface'

export class SearchUseCase {
  constructor(private postRepository: IPostRepository) {}

  async handler(query: string) {
    return this.postRepository.search(query)
  }
}
