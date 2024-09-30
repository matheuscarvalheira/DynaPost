'use-client';
import { ReactNode, useState } from "react";
import { Textarea } from "../textarea";
import * as S from './styles'
import { FormProps } from "./props";


export const Form = ({ currentPost }: FormProps): ReactNode => {
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
            <S.Input 
                placeholder="Título" 
                value={inputValue} 
                onChange={handleInputChange} />

            <Textarea 
                placeholder="Conteúdo" 
                value={textAreaValue} 
                onChange={handleTextAreaChange} /> 

            <S.ButtonContainer>
                {currentPost ? <S.Button buttonType="delete-post" text="Deletar" /> : null}
                <S.Button text="Publicar" />
            </S.ButtonContainer>
        </S.Container>
    </S.Form>
  )
}