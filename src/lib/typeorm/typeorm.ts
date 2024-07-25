import { DataSource } from 'typeorm'
import { env } from '@/env'
import { Post } from '@/entities/post.entity'
import { PostTeacher } from '@/entities/post-teacher.entity'
import { PostClassroom } from '@/entities/post-classroom.entity'
import { Teacher } from '@/entities/teacher.entity'
import { Classroom } from '@/entities/classroom.entity'
import { Student } from '@/entities/student.entity'
import { ClassroomStudent } from '@/entities/classroom-student.entity'
import { ClassroomTeacher } from '@/entities/classroom-teacher.entity'
import { Teachers1721343556020 } from '@/migrations/1721343556020-teachers'
import { Students1721344741826 } from '@/migrations/1721344741826-students'
import { Classrooms1721345439928 } from '@/migrations/1721345439928-classrooms'
import { Posts1721346255409 } from '@/migrations/1721346255409-posts'
import { ClassroomTeacher1721687608034 } from '@/migrations/1721687608034-classroomTeacher'
import { ClassroomStudent1721688305255 } from '@/migrations/1721688305255-classroomStudent'
import { PostClassroom1721774946659 } from '@/migrations/1721774946659-postClassroom'
import { PostTeacher1721775787161 } from '@/migrations/1721775787161-postTeacher'
import { DbCreation1721343556019 } from '@/migrations/1721343556019-dbCreation'

export const appDataSource: DataSource = new DataSource({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: env.DATABASE_TYPE as any,
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: [
    Post,
    Teacher,
    Classroom,
    Student,
    PostClassroom,
    PostTeacher,
    ClassroomStudent,
    ClassroomTeacher,
  ],
  migrations: [
    DbCreation1721343556019,
    Teachers1721343556020,
    Students1721344741826,
    Classrooms1721345439928,
    Posts1721346255409,
    ClassroomTeacher1721687608034,
    ClassroomStudent1721688305255,
    PostClassroom1721774946659,
    PostTeacher1721775787161,
  ],
  synchronize: env.NODE_ENV === 'development',
  logging: env.NODE_ENV === 'development',
})
