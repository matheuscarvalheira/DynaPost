import { IStudent } from '@/entities/models/student.interface'
import { IStudentRepository } from '../student.repository.interface'
import { EntityManager, Repository } from 'typeorm'
import { Student } from '@/entities/student.entity'
import { appDataSource } from '@/lib/typeorm/typeorm'

export class StudentRepository implements IStudentRepository {
  private repository: Repository<Student>

  constructor(transactionManager?: EntityManager) {
    if (transactionManager) {
      this.repository = transactionManager.getRepository(Student)
    } else {
      this.repository = appDataSource.getRepository(Student)
    }
  }

  async findAll(page: number, limit: number): Promise<IStudent[]> {
    return this.repository.find({
      skip: (page - 1) * limit,
      take: limit,
    })
  }

  async findById(id: string): Promise<IStudent | null> {
    return this.repository.findOne({
      where: { id },
    })
  }

  async create(Student: IStudent): Promise<IStudent> {
    return this.repository.save(Student)
  }

  async update(Student: IStudent): Promise<IStudent> {
    return this.repository.save(Student)
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id)
  }
}
