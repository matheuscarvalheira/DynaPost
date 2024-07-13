import request from 'supertest'
import { app } from '@/app'
import { PostRepository } from '@/repositories/typeorm/post.repository'
import { mockData } from './testData'

jest.mock('@/repositories/typeorm/post.repository')

const DEFAULT_LIMIT = 10

let mockFindAll: jest.SpyInstance

describe('base get route', () => {
  beforeEach(async () => {
    mockFindAll = jest
      .spyOn(PostRepository.prototype, 'findAll')
      .mockResolvedValue(mockData.splice(0, 10))
  })

  afterEach(async () => {
    mockFindAll.mockRestore()
  })

  test('base route without params', async () => {
    const response = await request(app).get(`/posts`)
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body.length).toEqual(DEFAULT_LIMIT)
  })
})

describe('route with params', () => {
  beforeEach(async () => {
    mockFindAll = jest
      .spyOn(PostRepository.prototype, 'findAll')
      .mockResolvedValue(mockData.splice(0, 5))
  })

  afterEach(async () => {
    mockFindAll.mockRestore()
  })

  test('return a list of 5 items', async () => {
    const page = 1
    const limit = 5

    const response = await request(app).get(
      `/posts?limit=${limit}&page=${page}`,
    )
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body.length).toEqual(limit)
  })
})
