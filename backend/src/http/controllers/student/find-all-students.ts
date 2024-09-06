import { makeFindAllStudentUseCase } from '@/use-cases/student/factory/make-find-all-students-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function findAllStudents(req: Request, res: Response) {
  const registerQuerySchema = z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10),
  })

  const { page, limit } = registerQuerySchema.parse(req.query)

  const findAllStudentsUseCase = makeFindAllStudentUseCase()

  const students = await findAllStudentsUseCase.handler(page, limit)

  return res.status(200).json(students)
}
