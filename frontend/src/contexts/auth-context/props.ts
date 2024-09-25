export interface AuthContextProps{
    signIn: ({ email, password }: SignInProps) => Promise<boolean>,
    logOut: () => void,
}

export interface AuthProviderProps{
    children: React.ReactNode,
}

export interface SignInProps{
    email: string,
    password: string,
}