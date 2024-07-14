import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { PostTeacher } from './post-teacher.entity'

@Entity('teacher')
export class Teacher {
  @PrimaryGeneratedColumn('uuid')
  id?: string | undefined

  @OneToMany(() => PostTeacher, (postTeacher) => postTeacher.teacher)
  posts: PostTeacher[]
}
