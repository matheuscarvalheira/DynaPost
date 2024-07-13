import { makeCreatePostUseCase } from '@/use-cases/factory/make-create-post-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function create(request: Request, response: Response) {
  const registerBodySchema = z.object({
    title: z.string(),
    body: z.string(),
    published: z.boolean().optional(),
  })

  const { title, body, published } = registerBodySchema.parse(request.body)

  const createPostUseCase = makeCreatePostUseCase()

  const post = await createPostUseCase.handler({
    title,
    body,
    published,
  })

  return response.status(201).json(post)
}
