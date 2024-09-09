import { IClassroom } from '@/entities/models/classroom.interface'
import { IClassroomRepository } from '@/repositories/classroom.repository.interface'

export class CreateClassroomUseCase {
  constructor(private ClassroomRepository: IClassroomRepository) {}

  async handler(Classroom: IClassroom): Promise<IClassroom> {
    return this.ClassroomRepository.create(Classroom)
  }
}
