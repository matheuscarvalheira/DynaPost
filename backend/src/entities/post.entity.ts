import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { IPost } from './models/post.interface'
import { PostTeacher } from './post-teacher.entity'
import { PostClassroom } from './post-classroom.entity'
import { env } from '@/env'
import { PostStudent } from './post-student.entity'

@Entity('post')
export class Post implements IPost {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id?: string | undefined

  @Column({
    name: 'title',
    type: 'varchar',
    nullable: false,
  })
  title: string

  @Column({
    name: 'body',
    type: 'text',
    nullable: false,
  })
  body: string

  @Column({
    name: 'published',
    type: env.NODE_ENV === 'test' ? 'integer' : 'bool',
    default: true,
  })
  published: boolean

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

  @OneToMany(() => PostTeacher, (postTeacher) => postTeacher.post)
  postTeachers: PostTeacher[]

  @OneToMany(() => PostStudent, (postStudent) => postStudent.post)
  postStudents: PostStudent[]

  @OneToMany(() => PostClassroom, (postClassroom) => postClassroom.post)
  postClassrooms: PostClassroom[]
}
