import { FC, useContext } from "react";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import * as S from "./styles"
import { AuthContext } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import {  toast, ToastContent } from 'react-toastify';

export const LoginTemplate: FC = () => {

    const router = useRouter()

    const { signIn } = useContext(AuthContext)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const email = form.get('email')?.toString()
        const password = form.get('password')?.toString()

        signIn({ email, password })
            .then(result => {
                const { signInOk, message } = result
                if (signInOk) {
                    router.push('/classes')
                } else {
                    toast.error(message as ToastContent<unknown>, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                      });
                }
            })
    }

    return (
        <S.Main>
            <S.Title>Faça seu login</S.Title>
            <S.Form onSubmit={handleSubmit}>
                <Input placeholder="Email" required type="email" name="email" autocomplete="off" />
                <Input placeholder="Senha" required type="password" name="password" autocomplete="off" />
                <Button type="submit" text="Login"/>
            </S.Form>
        </S.Main>
    )
}