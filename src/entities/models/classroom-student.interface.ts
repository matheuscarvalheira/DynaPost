import { IClassroom } from './classroom.interface'
import { IStudent } from './student.interface'

export interface IClassroomStudent {
  classroom_id: IClassroom['id']
  student_id: IStudent['id']
}
