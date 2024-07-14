import { Repository } from 'typeorm'
import { IPostTeacherRepository } from '../post-teacher.repository.interface'
import { PostTeacher } from '@/entities/post-teacher.entity'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { IPostTeacher } from '@/entities/models/postTeacher.interface'

export class PostTeacherRepository implements IPostTeacherRepository {
  private repository: Repository<PostTeacher>

  constructor() {
    this.repository = appDataSource.getRepository(PostTeacher)
  }

  async create(postTeacher: IPostTeacher): Promise<IPostTeacher> {
    return this.repository.save(postTeacher)
  }
}
