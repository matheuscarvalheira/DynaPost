import { createContext, useEffect } from "react";
import { AuthContextProps, AuthProviderProps, SignInProps } from "./props";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { api } from "@/api/backend";
import { usePathname, useRouter} from "next/navigation";

const FREE_ACCESS_PATHNAMES = ['/', '/login', '/register', '/createpost']

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps){

    const router = useRouter()
    const pathname = usePathname()

    useEffect(()=>{
        const accessFree = FREE_ACCESS_PATHNAMES.includes(pathname)
        if (!accessFree) {
            const { 'DynaPost.Token': token } = parseCookies()
            if (!token) {
                delete api.defaults.headers.common["Authorization"]
                router.push('/')
            }
        }
    }, [pathname])

    async function signIn({ email, password }: SignInProps): Promise<boolean> {
        api.post('signin', { email, password })
            .then(response => {
                const { error, token } = response.data
                if (error) {
                    console.error('SignIn Failed')
                    return false
                }
                setCookie(undefined, 'DynaPost.Token', token, {
                    maxAge: 60 * 30 //30 minutes
                })
                api.defaults.headers['Authorization'] = `Bearer ${token}`
            })
            .catch(error => {
                console.error('SignIn Failed', error)
            })
        return true
    }

    function logOut(){
        destroyCookie(undefined, 'DynaPost.Token')
        delete api.defaults.headers.common["Authorization"]
        router.push('/')
    }

    return(
        <AuthContext.Provider value={{ signIn, logOut }}>
            { children }
        </AuthContext.Provider>
    )
}
