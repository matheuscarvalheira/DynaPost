import { IClassroomStudent } from '@/entities/models/classroom-student.interface'

export interface IClassroomStudentRepository {
  addStudentClassroomPair(pair: IClassroomStudent): Promise<void>
  removeStudentFromClassroom(pair: IClassroomStudent): Promise<void>
}
