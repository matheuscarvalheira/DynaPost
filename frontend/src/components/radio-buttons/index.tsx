"use client";
import { useState } from 'react';
import * as S from './styles';
import { RadioButtonProps } from './props';

export const ButtonGroup = ({options, groupName, required, checkbox}: RadioButtonProps) => {
    const [selected, setSelected] = useState<string | string[]>(checkbox ? [] : '');

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, checked} = e.target
        if (!checkbox) return setSelected(value)
        
        setSelected((prev) => {
            if (Array.isArray(prev)) {
                if (checked) {
                    return [...prev, value];
                }
                return prev.filter((option) => option !== value);
            }
            return prev;
        });
       
    };

    const isChecked = (value: string) => {
        if (checkbox && Array.isArray(selected)) {
            return selected.includes(value);
        }
        return selected === value;
    };

    return (
        <S.ButtonGroupWrapper>
            {options?.length > 0 && options.map((option) => 
                <S.StyledLabel key={option.value} $isChecked={!checkbox ? option.value === selected : selected?.includes(option.value)}>
                    <input 
                        type={checkbox ? "checkbox" : "radio"}
                        value={option.value}
                        checked={isChecked(option.value)}
                        onChange={handleOptionChange}
                        name={groupName}
                        required={required && !checkbox}
                    />
                    {option.label}
                </S.StyledLabel>
            )}
        </S.ButtonGroupWrapper>
    )
}