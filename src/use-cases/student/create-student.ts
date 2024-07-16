import { IStudent } from "@/entities/models/student.interface";
import { IStudentRepository } from "@/repositories/student.repository.interface";

export class CreateStudentUseCase {
  constructor(private StudentRepository: IStudentRepository) {}

  async handler(student: IStudent): Promise<IStudent> {
    return this.StudentRepository.create(student)
  }
}
