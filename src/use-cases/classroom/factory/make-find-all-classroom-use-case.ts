import { ClassroomRepository } from '@/repositories/typeorm/classroom.repository'
import { FindAllClassroomsUseCase } from '../find-all-classroom'

export function makeFindAllClassroomUseCase() {
  const classroomRepository = new ClassroomRepository()
  const findAllClassroomUseCase = new FindAllClassroomsUseCase(
    classroomRepository,
  )

  return findAllClassroomUseCase
}
