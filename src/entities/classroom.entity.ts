import {
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  OneToOne,
} from 'typeorm'
import { PostClassroom } from './post-classroom.entity'
import { IClassroom } from './models/classroom.interface'
import { env } from '@/env'
import { ClassroomTeacher } from './classroom-teacher.entity'
import { Student } from './student.entity'
import { ClassroomStudent } from './classroom-student.entity'

@Entity({ name: 'classroom' })
export class Classroom implements IClassroom {
  @PrimaryGeneratedColumn('uuid')
  id?: string | undefined

  @Column({
    name: 'name',
    type: 'varchar',
  })
  name: string

  @CreateDateColumn({
    name: 'created_at',
    type: env.NODE_ENV === 'test' ? 'datetime' : 'timestamp without time zone',
    nullable: false,
  })
  createdAt: Date

  @UpdateDateColumn({
    name: 'modified_at',
    type: env.NODE_ENV === 'test' ? 'datetime' : 'timestamp without time zone',
    nullable: false,
  })
  modifiedAt: Date

  @OneToMany(() => PostClassroom, (postClassroom) => postClassroom.classroom)
  posts: PostClassroom[]

  @OneToOne(() => ClassroomTeacher, (classroom) => classroom.classroom, {
    onDelete: 'CASCADE',
  })
  classroomTeacher: ClassroomTeacher

  @OneToMany(
    () => ClassroomStudent,
    (classroomStudent) => classroomStudent.classroom,
  )
  classroomStudents: ClassroomStudent[]

  @ManyToMany(() => Student, (student) => student.classrooms)
  @JoinTable({
    name: 'classroom_student',
    joinColumn: {
      name: 'classroom_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'student_id',
      referencedColumnName: 'id',
    },
  })
  students: Student[]
}
