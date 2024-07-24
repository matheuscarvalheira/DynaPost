import { IPostRepository } from '@/repositories/post.repository.interface'

export class FindAllAdminUseCase {
  constructor(private postRepository: IPostRepository) {}

  async handler(page: number, limit: number) {
    return this.postRepository.findAllAdmin(page, limit)
  }
}
