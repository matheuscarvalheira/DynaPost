import { IPost } from '@/entities/models/post.interface'
import { IPostRepository } from '../post.repository.interface'
import { EntityManager, Like, Repository } from 'typeorm'
import { Post } from '@/entities/post.entity'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { PostClassroom } from '@/entities/post-classroom.entity'

export class PostRepository implements IPostRepository {
  private repository: Repository<Post>
  private postClassroomRepository: Repository<PostClassroom>

  constructor(transactionManager?: EntityManager) {
    if (transactionManager) {
      this.repository = transactionManager.getRepository(Post)
    } else {
      this.repository = appDataSource.getRepository(Post)
      this.postClassroomRepository = appDataSource.getRepository(PostClassroom)
    }
  }

  async findAll(page: number, limit: number): Promise<IPost[]> {
    return this.repository.find({
      skip: (page - 1) * limit,
      take: limit,
      where: {
        published: true,
      },
    })
  }

  async findAllAdmin(page: number, limit: number): Promise<IPost[]> {
    return this.repository.find({
      skip: (page - 1) * limit,
      take: limit,
    })
  }

  async search({
    query,
    classroom_id,
  }: {
    query: string
    classroom_id: string
  }): Promise<IPost[] | undefined> {
    const allPosts = await this.repository.find({
      where: [{ title: Like(`%${query}%`) }, { body: Like(`%${query}%`) }],
      relations: ['postClassrooms'],
    })

    if (allPosts.length > 0) {
      const filteredPosts = allPosts.filter((post) => {
        return post.postClassrooms.some((postClassroom) => postClassroom.classroom_id === classroom_id);
      });
      return filteredPosts;
    }
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
