import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { ITeacher } from './models/teacher.interface'
import { PostTeacher } from './post-teacher.entity'
import { env } from '@/env'
import { ClassroomTeacher } from './classroom-teacher.entity'

@Entity('teacher')
export class Teacher implements ITeacher {
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

  @OneToMany(() => PostTeacher, (postTeacher) => postTeacher.teacher)
  posts: PostTeacher[]

  @OneToMany(
    () => ClassroomTeacher,
    (classroomTeacher) => classroomTeacher.classroomTeacher,
  )
  classroomTeachers: ClassroomTeacher[]
}
