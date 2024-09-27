'use client';
import React, { useState } from 'react';
import { TextareaProps } from './props';
import { TextareaWrapper, StyledTextarea } from './styles';

export const Textarea = ({ placeholder = 'Digite', className }: TextareaProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <TextareaWrapper className={className}>
      <StyledTextarea 
        value={inputValue} 
        onChange={handleChange} 
        placeholder={placeholder} 
      />
    </TextareaWrapper>
  );
};