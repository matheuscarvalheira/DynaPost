import { makeUpdateStudentUseCase } from '@/use-cases/student/factory/make-update-student-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function update(request: Request, response: Response) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  })

  const { id } = registerParamsSchema.parse(request.params)

  const registerBodySchema = z.object({
    name: z.string(),
    active: z.boolean().optional(),
  })

  const { name, active } = registerBodySchema.parse(request.body)

  const updateStudentUseCase = makeUpdateStudentUseCase()

  const student = await updateStudentUseCase.handler({
    id,
    name,
    active,
  })

  return response.status(200).json(student)
}
