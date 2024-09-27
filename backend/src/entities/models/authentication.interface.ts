export interface IAuthentication {
  id?: string
  email: string
  password: string
  userType?: string
}

export interface IAuthenticationResponseData {
  error: boolean
  message: string
  email?: string
  id?: string
  userType?: string
}
