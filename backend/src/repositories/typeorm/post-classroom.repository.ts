import { PostClassroom } from '@/entities/post-classroom.entity'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { EntityManager, Repository } from 'typeorm'
import { IPostClassroomRepository } from '../post-classroom.repository.interface'
import { IPostClassroom } from '@/entities/models/post-classroom.interface'
import { IPost } from '@/entities/models/post.interface'
import { Post } from '@/entities/post.entity'

export class PostClassroomRepository implements IPostClassroomRepository {
  private repository: Repository<PostClassroom>
  private postRepository: Repository<Post>

  constructor(transactionManager?: EntityManager) {
    if (transactionManager) {
      this.repository = transactionManager.getRepository(PostClassroom)
    } else {
      this.repository = appDataSource.getRepository(PostClassroom)
    }
  }

  async create(postClassroom: IPostClassroom): Promise<IPostClassroom> {
    return this.repository.save(postClassroom)
  }

  async findPostsByClassroom(id: string): Promise<(IPost | null)[]> {
    const posts = await this.repository.find({ where: { classroom_id: id } })

    const postIds = posts.map((post) => post.post_id)

    const postData = await Promise.all(
      postIds.map(async (id) => this.postRepository.findOne({ where: { id } })),
    )

    return postData
  }
}
