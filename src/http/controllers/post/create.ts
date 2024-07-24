import { appDataSource } from '@/lib/typeorm/typeorm'
import { makeCreatePostClassroomUseCase } from '@/use-cases/post-classroom/factory/make-create-post-classroom-use-case'
import { makeCreatePostTeacherUseCase } from '@/use-cases/post-teacher/factory/make-create-post-teacher-use-case'
import { makeCreatePostUseCase } from '@/use-cases/post/factory/make-create-post-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function create(request: Request, response: Response) {
  const registerBodySchema = z.object({
    title: z.string(),
    body: z.string(),
    published: z.boolean().optional(),
    teacher_id: z.string(),
    classroom_id: z.string(),
  })

  const { title, body, published, teacher_id, classroom_id } =
    registerBodySchema.parse(request.body)

  const result = await appDataSource.transaction(
    async (transactionEntityManager) => {
      const createPostUseCase = makeCreatePostUseCase(transactionEntityManager)
      const createPostTeacherUseCase = makeCreatePostTeacherUseCase(
        transactionEntityManager,
      )
      const createPostClassroomUseCase = makeCreatePostClassroomUseCase(
        transactionEntityManager,
      )

      const post = await createPostUseCase.handler({
        title,
        body,
        published,
      })

      await createPostTeacherUseCase.handler({
        teacher_id,
        post_id: post.id,
      })

      await createPostClassroomUseCase.handler({
        classroom_id,
        post_id: post.id,
      })

      return { ...post, teacher_id, classroom_id }
    },
  )

  return response.status(201).json(result)
}
