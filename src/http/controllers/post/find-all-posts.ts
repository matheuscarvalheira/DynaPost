import { makeFindAllPostUseCase } from '@/use-cases/factory/make-find-all-post-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function findAllPosts(req: Request, res: Response) {
  const registerQuerySchema = z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10),
  })

  const { page, limit } = registerQuerySchema.parse(req.query)

  const findAllPostsUseCase = makeFindAllPostUseCase()

  const posts = await findAllPostsUseCase.handler(page, limit)

  return res.status(200).json(posts)
}
