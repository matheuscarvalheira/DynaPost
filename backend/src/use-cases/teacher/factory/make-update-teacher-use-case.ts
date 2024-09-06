import { TeacherRepository } from '@/repositories/typeorm/teacher.repository'
import { UpdateTeacherUseCase } from '../update-teacher'

export function makeUpdateTeacherUseCase() {
  const teacherRepository = new TeacherRepository()

  const updateTeacherUseCase = new UpdateTeacherUseCase(teacherRepository)

  return updateTeacherUseCase
}
