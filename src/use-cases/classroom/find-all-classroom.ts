import { IClassroomRepository } from '@/repositories/classroom.repository.interface'

export class FindAllClassroomsUseCase {
  constructor(private classroomRepository: IClassroomRepository) {}

  async handler(page: number, limit: number) {
    return this.classroomRepository.findAll(page, limit)
  }
}
