import { Request, Response, NextFunction } from 'express'
import { AuthenticationRepository } from '@/repositories/typeorm/authentication.repository'

const FREE_ACCESS_ROUTES = ['/signin', '/register']

const rolePermissions = {
  admin: ['GET', 'POST', 'PUT', 'DELETE'],
  teacher: ['GET', 'POST'],
  student: ['GET'],
}

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
    const { userType } = AuthenticationRepository.verifyToken(token)

    const isAllowed = rolePermissions[userType].includes(request.method)

    if (!isAllowed) {
      return response.status(401).json({ message: 'Não autorizado' })
    }

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
