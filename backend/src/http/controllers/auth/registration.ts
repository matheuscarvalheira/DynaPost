import { appDataSource } from '@/lib/typeorm/typeorm'
import { makeRegisterUseCase } from '@/use-cases/authentication/factory/make-register-use-case'
import { makeCreateClassroomStudentUseCase } from '@/use-cases/classroom-student/factory/make-add-student-to-classroom'
import { makeCreateClassroomTeacherUseCase } from '@/use-cases/classroom-teacher/factory/make-add-teacher-to-classroom'
import { makeCreateStudentUseCase } from '@/use-cases/student/factory/make-create-student-use-case'
import { makeCreateTeacherUseCase } from '@/use-cases/teacher/factory/make-create-teacher-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function registrate(request: Request, response: Response) {
  const registrationBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    userType: z.enum(['student', 'teacher']).optional().default('student'),
    classrooms: z.array(z.string().uuid()).optional().default([]),
  })

  const { name, email, password, userType, classrooms } =
    registrationBodySchema.parse(request.body)

  const result = await appDataSource.transaction(
    async (transactionEntityManager) => {
      const createRegistrationUseCase = makeRegisterUseCase(
        transactionEntityManager,
      )

      const createdUser = await createRegistrationUseCase.handler({
        email,
        password,
        userType,
      })

      if (createdUser.error) {
        return createdUser
      }

      if (createdUser.userType === 'student') {
        const createStudentUseCase = makeCreateStudentUseCase(
          transactionEntityManager,
        )

        const createdStudent = await createStudentUseCase.handler({
          name,
          id: createdUser.id,
        })

        if (classrooms?.length > 0) {
          const createClassroomStudentUseCase =
            makeCreateClassroomStudentUseCase(transactionEntityManager)

          classrooms.forEach(async (classroom_id) => {
            await createClassroomStudentUseCase.handler({
              classroom_id,
              student_id: createdStudent.id,
            })
          })
        }

        return { error: createdUser.error, message: createdUser.message }
      } else if (createdUser.userType === 'teacher') {
        const createTeacherUseCase = makeCreateTeacherUseCase(
          transactionEntityManager,
        )

        const createdTeacher = await createTeacherUseCase.handler({
          name,
          id: createdUser.id,
        })

        if (classrooms?.length > 0) {
          const createClassroomTeacherUseCase =
            makeCreateClassroomTeacherUseCase(transactionEntityManager)

          classrooms.map(async (classroom_id) => {
            await createClassroomTeacherUseCase.handler({
              classroom_id,
              teacher_id: createdTeacher.id,
            })
          })
        }

        return { error: createdUser.error, message: createdUser.message }
      }
    },
  )

  return response.status(200).json(result)
}
