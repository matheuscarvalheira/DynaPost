'use-client';
import { ReactNode, useState } from "react";
import { Modal } from "../modal";
import { Textarea } from "../textarea";
import { Input } from "../input";
import { InputStyle } from "./styles";


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
    <div>
        <Modal isopen={true} onClose={() => {}} 
        children={ 
            <div>
                <InputStyle>
                    <Input 
                        placeholder="Selecione a turma" 
                        value={inputValue} 
                        onChange={handleInputChange} />
                    <Input 
                        placeholder="Título" 
                        value={inputValue} 
                        onChange={handleInputChange} />
                    <Textarea 
                        placeholder="Conteúdo" 
                        value={textAreaValue} 
                        onChange={handleTextAreaChange} /> 
                </InputStyle>
            </div>
            } />
        

    </div>
  )
}