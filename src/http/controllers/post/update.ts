import { makeUpdatePostUseCase } from '@/use-cases/post/factory/make-update-post-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function update(request: Request, response: Response) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  })

  const { id } = registerParamsSchema.parse(request.params)

  const registerBodySchema = z.object({
    title: z.string(),
    body: z.string(),
    published: z.boolean(),
  })

  const { title, body, published } = registerBodySchema.parse(request.body)

  const updatePostUseCase = makeUpdatePostUseCase()

  const post = await updatePostUseCase.handler({
    id,
    title,
    body,
    published,
  })

  return response.status(200).json(post)
}
