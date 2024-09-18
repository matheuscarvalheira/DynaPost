'use client';
import React, { useState } from 'react';
import { InputProps } from './props';
import { InputWrapper, StyledInput, SearchIcon } from './styles';
import { FaSearch } from 'react-icons/fa';

export const Input = ({ placeholder = 'Digite', showIcon = false }: InputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <InputWrapper>
      {showIcon && (
        <SearchIcon>
          <FaSearch />
        </SearchIcon>
      )}
      <StyledInput 
        value={inputValue} 
        onChange={handleChange} 
        placeholder={placeholder} 
        showIcon={showIcon}
      />
    </InputWrapper>
  );
};