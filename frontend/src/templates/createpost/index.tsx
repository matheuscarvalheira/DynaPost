
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
                    <S.Input 
                        placeholder="Título" 
                        required type="text" 
                        name="title" 
                        autocomplete="off"/>
                    <S.Textarea 
                        placeholder="Conteúdo" 
                        value="" 
                        onChange={handleChange}/>
                </div>
            </S.Modal>
        </div>
    )
}