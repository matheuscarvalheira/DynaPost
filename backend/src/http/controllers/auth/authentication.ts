import { makeCreateAuthenticateUseCase } from '@/use-cases/authentication/factory/make-authenticate-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function authenticate(request: Request, response: Response) {
  const authenticationBodySchema = z.object({
    email: z.string().email(),
    password: z.string(),
  })

  const { email, password } = authenticationBodySchema.parse(request.body)

  const createAuthenticationUseCase = makeCreateAuthenticateUseCase()

  const authentication = await createAuthenticationUseCase.handler({
    email,
    password,
  })

  return response.status(200).json(authentication)
}
