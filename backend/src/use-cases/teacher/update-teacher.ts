import { ITeacher } from '@/entities/models/teacher.interface'
import { ITeacherRepository } from '@/repositories/teacher.repository.interface'

export class UpdateTeacherUseCase {
  constructor(private teacherRepository: ITeacherRepository) {}

  async handler(teacher: ITeacher) {
    return this.teacherRepository.update(teacher)
  }
}
