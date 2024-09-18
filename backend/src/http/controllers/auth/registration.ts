import { makeRegisterUseCase } from '@/use-cases/authentication/factory/make-register-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function registrate(request: Request, response: Response) {
  const registrationBodySchema = z.object({
    email: z.string().email(),
    password: z.string(),
    userType: z.string().optional(),
  })

  const { email, password, userType } = registrationBodySchema.parse(
    request.body,
  )

  const createRegistrationUseCase = makeRegisterUseCase()

  const registration = await createRegistrationUseCase.handler({
    email,
    password,
    userType,
  })

  return response.status(200).json(registration)
}
