import { makeCreateClassroomTeacherUseCase } from '@/use-cases/classroom-teacher/factory/make-add-teacher-to-classroom'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function addTeacherToClassroom(
  request: Request,
  response: Response,
) {
  const registerBodySchema = z.object({
    teacher_id: z.string(),
    classroom_id: z.string(),
  })

  const { classroom_id, teacher_id } = registerBodySchema.parse(request.body)

  const createClassroomTeacherUseCase = makeCreateClassroomTeacherUseCase()

  await createClassroomTeacherUseCase.handler({
    classroom_id,
    teacher_id,
  })

  return response.status(201).json({ message: 'Sucess' })
}
