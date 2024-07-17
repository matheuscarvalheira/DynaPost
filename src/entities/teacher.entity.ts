import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ITeacher } from './models/teacher.interface'
import { PostTeacher } from './post-teacher.entity'
import { env } from '@/env'

@Entity({
  name: 'teacher',
})
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

  @Column({
    name: 'created_at',
    type: env.NODE_ENV === 'test' ? 'datetime' : 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date

  @Column({
    name: 'modified_at',
    type: env.NODE_ENV === 'test' ? 'datetime' : 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  modifiedAt: Date

  @OneToMany(() => PostTeacher, (postTeacher) => postTeacher.teacher)
  posts: PostTeacher[]
}
