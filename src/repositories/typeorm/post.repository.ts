import { IPost } from '@/entities/models/post.interface'
import { IPostRepository } from '../post.repository.interface'
import { Repository } from 'typeorm'
import { Post } from '@/entities/post.entity'
import { appDataSource } from '@/lib/typeorm/typeorm'

export class PostRepository implements IPostRepository {
  private repository: Repository<Post>

  constructor() {
    this.repository = appDataSource.getRepository(Post)
  }

  async findAll(page: number, limit: number): Promise<IPost[]> {
    return this.repository.find({
      skip: (page - 1) * limit,
      take: limit,
    })
  }

  async findById(id: string): Promise<IPost | null> {
    return this.repository.findOne({
      where: { id },
    })
  }

  async create(post: IPost): Promise<IPost> {
    return this.repository.save(post)
  }

  async update(post: IPost): Promise<IPost> {
    return this.repository.save(post)
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id)
  }
}
