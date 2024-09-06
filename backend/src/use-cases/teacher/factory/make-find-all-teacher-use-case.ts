import { TeacherRepository } from '@/repositories/typeorm/teacher.repository'
import { FindAllTeachersUseCase } from '../find-all-teachers'

export function makeFindAllTeachersUseCase() {
  const teacherRepository = new TeacherRepository()

  const findAllTeachersUseCase = new FindAllTeachersUseCase(teacherRepository)

  return findAllTeachersUseCase
}
