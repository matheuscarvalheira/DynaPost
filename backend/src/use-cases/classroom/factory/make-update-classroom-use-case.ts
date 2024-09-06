import { ClassroomRepository } from '@/repositories/typeorm/classroom.repository'
import { UpdateClassroomUseCase } from '../update-classroom'

export function makeUpdateClassroomUseCase() {
  const classroomRepository = new ClassroomRepository()

  const updateClassroomUseCase = new UpdateClassroomUseCase(classroomRepository)

  return updateClassroomUseCase
}
