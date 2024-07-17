import { makeUpdateTeacherUseCase } from '@/use-cases/factory/make-update-teacher-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function update(request: Request, response: Response) {
  const registerParamsSchema = z.object({
    id: z.string(),
  })

  const { id } = registerParamsSchema.parse(request.params)

  const registerBodySchema = z.object({
    name: z.string(),
    active: z.coerce.boolean(),
  })

  const { name, active } = registerBodySchema.parse(request.body)

  const updateTeacherUseCase = makeUpdateTeacherUseCase()

  const teacher = await updateTeacherUseCase.handler({
    id,
    name,
    active,
  })

  return response.status(200).send(teacher)
}
