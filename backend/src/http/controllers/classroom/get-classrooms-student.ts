import { makeCreateFindStudentsClassroomsUseCase } from '@/use-cases/classroom-student/factory/make-find-student-classroom-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function getClassroomsForStudent(
  request: Request,
  response: Response,
) {
  const classroomStudentParamsSchema = z.object({
    student_id: z.coerce.string(),
  })

  const { student_id } = classroomStudentParamsSchema.parse(request.params)

  const findStudentClassroomsUseCase = makeCreateFindStudentsClassroomsUseCase()

  const classroomList = await findStudentClassroomsUseCase.handler({
    student_id,
  })
  return response.status(200).json(classroomList)
}
