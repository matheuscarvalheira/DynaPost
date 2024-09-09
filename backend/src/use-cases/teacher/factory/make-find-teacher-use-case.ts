import { TeacherRepository } from '@/repositories/typeorm/teacher.repository'
import { FindTeacherUseCase } from '../find-teacher'

export function makeFindTeacherUseCase() {
  const teacherRepository = new TeacherRepository()
  const findTeacherUseCase = new FindTeacherUseCase(teacherRepository)

  return findTeacherUseCase
}
