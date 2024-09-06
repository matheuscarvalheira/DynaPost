import { makeRemoveStudentFromClassroomUseCase } from '@/use-cases/classroom-student/factory/make-remove-teacher-from-classroom'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function removeStudentFromClassroom(req: Request, res: Response) {
  const removeStudentClassroomSchema = z.object({
    student_id: z.coerce.string(),
    classroom_id: z.coerce.string(),
  })

  const { student_id, classroom_id } = removeStudentClassroomSchema.parse(
    req.params,
  )

  const removeStudentFromClassroomUseCase =
    makeRemoveStudentFromClassroomUseCase()

  await removeStudentFromClassroomUseCase.handler({ student_id, classroom_id })

  return res.status(204).send()
}
