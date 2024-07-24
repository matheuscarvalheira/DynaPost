import { RemoveStudentFromClassroomUseCase } from '../remove-student-from-classroom'
import { ClassroomStudentRepository } from '@/repositories/typeorm/classroom-student.repository'

export function makeRemoveStudentFromClassroomUseCase() {
  const classroomStudent = new ClassroomStudentRepository()
  const removeStudentFromClassroomUseCase =
    new RemoveStudentFromClassroomUseCase(classroomStudent)

  return removeStudentFromClassroomUseCase
}
