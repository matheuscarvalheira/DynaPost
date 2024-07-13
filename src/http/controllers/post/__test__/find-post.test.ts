import request from 'supertest'
import { app } from '@/app'
import { PostRepository } from '@/repositories/typeorm/post.repository'
import { mockData } from './testData'

jest.mock('@/repositories/typeorm/post.repository')

let mockFindAll: jest.SpyInstance

describe('get one post', () => {
  beforeEach(async () => {
    mockFindAll = jest
      .spyOn(PostRepository.prototype, 'findById')
      .mockResolvedValue(mockData[0])
  })

  afterEach(async () => {
    mockFindAll.mockRestore()
  })

  test('base route with one id', async () => {
    const response = await request(app).get(`/posts/${mockData[0].id}`)
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body).toEqual(mockData[0])
  })
})
