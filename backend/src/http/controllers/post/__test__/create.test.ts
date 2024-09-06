/* eslint-disable @typescript-eslint/no-var-requires */
import request from 'supertest'
import { app } from '@/app'
import { appDataSource } from '@/lib/typeorm/typeorm'

jest.mock('@/lib/typeorm/typeorm.ts', () => {
  const { DataSource } = require('typeorm')
  const { Post } = require('@/entities/post.entity')
  const { Teacher } = require('@/entities/teacher.entity')
  const { Student } = require('@/entities/student.entity')
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
      Student,
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

describe('post route tests', () => {
  beforeEach(async () => {
    await appDataSource.initialize()
    appDataSource.query(
      `INSERT INTO teacher (id, name, active) VALUES ('1f69a6f0-33b1-4e4d-992d-bf92f0f3069f', 'Professor 1', 1)`,
    )
    appDataSource.query(
      `INSERT INTO classroom (id, name) VALUES ('b1871c08-3bf3-48f7-bc24-49e25cfe1990', 'Professor 2')`,
    )
  })

  afterEach(async () => {
    await appDataSource.destroy()
  })

  test('post route with an object', async () => {
    const postedObject = {
      title: 'Post 1',
      body: 'Conteudo da postagem',
      teacher_id: '1f69a6f0-33b1-4e4d-992d-bf92f0f3069f',
      classroom_id: 'b1871c08-3bf3-48f7-bc24-49e25cfe1990',
    }

    const response = await request(app).post(`/posts`).send(postedObject)
    expect(response.status).toBe(201)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body.title).toEqual(postedObject.title)
    expect(response.body.body).toEqual(postedObject.body)
    expect(response.body.teacher_id).toEqual(postedObject.teacher_id)
    expect(response.body.classroom_id).toEqual(postedObject.classroom_id)
    expect(response.body).toHaveProperty('createdAt')
    expect(response.body).toHaveProperty('modifiedAt')
  })
})
