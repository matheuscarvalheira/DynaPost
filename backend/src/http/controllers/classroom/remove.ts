import { makeRemoveClassroomUseCase } from '@/use-cases/classroom/factory/make-remove-classroom-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function remove(req: Request, res: Response) {
  const removeParamsSchema = z.object({
    id: z.coerce.string(),
  })

  const { id } = removeParamsSchema.parse(req.params)

  const removeClassroomUseCase = makeRemoveClassroomUseCase()

  await removeClassroomUseCase.handler(id)

  return res.status(204).send()
}
