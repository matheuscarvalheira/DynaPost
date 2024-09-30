export interface IAuthentication {
  id?: string
  email: string
  password: string
  userType?: string
  createdAt?: Date
  modifiedAt?: Date
}

export interface IAuthenticationResponseData {
  error: boolean
  message: string
  email?: string
  id?: string
  userType?: string
}
