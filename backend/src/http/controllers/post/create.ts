import { appDataSource } from '@/lib/typeorm/typeorm'
import { makeCreatePostClassroomUseCase } from '@/use-cases/post-classroom/factory/make-create-post-classroom-use-case'
import { makeCreatePostStudentUseCase } from '@/use-cases/post-student/factory/make-create-post-student-use-case'
import { makeCreatePostTeacherUseCase } from '@/use-cases/post-teacher/factory/make-create-post-teacher-use-case'
import { makeCreatePostUseCase } from '@/use-cases/post/factory/make-create-post-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function create(request: Request, response: Response) {
  const registerBodySchema = z
    .object({
      title: z.string(),
      body: z.string(),
      published: z.boolean().optional(),
      teacher_id: z.string().optional(),
      student_id: z.string().optional(),
      classroom_id: z.string(),
    })
    .refine(
      (data) =>
        (data?.teacher_id && !data?.student_id) ||
        (!data?.teacher_id && data?.student_id),
      {
        message:
          'Forneça um id de estudante ou de professor para identificar o post',
      },
    )

  const { title, body, published, teacher_id, student_id, classroom_id } =
    registerBodySchema.parse(request.body)

  const result = await appDataSource.transaction(
    async (transactionEntityManager) => {
      const createPostUseCase = makeCreatePostUseCase(transactionEntityManager)
      const createPostTeacherUseCase = makeCreatePostTeacherUseCase(
        transactionEntityManager,
      )
      const createPostStudentUseCase = makeCreatePostStudentUseCase(
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

      if (student_id) {
        await createPostStudentUseCase.handler({
          student_id,
          post_id: post.id,
        })
      } else if (teacher_id) {
        await createPostTeacherUseCase.handler({
          teacher_id,
          post_id: post.id,
        })
      }

      await createPostClassroomUseCase.handler({
        classroom_id,
        post_id: post.id,
      })

      return { ...post, teacher_id, student_id, classroom_id }
    },
  )

  return response.status(201).json(result)
}
