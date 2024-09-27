import { Teacher } from '@/entities/teacher.entity'
import { ITeacherRepository } from '../teacher.repository.interface'
import { ITeacher } from '@/entities/models/teacher.interface'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { EntityManager, Repository } from 'typeorm'

export class TeacherRepository implements ITeacherRepository {
  private repository: Repository<Teacher>

  constructor(transactionManager?: EntityManager) {
    if (transactionManager) {
      this.repository = transactionManager.getRepository(Teacher)
    } else {
      this.repository = appDataSource.getRepository(Teacher)
    }
  }

  async findAll(page: number, limit: number): Promise<ITeacher[]> {
    return this.repository.find({
      skip: (page - 1) * limit,
      take: limit,
    })
  }

  async findById(id: string): Promise<ITeacher | null> {
    return this.repository.findOne({
      where: { id },
    })
  }

  async create(teacher: ITeacher): Promise<ITeacher> {
    return this.repository.save(teacher)
  }

  async update(teacher: ITeacher): Promise<ITeacher> {
    return this.repository.save(teacher)
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id)
  }
}
