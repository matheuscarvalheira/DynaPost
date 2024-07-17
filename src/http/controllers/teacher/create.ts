import { makeCreateTeacherUseCase } from '@/use-cases/teacher/factory/make-create-teacher-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function create(request: Request, response: Response) {
  const registerBodySchema = z.object({
    name: z.string(),
    active: z.boolean(),
  })

  const { name, active } = registerBodySchema.parse(request.body)

  const createTeacherUseCase = makeCreateTeacherUseCase()

  const teacher = await createTeacherUseCase.handler({
    name,
    active,
  })

  return response.status(201).json(teacher)
}
