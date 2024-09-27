import { IClassroomStudent } from '@/entities/models/classroom-student.interface'
import { IClassroom } from '@/entities/models/classroom.interface'

export interface IClassroomStudentRepository {
  addStudentClassroomPair(pair: IClassroomStudent): Promise<void>
  findClassroomByStudentId(id: string): Promise<(IClassroom | null)[]>
  removeStudentFromClassroom(pair: IClassroomStudent): Promise<void>
}
