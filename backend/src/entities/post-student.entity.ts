import { Entity, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm'
import { Post } from './post.entity'
import { Student } from './student.entity'
import { IPostStudent } from './models/post-student.interface'

@Entity('post_student')
export class PostStudent implements IPostStudent {
  @PrimaryColumn('uuid')
  post_id: string

  @PrimaryColumn('uuid')
  student_id: string

  @ManyToOne(() => Post, (post) => post.postStudents, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'post_id' })
  post: Post

  @ManyToOne(() => Student, (student) => student.posts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'student_id' })
  student: Student
}
