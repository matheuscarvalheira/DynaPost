'use client';
import React, { useState } from 'react';
import { TextareaProps } from './props';
import * as S from "./styles"

export const Textarea = ({ placeholder = 'Digite' }: TextareaProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <S.TextareaWrapper>
      <S.StyledTextarea 
        value={inputValue} 
        onChange={handleChange} 
        placeholder={placeholder} 
      />
    </S.TextareaWrapper>
  );
};