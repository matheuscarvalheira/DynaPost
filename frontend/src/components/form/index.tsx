'use-client';
import { ReactNode, useState } from "react";
import { Textarea } from "../textarea";
import * as S from './styles'
import { Dropdown } from "../dropdown";


export const Form = (): ReactNode => {
    const [inputValue, setInputValue] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaValue(event.target.value);
    }

  return (
    <S.Form>
        <S.Container>
            <Dropdown items={['Turma 1', 'Turma 2', 'Turma 3']}/>

            <S.Input 
                placeholder="Título" 
                value={inputValue} 
                onChange={handleInputChange} />

            <Textarea 
                placeholder="Conteúdo" 
                value={textAreaValue} 
                onChange={handleTextAreaChange} /> 

            <S.ButtonContainer>
                <S.Button buttonType="delete-post" text="Deletar" />
                <S.Button text="Publicar" />
            </S.ButtonContainer>
        </S.Container>
    </S.Form>
  )
}