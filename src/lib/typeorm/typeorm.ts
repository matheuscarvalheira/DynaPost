import { DataSource } from 'typeorm'
import { env } from '@/env'
import { Post } from '@/entities/post.entity'
import { PostTeacher } from '@/entities/post-teacher.entity'
import { PostClassroom } from '@/entities/post-classroom.entity'
import { Teacher } from '@/entities/teacher.entity'
import { Classroom } from '@/entities/classroom.entity'
import { MockPosts1720871000822 } from '@/migrations/1720871000822-mockPosts'
import { Student } from '@/entities/student.entity'

export const appDataSource: DataSource = new DataSource({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: env.DATABASE_TYPE as any,
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: [Post, Teacher, Classroom, Student, PostClassroom, PostTeacher],
  migrations: [MockPosts1720871000822],
  synchronize: env.NODE_ENV === 'development',
  logging: env.NODE_ENV === 'development',
})
