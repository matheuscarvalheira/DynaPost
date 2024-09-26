import { FC } from 'react';
import { Input } from '@/components/input';
import * as S from "./styles";



export const EditPostTemplate: FC = () => {
    return (
        <S.ModalContainer>
            <S.Title>Editar post</S.Title>
            <S.Form>
                <Input placeholder="Título" required type="text" name="title" autocomplete="off" />
                <Input placeholder="Conteúdo" required type="text" name="content" autocomplete="off" />
                <S.Button type="submit" >Editar</S.Button>
            </S.Form>
        </S.ModalContainer>
    )
}