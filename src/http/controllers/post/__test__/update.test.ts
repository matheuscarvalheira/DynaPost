/* eslint-disable @typescript-eslint/no-var-requires */
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

describe('update post', () => {
  const postId = '854a21e4-24e0-48c9-ad83-cac94ce5ea26'
  const classroomId = 'b1871c08-3bf3-48f7-bc24-49e25cfe1990'
  const teacherId = '1f69a6f0-33b1-4e4d-992d-bf92f0f3069f'

  beforeEach(async () => {
    await appDataSource.initialize()
    await appDataSource.query(
      `INSERT INTO teacher (id) VALUES ('${teacherId}')`,
    )
    await appDataSource.query(
      `INSERT INTO classroom (id) VALUES ('${classroomId}')`,
    )
    await appDataSource.query(
      `INSERT INTO post (id, title, body, published, created_at, modified_at) VALUES
        ('${postId}', 'Lorem Ipsum 1', 'Lorem ipsum dolor sit amet 1, consectetur adipiscing elit.', 1, '${new Date().toISOString()}', '${new Date().toISOString()}')
      `,
    )
    await appDataSource.query(
      `INSERT INTO post_teacher (teacher_id, post_id) 
        VALUES('${teacherId}', '${postId}')
      `,
    )
    await appDataSource.query(`
      INSERT INTO post_classroom (post_id, classroom_id)
      VALUES('${postId}', '${classroomId}')
      `)
  })

  afterEach(async () => {
    await appDataSource.destroy()
  })

  test('changes value on update', async () => {
    const changedData = {
      id: postId,
      title: 'Post 1',
      body: 'Conteudo da postagem',
    }

    const response = await request(app)
      .put(`/posts/${postId}`)
      .send(changedData)
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body.title).toEqual(changedData.title)
    expect(response.body.body).toEqual(changedData.body)
  })
})
