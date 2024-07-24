import { IClassroomTeacher } from '@/entities/models/classroom-teacher.interface'
import { IClassroomTeacherRepository } from '@/repositories/classroom-teacher.interface'

export class CreateClassroomTeacherUseCase {
  constructor(
    private ClassroomTeacherRepository: IClassroomTeacherRepository,
  ) {}

  async handler(pair: IClassroomTeacher): Promise<void> {
    return this.ClassroomTeacherRepository.addTeacherClassroomPair(pair)
  }
}
