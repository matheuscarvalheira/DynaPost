import { ClassroomTeacherRepository } from '@/repositories/typeorm/classroom-teacher.repository'
import { RemoveTeacherClassroomUseCase } from '../remove-teacher-from-classroom'

export function makeRemoveTeacherClassroomUseCase() {
  const classroomTeacher = new ClassroomTeacherRepository()
  const removeTeacherClassroom = new RemoveTeacherClassroomUseCase(
    classroomTeacher,
  )

  return removeTeacherClassroom
}
