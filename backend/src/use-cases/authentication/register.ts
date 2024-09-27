import {
  IAuthentication,
  IAuthenticationResponseData,
} from '@/entities/models/authentication.interface'
import { IAuthenticationRepository } from '@/repositories/authentication.interface'

export class RegisterUseCase {
  constructor(private AuthenticationRepository: IAuthenticationRepository) {}

  async handler(
    Auhentication: IAuthentication,
  ): Promise<IAuthenticationResponseData> {
    return this.AuthenticationRepository.register(Auhentication)
  }
}
