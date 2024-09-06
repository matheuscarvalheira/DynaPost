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

describe('add student to classroom tests', () => {
  const classroom_id = 'b1871c08-3bf3-48f7-bc24-49e25cfe1990'
  const student_id = 'f76651de-698b-441f-a589-3cebd5ddad95'

  beforeEach(async () => {
    await appDataSource.initialize()
    await appDataSource.query(
      `INSERT INTO classroom (id, name) VALUES ('${classroom_id}', 'Aula de testes')`,
    )
    await appDataSource.query(
      `INSERT INTO student (id, name) VALUES ('${student_id}', 'Fulano')`,
    )
  })

  afterEach(async () => {
    await appDataSource.destroy()
  })

  test('adds student to classroom table', async () => {
    const response = await request(app).post('/classrooms/students').send({
      student_id,
      classroom_id,
    })
    expect(response.status).toBe(201)

    const query = await appDataSource.query('select * from classroom_student')
    expect(query.length).toBe(1)
  })
})
