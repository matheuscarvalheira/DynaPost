import { makeRemoveTeacherClassroomUseCase } from '@/use-cases/classroom-teacher/factory/make-remove-teacher-from-classroom'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function removeTeacherFromClassroom(req: Request, res: Response) {
  const removeTeacherClassroomSchema = z.object({
    teacher_id: z.coerce.string(),
    classroom_id: z.coerce.string(),
  })

  const { teacher_id, classroom_id } = removeTeacherClassroomSchema.parse(
    req.params,
  )

  const removeTeacherFromClassroomUseCase = makeRemoveTeacherClassroomUseCase()

  await removeTeacherFromClassroomUseCase.handler({ teacher_id, classroom_id })

  return res.status(204).send()
}
