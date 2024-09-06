import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  Unique,
} from 'typeorm'
import { IClassroomTeacher } from './models/classroom-teacher.interface'
import { Teacher } from './teacher.entity'
import { Classroom } from './classroom.entity'

@Entity('classroom_teacher')
@Unique(['classroom_id', 'teacher_id'])
export class ClassroomTeacher implements IClassroomTeacher {
  @PrimaryColumn('uuid')
  classroom_id: string

  @PrimaryColumn('uuid')
  teacher_id: string

  @ManyToOne(() => Teacher, (teacher) => teacher.classroomTeachers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'teacher_id' })
  classroomTeacher: Teacher

  @OneToOne(() => Classroom, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'classroom_id' })
  classroom: Classroom
}
