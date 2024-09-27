import { TeacherRepository } from '@/repositories/typeorm/teacher.repository'
import { CreateTeacherUseCase } from '../create-teacher'
import { EntityManager } from 'typeorm'

export function makeCreateTeacherUseCase(transactionManager?: EntityManager) {
  const teacherRepository = new TeacherRepository(transactionManager)
  const createTeacherUseCase = new CreateTeacherUseCase(teacherRepository)

  return createTeacherUseCase
}
