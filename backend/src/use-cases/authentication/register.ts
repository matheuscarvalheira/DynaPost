import { IAuthentication } from '@/entities/models/authentication.interface'
import { IAuthenticationRepository } from '@/repositories/authentication.interface'

export class RegisterUseCase {
  constructor(private AuthenticationRepository: IAuthenticationRepository) {}

  async handler(Auhentication: IAuthentication): Promise<IAuthentication> {
    return this.AuthenticationRepository.register(Auhentication)
  }
}
