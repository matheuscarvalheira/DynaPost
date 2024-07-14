import { Entity, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm'
import { Post } from './post.entity'
import { Teacher } from './teacher.entity'

@Entity('post_teacher')
export class PostTeacher {
  @PrimaryColumn('uuid')
  post_id: string

  @PrimaryColumn('uuid')
  teacher_id: string

  @ManyToOne(() => Post, (post) => post.postTeachers, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'post_id' })
  post: Post

  @ManyToOne(() => Teacher, (teacher) => teacher.posts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'teacher_id' })
  teacher: Teacher
}
