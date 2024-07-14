import { IPostClassroom } from '@/entities/models/postClassroom.interface'
import { PostClassroom } from '@/entities/post-classroom.entity'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { Repository } from 'typeorm'
import { IPostClassroomRepository } from '../post-classroom.repository.interface'

export class PostClassroomRepository implements IPostClassroomRepository {
  private repository: Repository<PostClassroom>

  constructor() {
    this.repository = appDataSource.getRepository(PostClassroom)
  }

  async create(postClassroom: IPostClassroom): Promise<IPostClassroom> {
    return this.repository.save(postClassroom)
  }
}
