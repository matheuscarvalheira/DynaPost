import { FindStudentClassroomUseCase } from '../find-student-classrooms'
import { ClassroomStudentRepository } from '@/repositories/typeorm/classroom-student.repository'

export function makeCreateFindStudentsClassroomsUseCase() {
  const classroomStudentRepository = new ClassroomStudentRepository()

  const findStudentsClassroomsUseCase = new FindStudentClassroomUseCase(
    classroomStudentRepository,
  )

  return findStudentsClassroomsUseCase
}
