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

  const createPostUseCase = makeCreatePostUseCase()
  const createPostTeacherUseCase = makeCreatePostTeacherUseCase()
  const createPostClassroomUseCase = makeCreatePostClassroomUseCase()

  const post = await createPostUseCase.handler({
    title,
    body,
    published,
  })

  const resPT = await createPostTeacherUseCase.handler({
    teacher_id,
    post_id: post.id,
  })

  const resPC = await createPostClassroomUseCase.handler({
    classroom_id,
    post_id: post.id,
  })

  return response.status(201).json({ ...post, ...resPC, ...resPT })
}
