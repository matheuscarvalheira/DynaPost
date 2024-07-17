import { makeCreateStudentUseCase } from '@/use-cases/student/factory/make-create-student-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function create(request: Request, response: Response) {
  const registerBodySchema = z.object({
    name: z.string(),
    active: z.boolean(),
  })

  const { name, active } = registerBodySchema.parse(request.body)

  const createStudentUseCase = makeCreateStudentUseCase()

  const student = await createStudentUseCase.handler({
    name,
    active,
  })

  return response.status(201).json(student)
}
