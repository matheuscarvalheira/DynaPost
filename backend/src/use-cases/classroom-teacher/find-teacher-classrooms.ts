import { IClassroomTeacherRepository } from '@/repositories/classroom-teacher.interface'

export class FindTeacherClassroomUseCase {
  constructor(private classroomRepository: IClassroomTeacherRepository) {}

  async handler({ teacher_id }: { teacher_id: string }) {
    return this.classroomRepository.findClassroomByTeacherId(teacher_id)
  }
}
