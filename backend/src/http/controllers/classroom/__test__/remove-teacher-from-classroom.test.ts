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

describe('remove teacher from classroom tests', () => {
  const classroom_id = 'b1871c08-3bf3-48f7-bc24-49e25cfe1990'
  const teacher_id = 'f76651de-698b-441f-a589-3cebd5ddad95'

  beforeEach(async () => {
    await appDataSource.initialize()
    await appDataSource.query(
      `INSERT INTO classroom (id, name) VALUES ('${classroom_id}', 'Aula de portugues')`,
    )
    await appDataSource.query(
      `INSERT INTO teacher (id, name) VALUES ('${teacher_id}', 'Professor pasquale')`,
    )
    await appDataSource.query(
      `INSERT INTO classroom_teacher (classroom_id, teacher_id) VALUES ('${classroom_id}', '${teacher_id}')`,
    )
  })

  afterEach(async () => {
    await appDataSource.destroy()
  })

  test('removes teacher from classroom table', async () => {
    const response = await request(app).delete(
      `/classrooms/${classroom_id}/teachers/${teacher_id}`,
    )
    expect(response.status).toBe(204)

    const query = await appDataSource.query('select * from classroom_teacher')
    expect(query.length).toBe(0)
  })
})
