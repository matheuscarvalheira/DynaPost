import { IClassroomRepository } from '@/repositories/classroom.repository.interface'

export class RemoveClassroomUseCase {
  constructor(private classroomRepository: IClassroomRepository) {}

  async handler(classroomId: string): Promise<void> {
    return this.classroomRepository.delete(classroomId)
  }
}
