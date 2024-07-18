import {
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { PostClassroom } from './post-classroom.entity'
import { IClassroom } from './models/classroom.interface'
import { env } from '@/env'
import { ClassroomStudent } from './classroom-student.entity'

@Entity('classroom')
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

  @OneToMany(
    () => ClassroomStudent,
    (classroomStudent) => classroomStudent.classroom,
  )
  students: ClassroomStudent[]
}
