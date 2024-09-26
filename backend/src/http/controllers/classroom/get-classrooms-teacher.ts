import { makeCreateFindTeachersClassroomsUseCase } from '@/use-cases/classroom-teacher/factory/make-find-teacher-classroom-use-cast'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function getClassroomsForTeacher(
  request: Request,
  response: Response,
) {
  const classroomStudentParamsSchema = z.object({
    teacher_id: z.coerce.string(),
  })

  const { teacher_id } = classroomStudentParamsSchema.parse(request.params)

  const findTeacherClassroomsUseCase = makeCreateFindTeachersClassroomsUseCase()

  const classroomList = await findTeacherClassroomsUseCase.handler({
    teacher_id,
  })
  return response.status(200).json(classroomList)
}
