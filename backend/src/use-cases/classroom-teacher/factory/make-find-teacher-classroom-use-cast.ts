import { ClassroomTeacherRepository } from '@/repositories/typeorm/classroom-teacher.repository'
import { FindTeacherClassroomUseCase } from '../find-teacher-classrooms'

export function makeCreateFindTeachersClassroomsUseCase() {
  const classroomTeacherRepository = new ClassroomTeacherRepository()

  const findTeachersClassroomsUseCase = new FindTeacherClassroomUseCase(
    classroomTeacherRepository,
  )

  return findTeachersClassroomsUseCase
}
