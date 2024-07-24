import { Repository } from 'typeorm'
import { IClassroomTeacherRepository } from '../classroom-teacher.interface'
import { ClassroomTeacher } from '@/entities/classroom-teacher.entity'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { IClassroomTeacher } from '@/entities/models/classroom-teacher.interface'

export class ClassroomTeacherRepository implements IClassroomTeacherRepository {
  private repository: Repository<ClassroomTeacher>

  constructor() {
    this.repository = appDataSource.getRepository(ClassroomTeacher)
  }

  async addTeacherClassroomPair(pair: ClassroomTeacher): Promise<void> {
    await this.repository.save(pair)
  }

  async removeTeacherFromClassroom(data: IClassroomTeacher): Promise<void> {
    await this.repository.delete(data)
  }
}
