import { StudentRepository } from "@/repositories/typeorm/student.repository"
import { FindAllStudentsUseCase } from "../find-all-students"

export function makeFindAllStudentUseCase() {
  const studentRepository = new StudentRepository()
  const findAllStudentUseCase = new FindAllStudentsUseCase(studentRepository)

  return findAllStudentUseCase
}
