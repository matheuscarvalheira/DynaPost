import { makeDeleteTeacherUseCase } from '@/use-cases/teacher/factory/make-delete-teacher-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function deleteTeacher(request: Request, response: Response) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  })

  const { id } = registerParamsSchema.parse(request.params)

  const deleteTeacherUseCase = makeDeleteTeacherUseCase()

  await deleteTeacherUseCase.handler(id)

  return response.status(204).send()
}
