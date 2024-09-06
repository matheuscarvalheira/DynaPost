import { IClassroom } from './classroom.interface'
import { ITeacher } from './teacher.interface'

export interface IClassroomTeacher {
  classroom_id: IClassroom['id']
  teacher_id: ITeacher['id']
}
