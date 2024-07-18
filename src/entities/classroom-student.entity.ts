import { Entity, PrimaryColumn, Unique } from 'typeorm'
import { IClassroomStudent } from './models/classroom-student.interface'

@Entity('classroom_student')
@Unique(['classroom_id', 'student_id'])
export class ClassroomStudent implements IClassroomStudent {
  @PrimaryColumn('uuid')
  classroom_id: string

  @PrimaryColumn('uuid')
  student_id: string
}
