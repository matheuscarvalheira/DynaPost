import { IAuthentication } from '@/entities/models/authentication.interface'

// Vai ter que trocar a promise
export interface IAuthenticationRepository {
  authenticate(authentication: IAuthentication): Promise<string | null>
  register(authentication: IAuthentication): Promise<IAuthentication>
}
