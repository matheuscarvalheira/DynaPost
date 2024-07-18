/* eslint-disable @typescript-eslint/no-var-requires */
import request from 'supertest'
import { app } from '@/app'
import { postListQuery } from './testData'
import { appDataSource } from '@/lib/typeorm/typeorm'

jest.mock('@/lib/typeorm/typeorm.ts', () => {
  const { DataSource } = require('typeorm')
  const { Post } = require('@/entities/post.entity')
  const { Teacher } = require('@/entities/teacher.entity')
  const { Classroom } = require('@/entities/classroom.entity')
  const { PostClassroom } = require('@/entities/post-classroom.entity')
  const { PostTeacher } = require('@/entities/post-teacher.entity')
  const { ClassroomStudent } = require('@/entities/classroom-student.entity')
  const { ClassroomTeacher } = require('@/entities/classroom-teacher.entity')

  const mockDataSource = new DataSource({
    type: 'sqlite',
    database: ':memory:',
    entities: [
      Post,
      Teacher,
      Classroom,
      PostClassroom,
      PostTeacher,
      ClassroomStudent,
      ClassroomTeacher,
    ],
    synchronize: true,
  })

  return {
    appDataSource: mockDataSource,
  }
})

describe('remove post', () => {
  beforeAll(async () => {
    await appDataSource.initialize()
    appDataSource.query(postListQuery)
  })

  afterAll(async () => {
    await appDataSource.destroy()
  })

  test('remove values from base', async () => {
    const postId = '854a21e4-24e0-48c9-ad83-cac94ce5ea26'

    const response = await request(app).delete(`/posts/${postId}`)
    expect(response.status).toBe(204)
    expect(response.body).toStrictEqual({})

    const queryPost = await appDataSource.query(
      `select * from post where id = '${postId}'`,
    )
    expect(queryPost.length).toBe(0)
  })
})
