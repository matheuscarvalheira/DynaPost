import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { env } from '@/env'

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
    jwt.verify(token, env.JWT_SECRET)
    next()
  } catch (error) {
    return response.status(403).json({ message: 'Token inválido' })
  }
}
