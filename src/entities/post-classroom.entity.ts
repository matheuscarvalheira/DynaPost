import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { Post } from './post.entity'
import { Classroom } from './classroom.entity'

@Entity('post_classroom')
export class PostClassroom {
  @PrimaryColumn('uuid')
  post_id: string

  @PrimaryColumn('uuid')
  classroom_id: string

  @ManyToOne(() => Post, (post) => post.postClassrooms, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'post_id' })
  post: Post

  @ManyToOne(() => Classroom, (classroom) => classroom.posts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'classroom_id' })
  classroom: Classroom
}
