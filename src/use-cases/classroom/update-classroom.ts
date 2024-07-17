import { IClassroom } from '@/entities/models/classroom.interface'
import { IClassroomRepository } from '@/repositories/classroom.repository.interface'

export class UpdateClassroomUseCase {
  constructor(private classroomRepository: IClassroomRepository) {}

  async handler(classroom: IClassroom) {
    return this.classroomRepository.update(classroom)
  }
}
