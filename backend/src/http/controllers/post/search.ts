import { makeSearchUseCase } from '@/use-cases/post/factory/make-serach-posts-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function search(req: Request, res: Response) {
  const searchBodySchema = z.object({
    q: z.string(),
  })

  const { q } = searchBodySchema.parse(req.query)

  const searchUseCase = makeSearchUseCase()

  const results = await searchUseCase.handler(q)

  return res.status(200).json(results)
}
