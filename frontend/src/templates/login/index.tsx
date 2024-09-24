import { FC } from "react";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import * as S from "./styles"

export const LoginTemplate: FC = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        console.log({email, password})
    }

    return (
        <S.Main>
            <S.Title>Faça seu login</S.Title>
            <S.Form onSubmit={handleSubmit}>
                <Input placeholder="Email" type="email" name="email" autocomplete="off" />
                <Input placeholder="Senha" type="password" name="password" autocomplete="off" />
                <Button type="submit" text="Login"/>
            </S.Form>
        </S.Main>
    )
}