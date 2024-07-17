import { ClassroomRepository } from '@/repositories/typeorm/classroom.repository'
import { CreateClassroomUseCase } from '../create-classroom'

export function makeCreateClassroomUseCase() {
  const classroomRepository = new ClassroomRepository()
  const createClassroomUseCase = new CreateClassroomUseCase(classroomRepository)

  return createClassroomUseCase
}
