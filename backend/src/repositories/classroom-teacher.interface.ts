import { IClassroomTeacher } from '@/entities/models/classroom-teacher.interface'
import { IClassroom } from '@/entities/models/classroom.interface'

export interface IClassroomTeacherRepository {
  addTeacherClassroomPair(pair: IClassroomTeacher): Promise<void>
  findClassroomByTeacherId(id: string): Promise<(IClassroom | null)[]>
  removeTeacherFromClassroom(pair: IClassroomTeacher): Promise<void>
}
