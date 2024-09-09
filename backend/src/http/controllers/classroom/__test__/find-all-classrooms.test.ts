/* eslint-disable @typescript-eslint/no-var-requires */
import request from 'supertest'
import { app } from '@/app'
import { v4 as uuidv4 } from 'uuid'
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

describe('find all classrooms tests', () => {
  beforeEach(async () => {
    await appDataSource.initialize()
    appDataSource.query(
      `INSERT INTO classroom (id, name) VALUES 
            ('${uuidv4()}', 'Aula de typescript'),
            ('${uuidv4()}', 'Aula de testes'),
            ('${uuidv4()}', 'Aula de node'),
            ('${uuidv4()}', 'Aula de nestjs')
          `,
    )
  })

  afterEach(async () => {
    await appDataSource.destroy()
  })

  test('returns all objects inserted into database', async () => {
    const response = await request(app).get('/classrooms')
    expect(response.body.length).toBe(4)
  })
})
