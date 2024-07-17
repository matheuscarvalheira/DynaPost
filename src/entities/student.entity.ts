import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { IStudent } from './models/student.interface'
import { env } from '@/env'
import { Classroom } from './classroom.entity'
import { ClassroomStudent } from './classroom-student.entity'

@Entity('student')
export class Student implements IStudent {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id?: string | undefined

  @Column({
    name: 'name',
    type: 'varchar',
  })
  name: string

  @Column({
    name: 'active',
    type: env.NODE_ENV === 'test' ? 'integer' : 'boolean',
  })
  active: boolean

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

  @ManyToMany(() => Classroom, (classroom) => classroom.students)
  classrooms: Classroom[]

  @OneToMany(
    () => ClassroomStudent,
    (classroomStudent) => classroomStudent.student,
  )
  classroomStudents: ClassroomStudent[]
}
