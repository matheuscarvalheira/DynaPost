import { ClassroomRepository } from '@/repositories/typeorm/classroom.repository'
import { FindClassroomUseCase } from '../find-classroom'

export function makeFindClassroomUseCase() {
  const classroomRepository = new ClassroomRepository()

  const findClassroomUseCase = new FindClassroomUseCase(classroomRepository)

  return findClassroomUseCase
}
