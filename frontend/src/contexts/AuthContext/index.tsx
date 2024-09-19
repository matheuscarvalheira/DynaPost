import { createContext, useEffect, useState } from "react";
import { AuthContextProps, AuthProviderProps, SignInProps } from "./props";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { API } from "@/http/Api/Backend";
import { usePathname, useRouter} from "next/navigation";

const FREE_ACCESS_PATHNAMES = ['/', '/login', '/register']

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps){

    const router = useRouter()
    const pathname = usePathname()

    useEffect(()=>{

        API.get('posts').then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.error('Get Failed', error)
        })

        const accessFree = FREE_ACCESS_PATHNAMES.includes(pathname)
        if (!accessFree) {
            const { 'DynaPost.Token': token } = parseCookies()
            if (!token) {
                delete API.defaults.headers.common["Authorization"]
                const doSignIn = async () => {
                    return await signIn({email:'teste@gmail.com', password:'123'})
                }
                doSignIn()
                router.push('/')
            }
        }
    }, [pathname])

    async function signIn({ email, password }: SignInProps): Promise<boolean> {
        API.post('signin', { email, password })
            .then(response => {
                const { error, token } = response.data
                if (error) {
                    console.error('SignIn Failed')
                    return false
                }
                setCookie(undefined, 'DynaPost.Token', token, {
                    maxAge: 60 * 30 //30 minutes
                })
                API.defaults.headers['Authorization'] = `Bearer ${token}`
            })
            .catch(error => {
                console.error('SignIn Failed', error)
            })
        return true
    }

    function logOut(){
        destroyCookie(undefined, 'DynaPost.Token')
        delete API.defaults.headers.common["Authorization"]
        router.push('/')
    }

    return(
        <AuthContext.Provider value={{ signIn, logOut }}>
            { children }
        </AuthContext.Provider>
    )
}
