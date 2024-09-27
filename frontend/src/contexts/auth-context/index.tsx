import { createContext, use, useEffect, useState } from "react"
import { AuthContextProps, AuthProviderProps, RegisteResult, RegisterProps, SignInProps, SignResult } from "./types"
import { destroyCookie, parseCookies, setCookie } from "nookies"
import { api } from "@/api/backend"
import { usePathname, useRouter} from "next/navigation"

const FREE_ACCESS_PATHNAMES = ['/login', '/register']


export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps){

    const router = useRouter()
    const pathname = usePathname()

    const [userId , setUserId] = useState('')
    const [userType , setUserType] = useState('')

    useEffect(()=>{

        async function fetchUser(token: string) {
            try {
                const { data } = await api.get(`authentication/${token}`)
                const { userId, userType } = data
                setUserId(userId)
                setUserType(userType)
            } catch (error) {
                console.error('Failed to get User data:', error)
                delete api.defaults.headers.common["Authorization"]
                router.push('/login')
            }    
        }

        const accessFree = FREE_ACCESS_PATHNAMES.includes(pathname)
        if (!accessFree) {
            const { 'DynaPost.Token': token } = parseCookies()
            if (!token) {
                delete api.defaults.headers.common["Authorization"]
                router.push('/login')
            }
            if (userId.trim() === '') {
                fetchUser(token);
            }
        }

    }, [pathname])

    async function register({name, email, password, classrooms, userType}: RegisterProps): Promise<RegisteResult>{
        try {
            const response = await api.post('register', {name, email, password, classrooms, userType})
            const { error, message } = response.data

            if (error) {
                console.error('Register Failed:', message)
                return {registerOk: false, message}
            }
            return {registerOk: true, message}
        } catch (error) {
            console.error('Register Failed:', error)
            return {registerOk: false, message: 'Falha realizar o Cadastro. Tente novamente mais tarde.'}
        }
    }

    async function signIn({ email, password }: SignInProps): Promise<SignResult> {
        try {
          const response = await api.post('signin', { email, password })
          const { error, userId, userType, token } = response.data
      
          if (error) {
            console.error('SignIn Failed: Invalid Username or Password')
            return {signInOk: false, message: 'Usuário ou Senha Inválidos'}
          }

          setUserId(userId)
          setUserType(userType)

          setCookie(undefined, 'DynaPost.Token', token, { maxAge: 60 * 30 }) // 30 minutes
          api.defaults.headers['Authorization'] = `Bearer ${token}`
      
          return {signInOk: true, message: 'Login realizado com Sucesso!'}
        } catch (error) {
          console.error('SignIn Failed:', error)
          return {signInOk: false, message: 'Usuário ou Senha Inválidos'}
        }
    }

    function logOut(){
        destroyCookie(undefined, 'DynaPost.Token')
        delete api.defaults.headers.common["Authorization"]
        router.push('/login')
    }

    return(
        <AuthContext.Provider value={{ register, signIn, logOut, userId, userType }}>
            { children }
        </AuthContext.Provider>
    )
}
