import { Repository } from 'typeorm'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { IClassroomStudentRepository } from '../classroom-student.interface'
import { ClassroomStudent } from '@/entities/classroom-student.entity'
import { IClassroomStudent } from '@/entities/models/classroom-student.interface'

export class ClassroomStudentRepository implements IClassroomStudentRepository {
  private repository: Repository<ClassroomStudent>

  constructor() {
    this.repository = appDataSource.getRepository(ClassroomStudent)
  }

  async addStudentClassroomPair(pair: IClassroomStudent): Promise<void> {
    await this.repository.save(pair)
  }

  async removeStudentFromClassroom(pair: IClassroomStudent): Promise<void> {
    await this.repository.delete(pair)
  }
}
