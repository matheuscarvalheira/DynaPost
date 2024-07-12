import { ITeacherRepository } from '@/repositories/teacher.repository.interface'

export class FindAllTeachersUseCase {
  constructor(private teacherRepository: ITeacherRepository) {}

  async handler(page: number, limit: number) {
    return this.teacherRepository.findAll(page, limit)
  }
}
