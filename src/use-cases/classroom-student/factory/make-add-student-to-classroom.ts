import { ClassroomStudentRepository } from '@/repositories/typeorm/classroom-student.repository'
import { CreateClassroomStudentUseCase } from '../add-student-to-classroom'

export function makeCreateClassroomStudentUseCase() {
  const classroomStudent = new ClassroomStudentRepository()
  const createClassroomStudentUseCase = new CreateClassroomStudentUseCase(
    classroomStudent,
  )

  return createClassroomStudentUseCase
}
