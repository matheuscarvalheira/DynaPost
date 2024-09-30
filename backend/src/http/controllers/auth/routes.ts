import { Application } from 'express'
import { authenticate } from './authentication'
import { registrate } from './registration'
import { findAuthenticationByToken } from './find-authentication-by-token'

export async function authRoutes(app: Application) {
  app.post('/signin/', authenticate)
  app.post('/register/', registrate)
  app.get('/authentication/:token', findAuthenticationByToken)
}
