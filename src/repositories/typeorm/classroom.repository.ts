import { IClassroom } from '@/entities/models/classroom.interface'
import { IClassroomRepository } from '../classroom.repository.interface'
import { Repository } from 'typeorm'
import { Classroom } from '@/entities/classroom.entity'
import { appDataSource } from '@/lib/typeorm/typeorm'

export class ClassroomRepository implements IClassroomRepository {
  private repository: Repository<Classroom>

  constructor() {
    this.repository = appDataSource.getRepository(Classroom)
  }

  async findAll(page: number, limit: number): Promise<IClassroom[]> {
    return this.repository.find({
      skip: (page - 1) * limit,
      take: limit,
    })
  }

  async findById(id: string): Promise<IClassroom | null> {
    return this.repository.findOne({
      where: { id },
    })
  }

  async create(Classroom: IClassroom): Promise<IClassroom> {
    return this.repository.save(Classroom)
  }

  async update(Classroom: IClassroom): Promise<IClassroom> {
    return this.repository.save(Classroom)
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id)
  }
}
