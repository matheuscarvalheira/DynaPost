import { AuthenticationRepository } from "@/repositories/typeorm/authentication.repository"
import { FindAuthenticationUseCase } from "../find-authentication"

export function makeFindAuthenticationUseCase() {

  const authenticationRepository = new AuthenticationRepository()
  const findAuthenticationUseCase = new FindAuthenticationUseCase(authenticationRepository)

  return findAuthenticationUseCase
}
