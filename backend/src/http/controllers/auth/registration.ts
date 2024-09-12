import { makeRegisterUseCase } from '@/use-cases/authentication/factory/make-register-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function registrate(request: Request, response: Response) {
  const registrationBodySchema = z.object({
    email: z.string(),
    password: z.string(),
  })

  const { email, password } = registrationBodySchema.parse(request.body)

  const createRegistrationUseCase = makeRegisterUseCase()

  const registration = await createRegistrationUseCase.handler({
    email,
    password,
  })

  return response.status(200).json(registration)
}
