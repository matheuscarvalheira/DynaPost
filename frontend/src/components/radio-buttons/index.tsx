"use client";
import { useState } from "react";
import * as S from './styles';
import { RadioButtonProps } from "./props";

export const RadioButtons = ({options}: RadioButtonProps) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedOption(e.target.value);
    };

    return (
        <S.RadioButtonsWrapper>
            {options?.length > 0 && options.map((option) => 
                <S.StyledLabel key={option.value} $isChecked={option.value === selectedOption}>
                    <input 
                        type="radio"
                        value={option.value}
                        checked={option.value === selectedOption}
                        onChange={handleOptionChange}
                    />
                    {option.label}
                </S.StyledLabel>
            )}
        </S.RadioButtonsWrapper>
    )
}