import request from 'supertest'
import { app } from '@/app'
import { PostRepository } from '@/repositories/typeorm/post.repository'

jest.mock('@/repositories/typeorm/post.repository')

describe('Post get tests', () => {
  let mockFindAll: jest.SpyInstance

  beforeAll(async () => {
    mockFindAll = jest
      .spyOn(PostRepository.prototype, 'findAll')
      .mockResolvedValue([
        {
          title: 'aqui',
          body: 'teste',
        },
      ])
  })

  afterAll(async () => {
    mockFindAll.mockRestore()
  })

  test('responds with a list', async () => {
    const response = await request(app).get('/posts')
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body.length).toEqual(1)
  })
})
