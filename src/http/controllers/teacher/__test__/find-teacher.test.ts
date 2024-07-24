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

describe('find one teacher tests', () => {
  const teacher_id = 'b1871c08-3bf3-48f7-bc24-49e25cfe1990'
  const teacher_name = 'Fulano'

  beforeEach(async () => {
    await appDataSource.initialize()
    appDataSource.query(
      `INSERT INTO teacher (id, name) VALUES 
            ('${teacher_id}', '${teacher_name}'),
            ('${uuidv4()}', 'Fulana'),
            ('${uuidv4()}', 'Coisa'),
            ('${uuidv4()}', 'Coiso')
          `,
    )
  })

  afterEach(async () => {
    await appDataSource.destroy()
  })

  test('returns one teacher from database', async () => {
    const response = await request(app).get(`/teachers/${teacher_id}`)
    expect(response.body.name).toBe(teacher_name)
  })
})
