import jwt from 'jsonwebtoken'
import { env } from '@/env'
import { makeFindAuthenticationUseCase } from '@/use-cases/authentication/factory/make-find-authentication-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function findAuthenticationByToken(request: Request, response: Response) {

  const registerParamsSchema = z.object({
    token: z.coerce.string(),
  })

  const { token } = registerParamsSchema.parse(request.params)
  const { id } = jwt.verify(token, env.JWT_SECRET)  as { id: string };

  const findAuthenticationUseCase = makeFindAuthenticationUseCase()
  const { id: userId, email, userType, createdAt, modifiedAt } = await findAuthenticationUseCase.handler(id)

  return response.status(200).json({userId, email, userType, createdAt, modifiedAt})
}
