import { makeFindAllAdminUseCase } from '@/use-cases/post/factory/make-find-all-admin-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function findAllAdmin(req: Request, res: Response) {
  const registerQuerySchema = z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10),
  })

  const { page, limit } = registerQuerySchema.parse(req.query)

  const findAllAdminUseCase = makeFindAllAdminUseCase()

  const posts = await findAllAdminUseCase.handler(page, limit)

  return res.status(200).json(posts)
}
