import { DataSource } from 'typeorm'
import { env } from '@/env'
import { Post } from '@/entities/post.entity'
import { MockPostWithTeachersAndClassroom1720873181668 } from '@/migrations/1720873181668-mockPostWithTeachersAndClassroom'

export const appDataSource = new DataSource({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: env.DATABASE_TYPE as any,
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: [Post],
  migrations: [MockPostWithTeachersAndClassroom1720873181668],
  synchronize: false,
  logging: env.NODE_ENV === 'development',
})

appDataSource
  .initialize()
  .then(() => {
    if (env.NODE_ENV === 'development')
      console.log('Database with typeorm connected')
  })
  .catch((error) => {
    if (env.NODE_ENV === 'development')
      console.error('Error connecting to database with typeorm', error)
  })
