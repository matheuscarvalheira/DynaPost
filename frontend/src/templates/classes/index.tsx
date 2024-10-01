import { FC, useContext, useEffect, useState } from "react"
import * as S from "./styles"
import { BackendContext } from "@/contexts/backend-context"
import { Classroom } from "@/contexts/backend-context/types"
import { ToastError } from "@/utils/toast-error"
import { Loader } from "@/components/loader"

export const Classes: FC = () => {

    const { getClassrooms } = useContext(BackendContext);
    const [classrooms, setClassrooms] = useState<Classroom[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchClassrooms() {
            setLoading(true);
            const { getClassroomsOk, message, classrooms} = await getClassrooms();

            if (getClassroomsOk) {
                if (Array.isArray(classrooms)) {
                    setClassrooms(classrooms);
                } else {
                    console.error("Erro: fetchedClassrooms não é um array", classrooms);
                }    
            } else {
                ToastError(message);
            }
        }

        fetchClassrooms();
        setLoading(false);
    }, [getClassrooms]);

    return (
        <S.Main>
            <S.Title>Escolha uma turma</S.Title>
            {
                !loading ? (
                    <S.ClassList>
                        {classrooms.map(classroom => <li key={classroom.id}><a href={`feed?classroomId=${classroom.id}`}>{classroom.name}</a></li>)}
                    </S.ClassList>
                ) : <Loader />
            }
        </S.Main>
    )
}