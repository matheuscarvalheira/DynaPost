import { Repository } from 'typeorm'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { IClassroomStudentRepository } from '../classroom-student.interface'
import { ClassroomStudent } from '@/entities/classroom-student.entity'
import { IClassroomStudent } from '@/entities/models/classroom-student.interface'
import { IClassroom } from '@/entities/models/classroom.interface'
import { Classroom } from '@/entities/classroom.entity'

export class ClassroomStudentRepository implements IClassroomStudentRepository {
  private repository: Repository<ClassroomStudent>
  private classroomRepository: Repository<Classroom>

  constructor() {
    this.repository = appDataSource.getRepository(ClassroomStudent)
    this.classroomRepository = appDataSource.getRepository(Classroom)
  }

  async addStudentClassroomPair(pair: IClassroomStudent): Promise<void> {
    await this.repository.save(pair)
  }

  async findClassroomByStudentId(id: string): Promise<(IClassroom | null)[]> {
    const classrooms = await this.repository.find({
      where: { student_id: id },
    })

    const classroomIds = classrooms.map((classroom) => classroom.classroom_id)

    const classroomsData = await Promise.all(
      classroomIds.map(
        async (id) => await this.classroomRepository.findOne({ where: { id } }),
      ),
    )

    return classroomsData
  }

  async removeStudentFromClassroom(pair: IClassroomStudent): Promise<void> {
    await this.repository.delete(pair)
  }
}
