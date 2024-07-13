import request from 'supertest'
import { app } from '@/app'
import { PostRepository } from '@/repositories/typeorm/post.repository'

jest.mock('@/repositories/typeorm/post.repository')

let mockCreate: jest.SpyInstance

const createdObject = {
  title: 'Post 1',
  body: 'Conteudo da postagem',
  published: true,
  id: '3b72dbe7-71c1-458b-aa9d-52d3557a6769',
}

describe('base get route', () => {
  beforeEach(async () => {
    mockCreate = jest
      .spyOn(PostRepository.prototype, 'create')
      .mockResolvedValue(createdObject)
  })

  afterEach(async () => {
    mockCreate.mockRestore()
  })

  test('base route without params', async () => {
    const postedObject = {
      title: 'Post 1',
      body: 'Conteudo da postagem',
      published: true,
    }

    const response = await request(app).post(`/posts`).send(postedObject)
    expect(response.status).toBe(201)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body).toEqual(createdObject)
    expect(mockCreate).toHaveBeenCalledTimes(1)
    expect(mockCreate).toHaveBeenCalledWith(postedObject)
  })
})
