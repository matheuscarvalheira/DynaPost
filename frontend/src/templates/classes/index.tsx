import { FC, useContext, useEffect, useState } from "react"
import * as S from "./styles"
import { Option } from "@/components/radio-buttons/props";
import { AuthContext } from "@/contexts/auth-context"
import { api } from "@/api/backend";

interface IClassroom {
    id: string,
    name: string,
}

export const Classes: FC = () => {
    const [subjects, setSubjects] = useState<Option[]>([]);
    const { userId, userType } = useContext(AuthContext)

    useEffect(() => {
        const fetchSubjects = async () => {
        try {
            const { data } = await api.get(`classrooms/${userType}s/${userId}`);
            setSubjects(data.map(({ id, name }: IClassroom) => ({ value: id, label: name })));
        } catch (error) {
            console.error('Error fetching classrooms:', error);
        }
        };

        fetchSubjects();
    }, [userId, userType]);

    return (
        <S.Main>
            <S.Title>Escolha uma turma</S.Title>
            <S.ClassList>
                {subjects.map(item => <li key={item.value}><a href={`feed/${item.value}`}>{item.label}</a></li>)}
            </S.ClassList>
        </S.Main>
    )
}