import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { PostClassroom } from './post-classroom.entity'

@Entity('classroom')
export class Classroom {
  @PrimaryGeneratedColumn('uuid')
  id?: string | undefined

  @OneToMany(() => PostClassroom, (postClassroom) => postClassroom.classroom)
  posts: PostClassroom[]
}
