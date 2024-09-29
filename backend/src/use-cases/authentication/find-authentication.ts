import { ResourceNotFoundError } from '../errors/resource-not-found-error'
import { IAuthenticationRepository } from '@/repositories/authentication.interface'

export class FindAuthenticationUseCase {
  constructor(private AuthenticationRepository: IAuthenticationRepository) {}

  async handler(id: string) {
    const authentication = await this.AuthenticationRepository.findById(id)

    if (!authentication) throw new ResourceNotFoundError()

    return authentication
  }
}
