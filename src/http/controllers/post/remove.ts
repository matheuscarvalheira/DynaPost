import { makeRemovePostUseCase } from '@/use-cases/factory/make-remove-post-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function remove(req: Request, res: Response) {
  const removeParamsSchema = z.object({
    id: z.coerce.string(),
  })

  const { id } = removeParamsSchema.parse(req.params)

  const removePostUseCase = makeRemovePostUseCase()

  await removePostUseCase.handler(id)

  return res.status(204).send()
}
