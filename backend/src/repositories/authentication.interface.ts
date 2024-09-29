import {
  IAuthentication,
  IAuthenticationResponseData,
} from '@/entities/models/authentication.interface'

export interface IAuthenticationRepository {
  authenticate(authentication: IAuthentication): Promise<object | null>
  register(
    authentication: IAuthentication,
  ): Promise<IAuthenticationResponseData>
  findById(id: string): Promise<IAuthentication | null>
}
