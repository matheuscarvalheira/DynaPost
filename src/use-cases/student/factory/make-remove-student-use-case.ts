import { StudentRepository } from "@/repositories/typeorm/student.repository"
import { RemoveStudentUseCase } from "../remove-student"

export function makeRemoveStudentUseCase() {
  const studentRepository = new StudentRepository()
  const deleteStudentUseCase = new RemoveStudentUseCase(studentRepository)

  return deleteStudentUseCase
}
