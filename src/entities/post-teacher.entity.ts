import { Entity, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm'
import { Post } from './post.entity'
import { Teacher } from './teacher.entity'
import { IPostTeacher } from './models/post-teacher.interface'

@Entity('post_teacher')
export class PostTeacher implements IPostTeacher {
  @PrimaryColumn('uuid')
  post_id: string

  @PrimaryColumn('uuid')
  teacher_id: string

  @ManyToOne(() => Post, (post) => post.postTeachers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'post_id' })
  post: Post

  @ManyToOne(() => Teacher, (teacher) => teacher.posts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'teacher_id' })
  teacher: Teacher
}
