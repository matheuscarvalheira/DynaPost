import { IPostRepository } from '@/repositories/post.repository.interface'

export class SearchUseCase {
  constructor(private postRepository: IPostRepository) {}

  async handler({
    query,
    classroom_id,
  }: {
    query: string
    classroom_id: string
  }) {
    return this.postRepository.search({
      query,
      classroom_id,
    })
  }
}
