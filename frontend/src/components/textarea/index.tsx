'use client';
import React, { useState } from 'react';
import { TextareaProps } from './props';
import * as S from "./styles"

export const Textarea = ({ placeholder = 'Digite', className }: TextareaProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <S.TextareaContainer className={className}>
      <S.Textarea 
        value={inputValue} 
        onChange={handleChange} 
        placeholder={placeholder} 
      />
    </S.TextareaContainer>
  );
};