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
  const {
    MockPostWithTeachersAndClassroom1720873181668,
  } = require('@/migrations/1720873181668-mockPostWithTeachersAndClassroom')

  const mockDataSource = new DataSource({
    type: 'sqlite',
    database: ':memory:',
    entities: [Post, Teacher, Classroom, PostClassroom, PostTeacher],
    migrations: [MockPostWithTeachersAndClassroom1720873181668],
    synchronize: true,
  })

  return {
    appDataSource: mockDataSource,
  }
})

describe('base get route', () => {
  beforeAll(async () => {
    await appDataSource.initialize()
    appDataSource.query(mockFindAllQuery)
  })

  afterAll(async () => {
    await appDataSource.destroy()
  })

  test('base route without params returns 10 results', async () => {
    const DEFAULT_LIMIT = 10

    const response = await request(app).get(`/posts`)
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body.length).toEqual(DEFAULT_LIMIT)
  })

  test('return a list of 5 items', async () => {
    const PAGE = 1
    const LIMIT = 5

    const response = await request(app).get(
      `/posts?limit=${LIMIT}&page=${PAGE}`,
    )
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body.length).toEqual(LIMIT)
  })

  test('page 2 returns a list of 4 items', async () => {
    const PAGE = 2

    const response = await request(app).get(`/posts?page=${PAGE}`)
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body.length).toEqual(4)
  })
})
