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

describe('search route', () => {
  beforeAll(async () => {
    await appDataSource.initialize()
    appDataSource.query(postListQuery)
  })

  afterAll(async () => {
    await appDataSource.destroy()
  })

  test('return result for query of data in database', async () => {
    const response = await request(app).get(`/posts/search/?q=Ipsum 2`)

    expect(response.status).toBe(200)
    expect(response.body.length).toEqual(1)
  })

  test('return no results for data not in database', async () => {
    const response = await request(app).get(`/posts/search/?q=typescript 2`)

    expect(response.status).toBe(200)
    expect(response.body.length).toEqual(0)
  })
})
