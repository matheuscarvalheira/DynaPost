import { TeacherRepository } from '@/repositories/typeorm/teacher.repository'
import { CreateTeacherUseCase } from '../create-teacher'

export function makeCreateTeacherUseCase() {
  const teacherRepository = new TeacherRepository()
  const createTeacherUseCase = new CreateTeacherUseCase(teacherRepository)

  return createTeacherUseCase
}
