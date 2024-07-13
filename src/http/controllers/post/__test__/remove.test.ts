import request from 'supertest'
import { app } from '@/app'
import { PostRepository } from '@/repositories/typeorm/post.repository'
import { mockData } from './testData'

jest.mock('@/repositories/typeorm/post.repository')

let mockDelete: jest.SpyInstance

describe('remove post', () => {
  beforeEach(() => {
    mockDelete = jest
      .spyOn(PostRepository.prototype, 'delete')
      .mockResolvedValue()
  })

  afterEach(() => {
    mockDelete.mockRestore()
  })

  test('remove values from base', async () => {
    const response = await request(app).delete(`/posts/${mockData[0].id}`)
    expect(response.status).toBe(204)
    expect(response.body).toStrictEqual({})
  })
})
