import request from 'supertest'
import { app } from '@/app'
import { PostRepository } from '@/repositories/typeorm/post.repository'
import { mockData } from './testData'

jest.mock('@/repositories/typeorm/post.repository')

let mockUpdate: jest.SpyInstance

const mockBaseData = mockData[0]
const changedData = { ...mockBaseData }
changedData.body = 'new body text'
changedData.published = false

describe('update post', () => {
  beforeEach(() => {
    mockUpdate = jest
      .spyOn(PostRepository.prototype, 'update')
      .mockResolvedValue(changedData)
  })

  afterEach(() => {
    mockUpdate.mockRestore()
  })

  test('changes value on update', async () => {
    const response = await request(app)
      .put(`/posts/${mockBaseData.id}`)
      .send(changedData)
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body).toEqual(changedData)
  })
})
