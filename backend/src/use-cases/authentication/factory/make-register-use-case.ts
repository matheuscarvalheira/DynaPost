import { AuthenticationRepository } from '@/repositories/typeorm/authentication.repository'
import { RegisterUseCase } from '../register'
import { EntityManager } from 'typeorm'

export function makeRegisterUseCase(transactionManager: EntityManager) {
  const registrationRepository = new AuthenticationRepository(
    transactionManager,
  )
  const createRegistrationUseCase = new RegisterUseCase(registrationRepository)

  return createRegistrationUseCase
}
