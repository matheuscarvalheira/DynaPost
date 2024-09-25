export interface AuthContextProps{
    signIn: ({ email, password }: SignInProps) => Promise<SignResult>,
    logOut: () => void,
}

export interface AuthProviderProps{
    children: React.ReactNode,
}

export interface SignInProps{
    email: string | undefined,
    password: string | undefined,
}

export interface SignResult{
    signInOk: boolean,
    message: string | undefined | unknown,
}