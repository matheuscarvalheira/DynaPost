import { Application } from 'express'
import { authenticate } from './authentication'
import { registrate } from './registration'

export async function authRoutes(app: Application) {
  app.post('/signin/', authenticate)
  app.post('/register/', registrate)
}
