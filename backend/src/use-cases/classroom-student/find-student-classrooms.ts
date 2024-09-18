import { IClassroomStudentRepository } from '@/repositories/classroom-student.interface'

export class FindStudentClassroomUseCase {
  constructor(private classroomRepository: IClassroomStudentRepository) {}

  async handler({ student_id }: { student_id: string }) {
    return this.classroomRepository.findClassroomByStudentId(student_id)
  }
}
