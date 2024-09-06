import { makeUpdateClassroomUseCase } from '@/use-cases/classroom/factory/make-update-classroom-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function update(request: Request, response: Response) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  })

  const { id } = registerParamsSchema.parse(request.params)

  const registerBodySchema = z.object({
    name: z.string(),
  })

  const { name } = registerBodySchema.parse(request.body)

  const updateClassroomUseCase = makeUpdateClassroomUseCase()

  const classroom = await updateClassroomUseCase.handler({
    id,
    name,
  })

  return response.status(200).json(classroom)
}
