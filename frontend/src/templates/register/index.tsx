import { FC } from "react";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import * as S from "./styles"
import { ButtonGroup } from "@/components/radio-buttons";

const USER_OPTIONS = [{label: 'Professor', value: 'teacher'}, {label: 'Estudante', value: 'student'}]
const SUBJECTS = [
    { value: '67f1f9b4-59f4-41b3-8d60-cf28b6f1071a', label: 'Understanding Node.js' },
    { value: '93ba179e-5bf5-4794-8bea-b631718ec092', label: 'JavaScript Tips' },
    { value: '501a7012-ae26-472c-9f3b-c619977e4157', label: 'Mastering PostgreSQL' },
    { value: 'a833ef72-ee37-43ce-a19b-da757d35a338', label: 'Database Transactions' },
    { value: '270dac54-6b3e-4688-b2f2-1d14c296049e', label: 'Async Programming' },
    { value: '82d6574f-3a77-4a4f-8463-561a9352bc2a', label: 'API Development' },
    {
      value: 'd1b03f51-a96d-447a-8181-a13b76532e8b',
      label: 'Frontend Best Practices',
    },
  ]

export const RegisterTemplate: FC = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        const repeatPassword = form.get('repeat-password')
        const userType = form.get('userType')
        const subjects = form.getAll('subjects')

        console.log({name, email, password, repeatPassword, userType, subjects})
    }

    return (
        <S.Main>
            <S.Title>Crie sua conta</S.Title>
            <S.Form onSubmit={handleSubmit}>
                <S.SubTitle>Tipo de conta</S.SubTitle>
                <S.RadioContainer>
                    <ButtonGroup required groupName="userType" options={USER_OPTIONS}/>
                </S.RadioContainer>
                <Input placeholder="Nome" type="text" name="name" autocomplete="off" />
                <Input placeholder="Email" type="email" name="email" autocomplete="off" required />
                <Input placeholder="Senha" type="password" name="password" autocomplete="off" required />
                <Input placeholder="Repita senha" type="password" name="repeat-password" autocomplete="off" required />

                <S.SubTitle>Matérias</S.SubTitle>
                <S.RadioContainer>
                    <ButtonGroup checkbox groupName="subjects" options={SUBJECTS}/>
                </S.RadioContainer>
                <Button type="submit" text="Registrar"/>
            </S.Form>
        </S.Main>
    )
}