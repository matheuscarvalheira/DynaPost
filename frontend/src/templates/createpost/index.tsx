
import { FC, useState } from "react";
import * as S from "./styles"

export const CreatePostTemplate: FC = () => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
      };

    return (
        <div>
            <S.Modal isopen={true} onClose={() => {}}>
                <div>
                    <S.Dropdown 
                    items={['Turma 1', 'Turma 2', 'Turma 3']}/>
                    <S.Input 
                        placeholder="Título" 
                        required type="text" 
                        name="title" 
                        autocomplete="off"/>
                    <S.Textarea 
                        placeholder="Conteúdo" 
                        value={inputValue}
                        onChange={handleChange} />
                    <S.Button type="submit" text="Publicar"/>
                </div>
            </S.Modal>
        </div>
    )
}