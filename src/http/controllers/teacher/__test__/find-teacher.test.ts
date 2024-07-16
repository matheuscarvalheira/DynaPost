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

  const mockDataSource = new DataSource({
    type: 'sqlite',
    database: ':memory:',
    entities: [Post, Teacher, Classroom, PostClassroom, PostTeacher],
    synchronize: true,
  })

  return {
    appDataSource: mockDataSource,
  }
})

describe('find one teacher', () => {
  beforeAll(async () => {
    await appDataSource.initialize()
    appDataSource.query(postListQuery)
  })

  afterAll(async () => {
    await appDataSource.destroy()
  })

  test('route with one id', async () => {
    const teacherId = '92bb1eb9-5c5f-4cb0-b3d3-b7263135bfc6'

    const response = await request(app).get(`/teacher/${teacherId}`)

    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body.id).toEqual(teacherId)
  })
})
