import { IClassroomStudent } from '@/entities/models/classroom-student.interface'
import { IClassroomStudentRepository } from '@/repositories/classroom-student.interface'

export class RemoveStudentFromClassroomUseCase {
  constructor(
    private ClassroomStudentRepository: IClassroomStudentRepository,
  ) {}

  async handler(pair: IClassroomStudent): Promise<void> {
    return this.ClassroomStudentRepository.removeStudentFromClassroom(pair)
  }
}
