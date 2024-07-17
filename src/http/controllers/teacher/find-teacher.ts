import { makeFindTeacherUseCase } from '@/use-cases/teacher/factory/make-find-teacher-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function findTeacher(request: Request, response: Response) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  })

  const { id } = registerParamsSchema.parse(request.params)

  const findTeacherUseCase = makeFindTeacherUseCase()

  const teacher = await findTeacherUseCase.handler(id)

  return response.status(200).json(teacher)
}
