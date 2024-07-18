import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { IStudent } from './models/student.interface'
import { env } from '@/env'
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
    default: true,
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

  @OneToMany(
    () => ClassroomStudent,
    (classroomStudent) => classroomStudent.student,
  )
  classroomStudent: ClassroomStudent[]
}
