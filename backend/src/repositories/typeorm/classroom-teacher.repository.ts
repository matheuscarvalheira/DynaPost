import { EntityManager, Repository } from 'typeorm'
import { IClassroomTeacherRepository } from '../classroom-teacher.interface'
import { ClassroomTeacher } from '@/entities/classroom-teacher.entity'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { IClassroomTeacher } from '@/entities/models/classroom-teacher.interface'
import { IClassroom } from '@/entities/models/classroom.interface'
import { Classroom } from '@/entities/classroom.entity'

export class ClassroomTeacherRepository implements IClassroomTeacherRepository {
  private repository: Repository<ClassroomTeacher>
  private classroomRepository: Repository<Classroom>

  constructor(transactionManager?: EntityManager) {
    if (transactionManager) {
      this.repository = transactionManager.getRepository(ClassroomTeacher)
      this.classroomRepository = transactionManager.getRepository(Classroom)
    } else {
      this.repository = appDataSource.getRepository(ClassroomTeacher)
      this.classroomRepository = appDataSource.getRepository(Classroom)
    }
  }

  async addTeacherClassroomPair(pair: ClassroomTeacher): Promise<void> {
    await this.repository.save(pair)
  }

  async findClassroomByTeacherId(id: string): Promise<(IClassroom | null)[]> {
    const classrooms = await this.repository.find({ where: { teacher_id: id } })

    const classroomIds = classrooms.map((classrooms) => classrooms.classroom_id)

    const classroomData = await Promise.all(
      classroomIds.map(
        async (id) => await this.classroomRepository.findOne({ where: { id } }),
      ),
    )

    return classroomData
  }

  async removeTeacherFromClassroom(data: IClassroomTeacher): Promise<void> {
    await this.repository.delete(data)
  }
}
