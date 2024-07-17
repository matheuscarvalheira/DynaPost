import { ITeacherRepository } from '@/repositories/teacher.repository.interface'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'

export class FindTeacherUseCase {
  constructor(private teacherRepository: ITeacherRepository) {}

  async handler(id: string) {
    const teacher = await this.teacherRepository.findById(id)

    if (!teacher) throw new ResourceNotFoundError()

    return teacher
  }
}
