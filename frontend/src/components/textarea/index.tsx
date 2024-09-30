'use client';
import React from 'react';
import { TextareaProps } from './props';
import * as S from "./styles"

export const Textarea = ({ placeholder = 'Digite', defaultValue, value, onChange, className }: TextareaProps) => {
  return (
    <S.TextareaContainer className={className}>
      <S.Textarea
        defaultValue={defaultValue}
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
      />
    </S.TextareaContainer>
  );
};