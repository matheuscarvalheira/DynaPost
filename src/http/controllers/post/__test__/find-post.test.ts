/* eslint-disable @typescript-eslint/no-var-requires */
import request from 'supertest'
import { app } from '@/app'
import { mockFindAllQuery } from './testData'
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

describe('get one post', () => {
  beforeAll(async () => {
    await appDataSource.initialize()
    appDataSource.query(mockFindAllQuery)
  })

  afterAll(async () => {
    await appDataSource.destroy()
  })

  test('base route with one id', async () => {
    const postId = '854a21e4-24e0-48c9-ad83-cac94ce5ea26'

    const response = await request(app).get(`/posts/${postId}`)
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body.id).toEqual(postId)
  })
})
