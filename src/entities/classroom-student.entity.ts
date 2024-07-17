import { Entity, JoinColumn, ManyToOne, PrimaryColumn, Unique } from 'typeorm'
import { IClassroomStudent } from './models/classroom-student.interface'
import { Classroom } from './classroom.entity'
import { Student } from './student.entity'

@Entity('classroom_student')
@Unique(['classroom_id', 'student_id'])
export class ClassroomStudent implements IClassroomStudent {
  @PrimaryColumn('uuid')
  classroom_id: string

  @PrimaryColumn('uuid')
  student_id: string

  @ManyToOne(() => Classroom, (classroom) => classroom.classroomStudents, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'classroom_id' })
  classroom: Classroom

  @ManyToOne(() => Student, (student) => student.classroomStudents, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'student_id' })
  student: Student
}
