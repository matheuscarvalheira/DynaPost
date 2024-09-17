import { ReactNode, useState } from "react";
import * as S from './styles';
import { InputProps } from "./props";

export const InputComponent = ({ placeholder = "Digite..." }: InputProps): ReactNode => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <S.InputWrapper>
      <S.StyledInput 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder={placeholder} 
      />
      <S.InputText>Você digitou: {inputValue}</S.InputText>
    </S.InputWrapper>
  );
};