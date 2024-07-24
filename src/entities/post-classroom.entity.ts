import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { Post } from './post.entity'
import { Classroom } from './classroom.entity'
import { IPostClassroom } from './models/post-classroom.interface'

@Entity('post_classroom')
export class PostClassroom implements IPostClassroom {
  @PrimaryColumn('uuid')
  post_id: string

  @PrimaryColumn('uuid')
  classroom_id: string

  @ManyToOne(() => Post, (post) => post.postClassrooms, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'post_id' })
  post: Post

  @ManyToOne(() => Classroom, (classroom) => classroom.posts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'classroom_id' })
  classroom: Classroom
}
