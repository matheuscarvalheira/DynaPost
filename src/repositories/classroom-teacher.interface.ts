import { IClassroomTeacher } from '@/entities/models/classroom-teacher.interface'

export interface IClassroomTeacherRepository {
  addTeacherClassroomPair(pair: IClassroomTeacher): Promise<void>
  removeTeacherFromClassroom(pair: IClassroomTeacher): Promise<void>
}
