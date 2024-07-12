import { ITeacherRepository } from '@/repositories/teacher.repository.interface'

export class DeleteTeacherUseCase {
  constructor(private teacherRepository: ITeacherRepository) {}

  async handler(id: string): Promise<void> {
    return this.teacherRepository.delete(id)
  }
}
