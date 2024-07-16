import { makeFindStudentUseCase } from '@/use-cases/student/factory/make-find-student-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function findStudent(request: Request, response: Response) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  })

  const { id } = registerParamsSchema.parse(request.params)

  const findStudentUseCase = makeFindStudentUseCase()

  const student = await findStudentUseCase.handler(id)

  return response.status(200).json(student)
}
