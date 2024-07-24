import { IClassroomStudent } from '@/entities/models/classroom-student.interface'
import { IClassroomStudentRepository } from '@/repositories/classroom-student.interface'

export class CreateClassroomStudentUseCase {
  constructor(
    private ClassroomStudentRepository: IClassroomStudentRepository,
  ) {}

  async handler(data: IClassroomStudent): Promise<void> {
    return this.ClassroomStudentRepository.addStudentClassroomPair(data)
  }
}
