import { makeFindClassroomPostsUseCase } from '@/use-cases/post-classroom/factory/make-find-classroom-post-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function findPostsByClassroom(
  request: Request,
  response: Response,
) {
  const postClassroomParamsSchema = z.object({
    classroom_id: z.coerce.string(),
  })

  const { classroom_id } = postClassroomParamsSchema.parse(request.params)

  const findClassroomPostsUseCase = makeFindClassroomPostsUseCase()

  const posts = await findClassroomPostsUseCase.handler(classroom_id)

  return response.status(200).json(posts)
}
