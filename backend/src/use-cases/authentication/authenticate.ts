import { IAuthentication } from '@/entities/models/authentication.interface'
import { IAuthenticationRepository } from '@/repositories/authentication.interface'

export class AuthenticateUseCase {
  constructor(private AuthenticationRepository: IAuthenticationRepository) {}

  async handler(Authenticate: IAuthentication): Promise<string | null> {
    return this.AuthenticationRepository.authenticate(Authenticate)
  }
}
