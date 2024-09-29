import { FC, useContext, useEffect, useState } from "react";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import * as S from "./styles"
import { ButtonGroup } from "@/components/radio-buttons";
import { Option } from "@/components/radio-buttons/props";
import { api } from "@/api/backend";
import { AuthContext } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { toast, ToastContent } from "react-toastify";

interface IClassroom {
    id: string,
    name: string,
}

const USER_OPTIONS = [{ label: 'Professor', value: 'teacher' }, { label: 'Estudante', value: 'student' }];

export const RegisterTemplate: FC = () => {

    const router = useRouter()

    const { register } = useContext(AuthContext)
    const [subjects, setSubjects] = useState<Option[]>([]);

    useEffect(() => {
        const fetchSubjects = async () => {
        try {
            const { data } = await api.get('classrooms');
            setSubjects(data.map(({ id, name }: IClassroom) => ({ value: id, label: name })));
        } catch (error) {
            console.error('Error fetching classrooms:', error);
        }
        };

        fetchSubjects();
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')?.toString()
        const email = form.get('email')?.toString()
        const password = form.get('password')?.toString()
        const repeatPassword = form.get('repeat-password')?.toString()
        const userType = form.get('userType')?.toString()
        const classrooms = Array.from(form.getAll('subjects')) as string[];

        if (password !== repeatPassword) {
            return toast.error("Senhas não são iguais" as ToastContent<unknown>, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }

        register({name, email, password, classrooms, userType})
            .then((result => {
                const { registerOk, message} = result
                if (registerOk) {
                    router.push('/login')
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
            }))
    }

    return (
        <S.Main>
            <S.Title>Crie sua conta</S.Title>
            <S.Form onSubmit={handleSubmit}>
                <S.SubTitle>Tipo de conta</S.SubTitle>
                <S.RadioContainer>
                    <ButtonGroup required groupName="userType" options={USER_OPTIONS}/>
                </S.RadioContainer>
                <Input placeholder="Nome" type="text" name="name" autoComplete="off" />
                <Input placeholder="Email" type="email" name="email" autoComplete="off" required />
                <Input placeholder="Senha" type="password" name="password" autoComplete="off" required />
                <Input placeholder="Repita senha" type="password" name="repeat-password" autoComplete="off" required />

                <S.SubTitle>Matérias</S.SubTitle>
                <S.RadioContainer>
                    <ButtonGroup checkbox groupName="subjects" options={subjects}/>
                </S.RadioContainer>
                <Button type="submit" text="Registrar"/>
            </S.Form>
        </S.Main>
    )
}