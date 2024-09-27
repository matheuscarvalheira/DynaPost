import { FC, useState } from 'react';
import { Header } from "@/components/header";
import { Button } from "@/components/button";
import * as S from "./styles";
import { Modal } from '@/components/modal';



export const EditPostTemplate: FC = () => {
    const [textareaValue, setTextareaValue] = useState('');

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaValue(event.target.value);
    };

    const dropdownItemValues = ['option1', 'option2', 'option3'];

    return (
        <S.Main>
            <Header/>
            <Modal isopen={true} onClose={() => {}} >
            <S.Dropdown items={dropdownItemValues} />
            <S.Input placeholder='Titulo da Postagem' />
            <S.Textarea placeholder='Conteúdo da Postagem' value={textareaValue} onChange={handleTextareaChange}  />
            <S.WrapperButton> 
                <Button text={'Apagar'} buttonType='delete-post' />
                <Button text={'Salvar'}  onClick={() => console.log('edit')} />
            </S.WrapperButton>
            </Modal>
        </S.Main>
    )
}