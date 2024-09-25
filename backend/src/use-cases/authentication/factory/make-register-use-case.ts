import { AuthenticationRepository } from '@/repositories/typeorm/authentication.repository'
import { RegisterUseCase } from '../register'

export function makeRegisterUseCase() {
  const registrationRepository = new AuthenticationRepository()
  const createRegistrationUseCase = new RegisterUseCase(registrationRepository)

  return createRegistrationUseCase
}
