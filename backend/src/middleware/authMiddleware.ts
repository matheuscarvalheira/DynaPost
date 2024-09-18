import { Request, Response, NextFunction } from 'express'
import { AuthenticationRepository } from '@/repositories/typeorm/authentication.repository'

const FREE_ACCESS_ROUTES = ['/signin', '/register']

export const authenticateJWT = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const isAllowedRoute = FREE_ACCESS_ROUTES.includes(request.path)

  if (isAllowedRoute) {
    return next()
  }

  const token = request.headers.authorization?.split(' ')[1]

  if (!token) {
    return response
      .status(401)
      .json({ message: 'Acesso proibido sem autenticação' })
  }

  try {
    AuthenticationRepository.verifyToken(token)
    next()
  } catch (error) {
    if (error instanceof Error && error?.message === 'Token expired') {
      return response
        .status(401)
        .json({ message: 'Token expirado', error: true })
    }
    return response.status(403).json({ message: 'Token inválido', error: true })
  }
}
