import { EntityManager, Repository } from 'typeorm'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { IPostStudentRepository } from '../post-student.repository.interface'
import { PostStudent } from '@/entities/post-student.entity'
import { IPostStudent } from '@/entities/models/post-student.interface'

export class PostStudentRepository implements IPostStudentRepository {
  private repository: Repository<PostStudent>

  constructor(transactionManager: EntityManager) {
    if (transactionManager) {
      this.repository = transactionManager.getRepository(PostStudent)
    } else {
      this.repository = appDataSource.getRepository(PostStudent)
    }
  }

  async create(postStudent: IPostStudent): Promise<IPostStudent> {
    return this.repository.save(postStudent)
  }
}
