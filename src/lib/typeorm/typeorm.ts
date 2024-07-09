import { DataSource } from 'typeorm'
import { env } from '@/env'
import { Post } from '@/entities/post.entity'

export const appDataSource = new DataSource({
  type: 'postgres',
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: [Post],
  migrations: [],
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
