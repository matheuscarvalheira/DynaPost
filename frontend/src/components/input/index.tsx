'use client';
import React, { useState } from 'react';
import { InputProps } from './props';
import * as S from './styles';

export const Input = ({ placeholder = 'Digite', showIcon = false, ...props }: InputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <S.InputContainer>
      {showIcon && (
        <S.SearchIcon src="./svg/search-icon.svg" />
      )}
      <S.Input 
        value={inputValue} 
        onChange={handleChange} 
        placeholder={placeholder} 
        $showIcon={showIcon}
        {...props}
      />
    </S.InputContainer>
  );
};