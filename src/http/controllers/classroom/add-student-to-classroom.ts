import { makeCreateClassroomStudentUseCase } from '@/use-cases/classroom-student/factory/make-add-student-to-classroom'
import { z } from 'zod'
import { Request, Response } from 'express'

export async function addStudentToClassroom(
  request: Request,
  response: Response,
) {
  const registerBodySchema = z.object({
    student_id: z.string(),
    classroom_id: z.string(),
  })

  const { classroom_id, student_id } = registerBodySchema.parse(request.body)

  const createClassroomStudentUseCase = makeCreateClassroomStudentUseCase()

  const classroom = await createClassroomStudentUseCase.handler({
    classroom_id,
    student_id,
  })

  return response.status(201).json(classroom)
}
