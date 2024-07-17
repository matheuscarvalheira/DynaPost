import request from 'supertest'
import { app } from '@/app'
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

describe('teacher route test', () => {
  test('post route for create a teacher', async () => {
    const teacher = {
      name: 'Carlos Almeida',
      active: true,
    }

    const response = await request(app).post('/teacher').send(teacher)

    expect(response.status).toBe(201)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body).toHaveProperty('createdAt')
    expect(response.body).toHaveProperty('modifiedAt')
  })
})
