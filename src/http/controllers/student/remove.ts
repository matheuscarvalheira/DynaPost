import { makeRemoveStudentUseCase } from '@/use-cases/student/factory/make-remove-student-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function remove(req: Request, res: Response) {
  const removeParamsSchema = z.object({
    id: z.coerce.string(),
  })

  const { id } = removeParamsSchema.parse(req.params)

  const removeStudentUseCase = makeRemoveStudentUseCase()

  await removeStudentUseCase.handler(id)

  return res.status(204).send()
}
