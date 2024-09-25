import { AuthenticationRepository } from '@/repositories/typeorm/authentication.repository'
import { AuthenticateUseCase } from '../authenticate'

export function makeCreateAuthenticateUseCase() {
  const authenticationRepository = new AuthenticationRepository()
  const createAuthenticationUseCase = new AuthenticateUseCase(
    authenticationRepository,
  )

  return createAuthenticationUseCase
}
