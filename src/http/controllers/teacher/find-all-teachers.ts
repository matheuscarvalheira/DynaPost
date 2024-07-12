import { makeFindAllTeachersUseCase } from '@/use-cases/factory/make-find-all-teacher-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function findAllTeachers(request: Request, response: Response) {
  const registerQuerySchema = z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10),
  })

  const { page, limit } = registerQuerySchema.parse(request.query)

  const findAllTeachersUseCase = makeFindAllTeachersUseCase()

  const teachers = await findAllTeachersUseCase.handler(page, limit)

  return response.status(200).json(teachers)
}
