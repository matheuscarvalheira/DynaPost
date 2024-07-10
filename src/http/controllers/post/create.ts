import { makeCreatePostUseCase } from '@/use-cases/factory/make-create-post-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function create(request: Request, response: Response) {
  const registerBodySchema = z.object({
    title: z.string(),
    content: z.string(),
    author: z.string(),
    team: z.string(),
    createdAt: z.date(),
  })

  const { title, content, author, team, createdAt } = registerBodySchema.parse(
    request.body,
  )
  const createPostUseCase = makeCreatePostUseCase()

  const post = await createPostUseCase.handler({
    title,
    content,
    author,
    team,
    createdAt,
  })

  return response.status(201).json(post)
}
