import { FC, useContext, useEffect, useState } from "react"
import * as S from "./styles"
import { AuthContext } from "@/contexts/auth-context"
import { Classroom } from "@/contexts/auth-context/props"

const SUBJECTS = [
    { route: '67f1f9b4-59f4-41b3-8d60-cf28b6f1071a', label: 'Understanding Node.js' },
    { route: '93ba179e-5bf5-4794-8bea-b631718ec092', label: 'JavaScript Tips' },
    { route: '501a7012-ae26-472c-9f3b-c619977e4157', label: 'Mastering PostgreSQL' },
    { route: 'a833ef72-ee37-43ce-a19b-da757d35a338', label: 'Database Transactions' },
    { route: '270dac54-6b3e-4688-b2f2-1d14c296049e', label: 'Async Programming' },
    { route: '82d6574f-3a77-4a4f-8463-561a9352bc2a', label: 'API Development' },
    {
      route: 'd1b03f51-a96d-447a-8181-a13b76532e8b',
      label: 'Frontend Best Practices',
    },
  ]

export const Classes: FC = () => {
    const { getClassrooms } = useContext(AuthContext);
    const [classrooms, setClassrooms] = useState<Classroom[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchClassrooms() {
            setLoading(true);
            const fetchedClassrooms = await getClassrooms();
            if (Array.isArray(fetchedClassrooms)) {
                setClassrooms(fetchedClassrooms);
            } else {
                console.error("Erro: fetchedClassrooms não é um array", fetchedClassrooms);
            }
        }

        fetchClassrooms();
    }, [getClassrooms]);

    return (
        <S.Main>
            <S.Title>Escolha uma turma</S.Title>
            <S.ClassList>
                {classrooms.map(classroom => <li key={classroom.id}><a href={`feed/${classroom.id}`}>{classroom.name}</a></li>)}
            </S.ClassList>
        </S.Main>
    )
}